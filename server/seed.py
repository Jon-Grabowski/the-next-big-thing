#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app, db
from user import User
from products import Product
from pre_orders import PreOrder




if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing database...')
        User.query.delete()
        Product.query.delete()
        PreOrder.query.delete()
        db.session.commit()

        print('Seeding Users...')
        u1 = User(email='jon@mail.com', password_hash='password', first_name='Jon', last_name='Grabowski', age=37, street_address='111 Happy Street', city='Somewhere', state='NY', zip_code='12345', promo=False)
        u2 = User(email='jess@mail.com', password_hash='password', first_name='Jess', last_name='Papa', age=110, street_address='666 Darkway Street', city='Los Angeles', state='CA', zip_code='66666', promo=True)
        u3 = User(email='amy@mail.com', password_hash='password', first_name='Amelia', last_name='Freeman', age=40, street_address='123 Main', city='Seattle', state='WA', zip_code='80321', promo=True)
        users = [u1,u2, u3]
        db.session.add_all(users)
        
        # for i in range(5):
        #     print(i)

        print('Seeding Products...')
        desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at dolor vel magna aliquam tincidunt. Etiam hendrerit interdum egestas. Morbi imperdiet quis lectus laoreet viverra. Ut in enim id ex malesuada ultrices vel at neque. Nullam faucibus quis nisi sed consectetur. Donec libero dolor, vehicula at dictum in, varius in risus. Sed viverra massa ut tortor fermentum, id porta augue.'
        p1 = Product(name='NextBigThing', price=1500, description=desc, image='../assets/product-img-card-og.jpg')
        p2 = Product(name='NextBigThing Pro', price=2200, description=desc, image='../assets/product_placeholder_pro.jpg')
        p3 = Product(name='NextBigThing Lite', price=950, description=desc, image='../assets/product_placeholder_lite.jpg')
        products = [p1, p2, p3]
        db.session.add_all(products)

        db.session.commit()
