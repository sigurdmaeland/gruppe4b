use context essentials2021
fun draw-snowman() -> Image:

  sirkel1 = circle(200, "solid", "black")
  sirkel2 = circle(150, "solid", "black")
  sirkel3 = circle(100, "solid", "black")
  sirkel4 =circle(20, "solid", "white")
  sirkel5 =circle(20, "solid", "white")
  munn = rectangle(90, 15, "solid", "white")
  armer = rectangle(90, 15, "solid", "black")
  nese = triangle(30,"solid", "white")
  
  snowman = empty-scene(800,800)

  put-image(sirkel5, 370, 570,
    put-image(sirkel4, 430,570,
      put-image(munn, 400, 500,
        put-image(nese, 400, 540,
        put-image(sirkel1, 400, 75,
          put-image(sirkel3, 400, 550,
            put-image(armer, 595, 330,
              put-image(armer, 205, 330,
                  put-image(sirkel2, 400, 330, snowman)))))))))
  
end 



  