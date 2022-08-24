from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine



db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
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
    __tablename__ = 'tiles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Tiles {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Tileinventory(db.Model):
    __tablename__ = 'tileinventory'
    id =  db.Column(db.Integer, primary_key=True)  
    user_id = db.Column(db.Integer, ForeignKey("user.id"))
    tiles_id =  db.Column(db.Integer, ForeignKey("tiles.id"))
    width = db.Column(db.String(80), unique=False, nullable=False)
    length = db.Column(db.String(80), unique=False, nullable=False)
    quantity = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Tileinventory {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "width": self.width,
            "length": self.length,
            "quantity": self.quantity
        }

class Map(db.Model):
    __tablename__ = 'map'
    id =  db.Column(db.Integer, primary_key=True) 
    user_id = db.Column(db.Integer, ForeignKey("user.id"))
  
    def __repr__(self):
        return f'<Map {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
        }

