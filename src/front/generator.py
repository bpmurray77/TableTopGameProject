import random

width, height = 5, 5 
tiles = ["A","B","C"]  
room = []

for x in range(height):
    room.append([])
    for y in range(width):
        room[x].append(tiles[random.randint(0,len(tiles)-1)])


print (room)