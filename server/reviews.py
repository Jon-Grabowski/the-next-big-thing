from sqlalchemy_serializer import SerializerMixin
from config import db

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    title = db.Column(db.String)
    body = db.Column(db.String)
    image = db.Column(db.String)
