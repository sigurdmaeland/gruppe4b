include image

# huskroppen
house_body = rectangle(150, 100, "solid", "brown")

# tak

roof = isosceles-triangle(150, 120, "solid", "red")

# dør
door = rectangle(30, 60, "solid", "green")

# vindu
window = rectangle(40, 30, "solid", "light-blue")

# sammenføyning av tak og karosseri
house_with_roof = above(roof, house_body)

# plassere døren
house_with_door = place-image(door, 130, 140, house_with_roof)

# plassering av vinduer
house_with_windows = place-image(window, 90, 100,
  place-image(window, 170, 100, house_with_door))

# endelig bilde
house_with_windows 