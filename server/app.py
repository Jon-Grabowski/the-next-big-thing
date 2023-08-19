#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
import ipdb
from user import User
from products import Product

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)