use context essentials2021
figur1= circle(15, "solid", "orange")
figur1



figur2= triangle(200, "solid", "darkgreen")
figur2

figur3= rectangle(40, 40, "solid", "brown")
figur3


Plassering = empty-scene(200, 400) 

plassering = put-image( figur1, 100,  200,
  put-image(figur3, 100, 15, put-image(figur2,100, 120 ,  Plassering)))

plassering