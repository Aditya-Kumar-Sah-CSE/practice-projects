const searchInput = document.querySelector('.search_input');
const searchBtn = document.querySelector('.search_btn');

const BASE_URL = "https://api.github.com/users/";
const githubProfileDetails = document.querySelector('.github_profile_details');

async function fetchGithubProfileDetails(){
    const response = await fetch(`${BASE_URL}${searchInput.value}`);
    const result = await response.json();
    console.log(result);
    if (result) {
        displayProfileDetails(result)
    }
}
function displayProfileDetails(getProfileDetails){
    // destructure
    const  {login,avatar_url,public_repos,followers,following} = getProfileDetails;
    githubProfileDetails.innerHTML = `
    <p class="username">${login}</p>
    <img class="image" src = ${avatar_url} alt=${login} ></img>
    <p class="repos">Repos : ${public_repos}</p>
    <p class="followers">Followers:${followers}</p>
     <p class="following">Following:${following}</p>`
}
searchBtn.addEventListener('click', fetchGithubProfileDetails)