#!/usr/bin/env python3

from flask import request, make_response, session
from flask_restful import Resource
from random import randint
import ipdb
from user import User
from products import Product
from pre_orders import PreOrder
from reviews import Review
from sqlalchemy.exc import IntegrityError
from config import app, db, api

#######################################################
#
#           USER VIEWS
#
#######################################################
class Users(Resource):

    def post(self):
        data = request.get_json()
        email = data['email']
        try:
            user = User(
                email = data['email'],
                password_hash = data['password'],
                first_name = data['first_name'].capitalize(),
                last_name = data['last_name'].capitalize(),
                street_address = data['street_address'],
                city = data['city'].capitalize(),
                state = data['state'],
                zip_code = int(data['zip_code']),
                promo = data['promo']
            )

            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id

        except ValueError as e:
            if 'int()' in str(e):
                response = make_response({"errors": "Invalid zip code"}, 400)
                return response
            else:    
                response = make_response({"errors": str(e)}, 400)
                return response
        except IntegrityError as i:
            response = make_response({"errors": f'Account for {email} already exists.'}, 400)
            return response
        except: 
            response = make_response({"errors": f'Could not create account for {email}'}, 400)
            return response

        return make_response(user.to_dict(), 201)

api.add_resource(Users, '/users')

class UsersByID(Resource):

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
                response = make_response({"errors": str(e)}, 400)
                return response
        
        db.session.commit()

        user_dict = user.to_dict()
        response = make_response(user_dict, 202)
        return response

    def delete(self, id):
        try:
            user = User.query.filter_by(id=id).first()
        except Exception as e:
            return make_response({'error': str(e)}, 404)
        
        db.session.delete(user)
        db.session.commit()
        session['user_id'] = None

        return make_response({}, 204)
    
api.add_resource(UsersByID, '/users/<int:id>')



@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    try:
        user = User.query.filter_by(email=email).first()
        if user.authenticate(data['password']):
            session['user_id'] = user.id
            response = make_response(user.to_dict(), 200)
            return response
        else:
            return make_response({'error': 'incorrect password'}, 401)
    except Exception:
        return make_response({'error': f'No account associated with {email}'}, 404)
    
    
    
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
        }, 401)

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

class PreOrdersStats(Resource):

    def get(self):
        nums_dict = PreOrder.order_nums()
        # og_orders = PreOrder.query.filter_by(product_id = 1).all()
        return make_response(nums_dict, 200)
    
api.add_resource(PreOrdersStats, '/preordersstats')


#######################################################
#
#           REVIEWS VIEWS
#
#######################################################

class Reviews(Resource):
    def get(self):
        reviews = [rev.to_dict() for rev in Review.query.all()]
        return make_response(reviews, 200)
    
    def post(self):
        data = request.json
        try:
            review = Review(
                name = data['name'],
                title = data['title'],
                body = data['body'],
                image = data['image']
            )
        except Exception as e:
            return make_response({'error': str(e)}, 400)
        
        db.session.add(review)
        db.session.commit()

        return make_response(review.to_dict(), 201)
    
api.add_resource(Reviews, '/reviews')

class ReviewsById(Resource):
    
    def patch(self,id):
        review = Review.query.filter_by(id=id).first()
        if not review:
            response = make_response({'error': 'Review not found'}, 404)
            return response
        
        data = request.get_json()
        for attr in data: 
            try:
                setattr(review, attr, data[attr])
            except ValueError as e:
                response = make_response({"errors": str(e)}, 400)
                return response
        
        db.session.commit()

        review_dict = review.to_dict()
        response = make_response(review_dict, 202)
        return response

    def delete(self, id):
        try:
            review = Review.query.filter_by(id=id).first()
        except Exception as e:
            return make_response({'error': str(e)}, 404)
        
        db.session.delete(review)
        db.session.commit()

        return make_response({}, 204)


api.add_resource(ReviewsById, '/reviews/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)