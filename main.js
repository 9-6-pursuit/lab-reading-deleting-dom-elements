document.querySelector(".posts article").remove()
document.querySelector("li").remove()

const span = document.querySelector("span")
span.remove()

const postsH3 = document.querySelectorAll(".posts h3")
postsH3.forEach(item => item.remove());