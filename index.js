const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        likeIcon: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        likeIcon: false,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        likeIcon: false
    }
]
const mainContent = document.getElementById("main")
let s = ""
function render() {
    for (let i = 0; i < posts.length; i++) {
        s += `<div class="avatar-head">
            <img class="avatar" src="${posts[i].avatar}" alt="">
            <div>
                <p><strong>${posts[i].name}</strong></p>
                <p>${posts[i].location}</p>
            </div>
        </div>
        <img id="${i + 1}" class="post" ondblclick="like(this.id)" src="${posts[i].post}" alt="">
        <div class="lower">
            <img class="icon" id="like-icon-${i + 1}" src="images/icon-heart.png" alt="">
            <img class="icon" src="images/icon-comment.png" alt="">
            <img class="icon" src="images/icon-dm.png" alt="">
            <p id="likes"><strong id="like-count-${i + 1}">${posts[i].likes}</strong> likes</p>
            <p class="caption"><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
        </div>
        <hr>`
    }
    mainContent.innerHTML = s
}
render()
function like(id) {
    let likeValue = document.getElementById(`like-count-${id}`)
    const likeIcon = document.getElementById(`like-icon-${id}`)
    if (posts[id - 1].likeIcon === false) {
        posts[id - 1].likes += 1
        likeValue.textContent = posts[id - 1].likes
        posts[id - 1].likeIcon = true
        likeIcon.style.background = 'red'
    }
    else {
        posts[id - 1].likes -= 1
        likeValue.textContent = posts[id - 1].likes
        posts[id - 1].likeIcon = false
        likeIcon.style.background = 'none'
    }
}