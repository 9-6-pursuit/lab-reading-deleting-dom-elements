const allPosts = document.querySelector("header nav ul li");
allPosts.remove();

const readTime = document.querySelector("main section article aside p span");
readTime.remove();

const stopPlanning = document.querySelector(
  "main section.posts article:last-child"
);
stopPlanning.remove();

const notFeaturedPosts = document.querySelectorAll(
  "main section.posts article h3"
);

notFeaturedPosts.forEach((notFeatured) => {
  notFeatured.remove();
});
