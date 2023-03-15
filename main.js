//Remove the "All Posts" link from the header.
const posts = document.querySelectorAll("nav ul li")
posts[0].remove();

//Remove the span element that contains the "Read Time" in the featured post.
const span = document.querySelector(".featured aside span");
span.remove();

//Remove the last post from the page
const lastPost = document.querySelectorAll("main .posts article");
lastPost[lastPost.length - 1].remove();

//Remove all titles from all non-featured posts
const noTitle = document.querySelectorAll("main .posts h3");
noTitle.forEach(title => title.remove());