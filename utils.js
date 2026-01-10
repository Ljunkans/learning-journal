export function render(posts) {
  const blogPost = posts
    .map(function (post) {
      return `
      <a href="post.html?id=${post.id}&slug=${post.slug}" class="blog-post-link">  
        <div class="blog-post">
            <img
              class="blog-image"
              src="${post.image}"
              alt="${post.alt}"
            />
            <p class="date">${post.published}</p>
            <h2 class="blog-title">${post.title}</h2>
            <p class="extract">${post.extract}</p>
          </div>
        </a>
  `;
    })
    .join("");
  document.getElementById("blog-posts-container").innerHTML = blogPost;
}
