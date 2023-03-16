
document.querySelector("li").remove()
document.querySelector("span").remove()
document.querySelector(".posts article").remove()

let allTitles = document.querySelectorAll(".posts h3")
allTitles.forEach((title) => title.remove())
