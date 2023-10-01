const url = "https://api.github.com/users";
const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-Btn")
const profileSection = document.querySelector(".profileSection")
const loading = document.querySelector(".loading")

const profileDisplay = (profile) => {
    return (
        `
        <div class="profile-container">
            <div class="profile-heading">
                <div class="profile-info">  
                <div class="img-sec">
                    <img src=${profile.avatar_url} alt="avatar">
                    
                </div> 
                    <div class="heading-info">
                        <h2>${profile.name}</h2>
                    <h2>${profile.login}</h2>
                    </div>
                </div>
                <button>
                <a href="${profile.html_url}" target="_blank">
                Check Profile</a>
               </button>
            </div>

            <div class="profile-about">
                <h2>About</h2>
                <p>${profile.bio}</p>
            </div>

            <div class="profile-item">
                <div class="profile-itembox">
                    <h2>Followers</h2>
                    <p>${profile.followers}</p>

                </div>
                <div class="profile-itembox">
                    <h2>Following</h2>
                    <p>${profile.following}</p>
                </div>
                <div class="profile-itembox">
                    <h2>Repos</h2>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>
        `
    )
}

const fetchDataProfile = async () => {
    const username = searchInput.value;
    console.log(username);
    loading.innerText = "loading...."
    loading.style.color = "black";
    try {
        const response = await fetch(`${url}/${username}`)
        const data = await response.json()
        profileSection.innerHTML = profileDisplay(data);
        if (data.name) {
            loading.innerText = ""
        } else {
            loading.innerHTML = data.message;
            loading.style.color = "red";
            profileSection.innerHTML = "";
        }
        // console.log(data)
    } catch (error) {
        console.log(error);
        loading.innerText = ""
    }
}

searchBtn.addEventListener("click", fetchDataProfile)
