#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
import ipdb
from user import User

# Local imports
from config import app, db, api

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)