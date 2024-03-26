const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []
const submissionsDiv = document.getElementById("submissions")

for (const post of blogPosts) {
    console.log(post)
    const div = document.createElement("div")
    //div to hold blog post
    const h2 = document.createElement("h2")
    //create h2 to hold title and description
    h2.innerText = post.title
    //create p 
    const p = document.createElement("p")
    p.innerText = post.content
    div.appendChild(h2)
    div.appendChild(p)

    submissionsDiv.appendChild(div)
    // append to submissions div
}  

