const link = document.querySelector("header li")
link.remove()
// Why did my tests not pass when I just used "a"? 


const readSpan = document.querySelector("article span")

readSpan.remove()



const featuredTitle = document.querySelector("h2")
featuredTitle.remove()



const titles = document.querySelectorAll("h3")
titles.forEach((titles) => {
    titles.remove()
})

const posts = document.querySelectorAll("article")
posts[3].remove()
