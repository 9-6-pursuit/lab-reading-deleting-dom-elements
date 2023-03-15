document.querySelector("li").remove();

const spanElement = document.querySelectorAll("span")[0];
spanElement.remove();


document.querySelector(".posts article").remove();
// const lastPost = document.querySelectorAll("article");
// const lastIndex = lastPost.length - 1;
// lastPost[lastIndex].remove();


const titles = document.querySelectorAll(".posts h3");
 titles.forEach(title => {
    title.remove();
 })
