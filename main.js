console.log("it worked xs")
document.querySelector("header li").remove()
document.querySelector("section span").remove()
document.querySelectorAll(".posts article")[2].remove()

let posts = document.querySelectorAll(".posts article h3")
for (let index = 0; index < posts.length; index++) {
    posts[index].remove()
    
}