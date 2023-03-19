
let link = document.querySelector("li")
link.remove()

 let span = document.querySelector("span")
 span.remove()

let element = document.querySelector(".posts article")
element.remove()

let titles = document.querySelectorAll(".posts h3")
titles.forEach(el => el.remove())
console.log("Here")