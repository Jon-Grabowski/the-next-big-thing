from sqlalchemy_serializer import SerializerMixin
from config import db

class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    description = db.Column(db.String)
    image = db.Column(db.String)
    specs = db.Column(db.String)

    orders = db.relationship('PreOrder', back_populates='product', cascade='all, delete-orphan')

    serialize_rules = ('-orders.user', '-orders.product', '-orders.product_id' )