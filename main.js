document.querySelector("li").remove()
document.querySelector("span").remove()
document.querySelector(".posts article").remove()

const postTitles = document.querySelectorAll('.posts h3');
postTitles.forEach(title => {
  title.remove() ;
});

// let articles = document.querySelectorAll(".posts h3")
// articles.forEach(article => {
//     article.remove()
// })

