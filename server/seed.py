#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app, db
from user import User




if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing database...')
        User.query.delete()
        db.session.commit()


        users = []
        for i in range(5):
            print(i)