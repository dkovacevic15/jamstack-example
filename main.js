async function listRepos(username) {
  const repos = await fetch(
    `http://api.github.com/users/${username}/repos?type=owner?sortBy=updated`
  )
    .then(r => r.json())
    .catch(e => console.error(e));

  const markup = repos
    .map(
      repo => `
    <li>
      <a href="${repo.html_url}">${repo.name}</a>
      (⭐️${repo.stargazers_count})
    </li>
  `
    )
    .join("");

  const targetDiv = document.getElementById("content");

  targetDiv.innerHTML = `
    <ul>
    ${markup}
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  listRepos("dkovacevic15");
});
