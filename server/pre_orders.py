from sqlalchemy_serializer import SerializerMixin
from config import db

class PreOrder(db.Model, SerializerMixin):
    __tablename__ = 'pre_orders'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    confirm_num = db.Column(db.Integer) 

    user = db.relationship('User', back_populates='orders')
    product = db.relationship('Product', back_populates='orders')

    serialize_rules = ('-user.orders', '-product.orders')