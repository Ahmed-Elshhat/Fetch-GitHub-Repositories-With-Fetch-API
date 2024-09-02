let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.addEventListener("click", function () {
  getRepos();
});

theInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getRepos();
  }
});

// Get Repos Function
function getRepos() {
  if (theInput.value === "") {
    reposData.innerHTML = "<span> Please Write Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Empty The Container
        reposData.innerHTML = "";

        // Loop On Repositories
        data.forEach((repo) => {
          reposData.innerHTML += `
          <div class="repo-box">
            <h3>${repo.name}</h3>
            <div class="btns">
            <span>Stars ${repo.stargazers_count}</span>
              <a href="${repo.clone_url}">Visit</a>
            </div>
          </div>
          `;
        });
      });
  }
}
