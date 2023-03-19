document.querySelector("li").remove()
document.querySelector("span").remove()
document.querySelector(".posts article").remove()
let headings = document.querySelectorAll("h3")
headings.forEach(heading => {
    heading.remove()
})