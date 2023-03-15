document.querySelector('li').remove()

document.querySelector('span').remove()

document.querySelector('.posts article').remove()

let removeTitles = document.querySelectorAll('.posts article h3')
removeTitles.forEach((title) => {
  title.remove()
})