// Remove the "All Posts" link from the header.
document.querySelector("li").remove()
// Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
document.querySelector("span").remove()
// Remove the last post from the page, titled "Stop Planning".
document.querySelector(".posts article").remove();
// Remove all titles from all non-featured posts.
let posts = document.querySelectorAll("h3")
posts.forEach(post =>  {
        post.remove()
    });