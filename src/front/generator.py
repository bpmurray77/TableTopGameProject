import random
from flask import Flask

@app.route('./pages/gnrtrfront')
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
        generator()
    }

    return jsonify(resp), 200



if __name__ == "__gnrtrfront__":
    app.run(debug=True)