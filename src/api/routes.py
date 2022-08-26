"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tiles, Tileinventory, Map, Inventory
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import requests
import random


api = Blueprint('api', __name__)


@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    return jsonify({"msg":'bad username or password'}), 401
    access_token = create_access_token(identity = email)
    return jsonify(access_token = access_token)

@api.route('/tiles', methods=['get'])
def handle_tiles():

    store_tiles = Tiles.query.all()
    store_tiles = [tiles.serialize() for tiles in store_tiles]

    return jsonify(tiles = store_tiles)


@api.route('/tileinventory', methods=['get'])
def handle_tileinventory():

    store_tileinventory = Tileinventory.query.all()
    store_tileinventory = [tileinventory.serialize() for tileinventory in store_tileinventory]

    return jsonify(tileinventory = store_tileinventory)

@api.route('/maps', methods=['GET'])
def handle_map():

    store_map = Map.query.all()
    store_map = [map.serialize() for map in store_map]

    return jsonify(maps = store_map)


@api.route('/inventory', methods=['GET'])
def handle_inventory():

    store_inventory = Inventory.query.all()
    store_inventory = [inventory.serialize() for inventory in store_inventory]

    return jsonify(inventory = store_inventory)


@api.route('/users', methods=['GET'])
def handle_user():  
    store_user = User.query.all()
    store_user = [user.serialize() for user in store_user]

    return jsonify(users = store_user)


@api.route('/users/<int:id>', methods=['GET'])
def getsingleuser(id):  
    store_user = User.query.filter_by(id=id).first()

    return jsonify(user = store_user.serialize())

@api.route('/signup', methods=['POST'])
def createuser():  
    body = request.get_json()
    if all(body.values()): 
        if not User.query.filter_by(email=body["email"]).first():
            newuser = User(
                email = body["email"],
                password = body["password"],
                is_active = True
            )
            db.session.add(newuser)
            db.session.commit()
            return jsonify(message = "user created"),200
        return jsonify(message = "user already exist"),400
    return jsonify(message = "username or password are blank"),400

    
@api.route('/stonetile', methods=['get'])
def createstonetile():
    url = "https://api.thingiverse.com/things/171315/"
    access_token = "34162ed865e5d83e3d6a377af3d10dd9"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(
        url,headers=headers,allow_redirects=True
    )
    return jsonify(response.json())

@api.route('/sewertile', methods=['get'])
def createsewertile():
    url = "https://api.thingiverse.com/things/922445/"
    access_token = "34162ed865e5d83e3d6a377af3d10dd9"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(
        url,headers=headers,allow_redirects=True
    )
    return jsonify(response.json())

@api.route('/towntile', methods=['get'])
def createtowntile():
    url = "https://api.thingiverse.com/things/3457042/"
    access_token = "34162ed865e5d83e3d6a377af3d10dd9"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(
        url,headers=headers,allow_redirects=True
    )
    return jsonify(response.json())

@api.route('/ruintile', methods=['get'])
def createruintile():
    url = "https://api.thingiverse.com/things/528781/"
    access_token = "34162ed865e5d83e3d6a377af3d10dd9"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }
    response = requests.get(
        url,headers=headers,allow_redirects=True
    )
    return jsonify(response.json())

@api.route('/gnrtrfront')
def gen_route():
    def generator():
        width, height = 5, 5 
        tiles = ["A","B","C"]  
        room = []

        for x in range(height):
            room.append([])
            for y in range(width):
                room[x].append(tiles[random.randint(0,len(tiles)-1)])
        return room

    resp = {
        "tiles": generator()
    }

    return jsonify(resp), 200

