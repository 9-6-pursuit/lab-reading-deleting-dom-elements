document.querySelector(".posts article").remove()

document.querySelector("li").remove()

const spanRemoval = document.querySelector("span")
spanRemoval.remove()

const titleRemoval = document.querySelectorAll(".posts h3")
titleRemoval.forEach(function(item) {
    item.remove()
})
