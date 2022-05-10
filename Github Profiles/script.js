const APIURL = "https://api.github.com/users/";

const formEl = document.getElementById("form");
const searchEl = document.getElementById("search");
const mainEl = document.getElementById("main");

async function getUser(username) {
  // === Using async await
  try {
    const { data } = await axios(APIURL + username);

    // console.log(data);

    createdUserCard(data);
    getUserRepos(username);
  } catch (err) {
    // console.log(err);

    if (err.response.status == 404) {
      createErrorCard("No profil with this username");
    }
  }

  // === Using fetch
  // axios(APIURL + username);
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));
}

// to do here
async function getUserRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createdUserCard(user) {
  const cardHtml = `
  <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repository</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
  `;

  mainEl.innerHTML = cardHtml;
}

function createErrorCard(message) {
  const cardHtml = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;

  mainEl.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

formEl.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const user = searchEl.value;

  if (user) {
    getUser(user);

    searchEl.value = "";
  }
});
