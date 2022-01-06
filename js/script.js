// Cursor
let cursor = document.getElementById('cursor')
document.addEventListener('mousemove',function(e){
    var x = e.clientX
    var y = e.clientY
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
})

//Color 
var colorWell = ""
var defaultColor = "#54a0ff"

window.addEventListener("load", startup, false)
function startup() {
    colorWell = document.querySelector("#color")
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false)
    colorWell.addEventListener("change", updateAll, false)
    colorWell.select()
  }
  function updateFirst(event) {
    var p = document.querySelector("h3")
    var h = document.querySelector(".information")
    if (p,h) {
      p.style.color = event.target.value
      h.style.color = event.target.value
    }
  }
  function updateAll(event) {
    document.querySelectorAll("h3").forEach(function(p) {
      p.style.color = event.target.value
    })
      document.querySelectorAll(".information").forEach(function(v) {
        v.style.color = event.target.value
      })
        document.querySelectorAll("#cursor").forEach(function(h) {
          h.style.background = event.target.value
        })
          document.querySelectorAll("header").forEach(function(h) {
            h.style.background = event.target.value
          })
            document.querySelectorAll("nav").forEach(function(h) {
              h.style.background = event.target.value
            })
  }

