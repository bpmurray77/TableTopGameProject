from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Tiles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    size = db.Column(db.String(80), unique=False, nullable=False)
    quantity = db.Column(db.Integer, primary_key=True)

    def __repr__(self):
        return f'<Tiles {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "size": self.size,
            "quantity": self.quantity
        }

class Tileinventory(db.Model):
    id =  db.Column(db.Integer, primary_key=True)  
    user_id = db.Column(db.String(80), unique=False, nullable=False)
    tiles_id =  db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Tileinventory {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
        }

class Map(db.Model):
    id =  db.Column(db.Integer, primary_key=True) 
    user_id = db.Column(db.String(80), unique=False, nullable=False)
    tileinventory_id =  db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Map {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "tileinventory_id": self.tileinventory_id
        }

