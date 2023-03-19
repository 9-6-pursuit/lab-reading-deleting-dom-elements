//remove the "All Posts" link from the header.

/* to remove the "All Post" link we have to:
1. select the element we want to use using the document.querySelector() method
*/
let link = document.querySelector("li");
//the code above selects the first a tag (which is a link tag); in this case this is the tag we want because it is the "All Posts" link
//I tried to use the a tag ("a") directly but it didnt work because it is within the li tag

link.remove(); //this should remove our "All Posts" link


//Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.

document.querySelector('span').remove();

document.querySelector(".posts article").remove()
//how does this remove the last post? I dont know!

let heading = document.querySelectorAll("h3");
heading.forEach(head => {
   head.remove();
})