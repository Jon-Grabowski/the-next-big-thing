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
from reviews import Review




if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Clearing database...')
        User.query.delete()
        Product.query.delete()
        PreOrder.query.delete()
        Review.query.delete()
        db.session.commit()

        print('Seeding Users...')
        u1 = User(email='jon@mail.com', password_hash='password', first_name='Jon', last_name='Grabowski', street_address='111 Happy Street', city='Somewhere', state='NY', zip_code='12345', promo=False)
        u2 = User(email='jess@mail.com', password_hash='password', first_name='Jess', last_name='Papa', street_address='666 Darkway Street', city='Los Angeles', state='CA', zip_code='66666', promo=True)
        u3 = User(email='amy@mail.com', password_hash='password', first_name='Amelia', last_name='Freeman', street_address='123 Main', city='Seattle', state='WA', zip_code='80321', promo=True)
        users = [u1,u2, u3]
        db.session.add_all(users)
        
        # for i in range(5):
        #     print(i)

        print('Seeding Products...')
        desc = 'Elevate your expectations with theNextBigThing - a paradigm-shifting invention that dares to challenge the status quo. Crafted with an unwavering commitment to innovation, this model encapsulates the essence of forward-thinking design and unparalleled functionality. Step into a world where boundaries blur and conventional notions are redefined. Experience the extraordinary, as theNextBigThing beckons you to explore uncharted realms of possibility.'
        specs = "Dimension Matrix: 8.2 x 5.6 x 0.72 quarks|Quantum Core Processor: 12.7 Teraflux|HyperVision Display: 6.7 inches of immersive brilliance|Electro-Resonance Battery: Up to 48 hours of boundless exploration|NeuralLink Connectivity: Seamlessly sync minds across dimensions|InfinitySense Cameras: Triple-lens system for capturing parallel perspectives|HarmonicSound Architecture: Immerse in audio frequencies beyond comprehension|EternaTouch Interface: Pressure-sensitive touch interaction"
        descPro = 'Meet theNextBigThing Pro - a masterpiece born from the fusion of cutting-edge technology and visionary aspirations. With an air of sophistication, this model goes beyond conventional limits to offer an experience that is as refined as it is revolutionary. Immerse yourself in a realm where performance knows no bounds and where every interaction is a testament to the power of progress. Unleash the potential of the theNextBigThing Pro!'
        specsPro = "Dimension Matrix: 8.9 x 6.1 x 0.68 quarks|Quantum Pro Plus Processor: 17.9 Teraflux|HyperVision Pro Display: 7.1 inches of transcendent clarity|QuantumCell Power Matrix: Up to 72 hours of continuous advancement|MultiPhase Network Fusion: Unite devices for synchronized cognition|QuantumSight Pro Cameras: Quadruple-lens system for capturing alternate realities|SonicHarmony Pro Audio: Enveloping soundstage with fractal acoustics|QuantumTouch Pro Interface: Enhanced tactile responsiveness for ultimate control"
        descLite = "Simplicity meets complexity in theNextBigThing Lite – an embodiment of minimalist elegance and undiscovered potential. Stripped down to the essential, this model invites you to witness a new dimension of possibility that thrives on subtlety and sophistication. Embrace the art of understatement and set forth on a journey that promises to redefine your understanding of what's achievable."
        specsLite = "Dimension Matrix: 7.8 x 5.2 x 0.82 quarks|NanoCore Processor: 8.4 Teraflux|CrystalClear Display: 6.0 inches of pure visual finesse|NanoCell Energy Unit: Up to 36 hours of limitless discovery|NanoSync Connectivity: Connect seamlessly in compact domains|CrystalEye Cameras: Dual-lens system with light-warping capabilities|SonicBalance Audio: Experience audio equilibrium in every note|NanoGrip Interface: Precision touch sensitivity for effortless navigation"
        
        p1 = Product(name='NextBigThing', price=1500, description=desc, image='../assets/product_images/nbt-product-img-og.jpg')
        p2 = Product(name='NextBigThing Pro', price=2200, description=descPro, image='../assets/product_images/nbt-product-img-pro.jpg')
        p3 = Product(name='NextBigThing Lite', price=950, description=descLite, image='../assets/product_images/nbt-product-img-lite.jpg')
        products = [p1, p2, p3]
        db.session.add_all(products)

        print('Seeding Reviews...')
        r1 = Review(name='Dr.Dre', title='producer/rapper', body="theNextBigThing is a symphony of innovation that harmonizes seamlessly with our evolving world. It's a melody of untapped possibilities that will undoubtedly set the tone for the future of technology.", image='https://pyxis.nymag.com/v1/imgs/d78/db3/e1663ff2983e9b999de28e63e35c7ae4db-29-dr-dre.rsquare.w330.jpg')
        r2 = Review(name='Brad Pitt', title='A-list Actor', body="As an actor, I'm drawn to stories that push boundaries, and theNextBigThing is no different. This product is a masterpiece of technology that empowers users to embrace their roles as pioneers of the digital age.", image='https://pyxis.nymag.com/v1/imgs/70a/8bf/035e2a45436f3c1ee8bb609b2beabfd93c-9-brad-pitt.rsquare.w700.jpg')
        reviews = [r1, r2]
        db.session.add_all(reviews)
        
        db.session.commit()