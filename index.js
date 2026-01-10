import { blogPosts } from "./data.js";
import { render } from "./utils.js";

render(blogPosts.slice(0, 3));

document
  .querySelector(".view-more-button")
  .addEventListener("click", function () {
    render(blogPosts);
  });
