"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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


    



