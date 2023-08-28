from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property, hybrid_method
from sqlalchemy.orm import validates
import ipdb


from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    street_address = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    zip_code = db.Column(db.Integer)
    promo = db.Column(db.Boolean)

    orders = db.relationship('PreOrder', back_populates='user', cascade='all, delete-orphan')

    serialize_rules = ('-_password_hash', '-orders.user', 'orders.product' )
    
    @property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, new_password):
        byte_object = new_password.encode('utf-8')
        encrypted_hash_object = bcrypt.generate_password_hash(byte_object)
        hash_object = encrypted_hash_object.decode('utf-8')
        self._password_hash = hash_object
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
    @validates('email')
    def validate_new_email(self, key, new_email):
        if len(new_email) > 4 and '@' in new_email and '.' in new_email:
            return new_email
        else:
            raise ValueError("Please enter a valid email address")
        
    @validates('street_address')
    def validate_password(self, key, street_address):
        has_number = False
        has_letter = False
        for letter in street_address:
            if letter.isnumeric():
                has_number = True
            elif isinstance(letter,str):
                has_letter = True
        if not has_number:
            raise ValueError("Please include a house or building number")
        elif not has_letter:
            raise ValueError("Address must contain street")
        else:
            return street_address
        
    @validates('zip_code')
    def validate_zip_code(self, key, zip_code):
        try:
            code = int(zip_code)
        except:
            raise ValueError('Not a valid zip code')
        
        if 10000 <= code <= 99999:
            return code
        else:
            raise ValueError('Not a valid zip code')

