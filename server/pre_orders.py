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

    @classmethod
    def order_nums(self):
        total_preorders = PreOrder.query.count()
        og_preorders = PreOrder.query.filter_by(product_id = 1).count()
        pro_preorders = PreOrder.query.filter_by(product_id = 2).count()
        lite_preorders = PreOrder.query.filter_by(product_id = 3).count()
        nums_dict = {
            'total_preorders': total_preorders,
            'og_preorders': og_preorders,
            'pro_preorders': pro_preorders,
            'lite_preorders': lite_preorders
        }
        return nums_dict