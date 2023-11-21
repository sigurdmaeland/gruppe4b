use context essentials2021
include image
slice = flip-vertical(isosceles-triangle(200, 45, "solid", "orange"))
crust = rectangle(150, 20, "solid", "brown")
pepperoni = circle(15, "solid", "red")
put-image(pepperoni, 75, 50,
 put-image(pepperoni, 45, 140,
 put-image(pepperoni, 100, 135,
 put-image(pepperoni, 65, 95,
overlay-align("center","top", crust, slice)))))



