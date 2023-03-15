document.querySelector("li").remove()

document.querySelector(".featured aside span").remove()

document.querySelector(".posts article").remove()

const articleElements = document.querySelectorAll('article');

for (const article of articleElements) {
  const h3beGone = article.querySelector('h3');
  if (h3beGone) {
    h3beGone.remove();
  }
}


