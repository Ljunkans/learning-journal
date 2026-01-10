import { blogPosts } from "./data.js";
import { render } from "./utils.js";

const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id"));

const post = blogPosts.find((p) => p.id === postId);

function renderPost(post) {
  if (!post) {
    document.getElementById("post-container").innerHTML =
      "<p>Blogginlägget hittades inte.</p>";
    return;
  }

  const bodyHtml = post.body
    .map((block) => {
      const classAttr = block.class ? ` class="${block.class}"` : "";
      return `<${block.type}${classAttr}>${block.content}</${block.type}>`;
    })
    .join("");

  document.getElementById("post-container").innerHTML = `
    <p class="date">${post.published}</p>
    <h1>${post.title}</h1>
    <p>${post.extract}</p>
    <img class="blog-image" src="${post.image}" alt="${post.alt}" />
    <p>${bodyHtml}</p>
    <h2 class="recent-posts-title margin-heading">Recent posts</h2>
  `;
}

console.log("Post som ska renderas:", post);
renderPost(post);
render(blogPosts.slice(0, 3));
