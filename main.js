const removedPost = document.querySelector('li')
removedPost.remove()
document.querySelector('span').remove()
const lastPost = document.querySelectorAll('article')
lastPost[2].remove()

const titles = document.querySelectorAll('h3')

titles.forEach((title) => {
    title.remove()
})