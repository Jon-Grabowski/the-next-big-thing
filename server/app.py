#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
from random import randint
import ipdb
from user import User
from products import Product
from pre_orders import PreOrder

# Local imports
from config import app, db, api

#######################################################
#
#           USER VIEWS
#
#######################################################
class Users(Resource):

    def post(self):
        data = request.get_json()
        try:
            user = User(
                email = data['email'],
                password_hash = data['password'],
                first_name = data['first_name'],
                last_name = data['last_name'],
                age = int(data['age']),
                street_address = data['street_address'],
                city = data['city'],
                state = data['state'],
                zip_code = data['zip_code'],
                promo = data['promo']
            )
        except ValueError as e:
            response = make_response({"errors": [str(e)]}, 400)
            return response
        
        db.session.add(user)
        db.session.commit()

        session['user.id'] = user.id
        # ipdb.set_trace()
        return make_response(user.to_dict(), 201)

api.add_resource(Users, '/users')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    try:
        user = User.query.filter_by(email=data['email']).first()   
        if user.authenticate(data['password']):
            session['user_id'] = user.id
            response = make_response(user.to_dict(), 200)
            return response
        else:
            return make_response({'error': 'name or password incorrect'}, 401)
    except:
        return make_response({'error': 'name or password incorrect'}, 401)
    
@app.route('/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None
    return make_response('', 204)

@app.route('/authorized', methods=['GET'])
def authorize():
    try:
        user = User.query.filter_by(id=session.get('user_id')).first()
        response = make_response(user.to_dict(), 200)
        return response
    except:
        return make_response({
            "error": "User not found"   
        }, 404)

class UserByID(Resource):

    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            response = make_response({'error': 'User not found'}, 404)
            return response

        data = request.get_json()
        for attr in data: 
            try:
                setattr(user, attr, data[attr])
            except ValueError as e:
                response = make_response({"errors": [str(e)]})
                return response
        
        db.session.commit()

        user_dict = user.to_dict()
        response = make_response(user_dict, 202)
        return response

api.add_resource(UserByID, '/users/<int:id>')
#######################################################
#
#           PRODUCT VIEWS
#
#######################################################

class Products(Resource):
    
    def get(self):
        products = [p.to_dict() for p in Product.query.all()]
        return make_response(products, 200)
    
api.add_resource(Products, '/products')

#######################################################
#
#           PRE-ORDERS VIEWS
#
#######################################################

class PreOrders(Resource):

    def post(self):
        data = request.json
        num = randint(80000000, 89999999)
        try:
            pre_order = PreOrder(
                user_id= data['user_id'],
                product_id = data['product_id'],
                confirm_num = num
            )
        except Exception as e:
            return make_response({'error': str(e)}, 400)
        
        db.session.add(pre_order)
        db.session.commit()

        return make_response(pre_order.to_dict(), 201)

api.add_resource(PreOrders, '/pre_orders')

class PreOrdersById(Resource):

    def delete(self, id):
        try:
            preorder = PreOrder.query.filter_by(id=id).first()
        except Exception as e:
            return make_response({'error': str(e)}, 404)
        
        db.session.delete(preorder)
        db.session.commit()

        return make_response({}, 204)
    
api.add_resource(PreOrdersById, '/preorders/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)