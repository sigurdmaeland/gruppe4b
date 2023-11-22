use context essentials2021
figur1= circle(25, "solid", "red")
figur1



figur2= rectangle(100, 100,  "solid", "red")
figur2

figur3= rectangle(20, 100, "solid", "orange")
figur3


figur4= rectangle(100, 20 , "solid", "orange")
figur4



Plassering = empty-scene(200, 400) 

plassering = put-image( figur1, 100,  155,
  put-image(figur3, 100, 80, put-image(figur4,100, 80 , put-image(figur2,100, 80, Plassering))))
plassering
