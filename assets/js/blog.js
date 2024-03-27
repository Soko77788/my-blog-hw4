const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []
const submissionsDiv = document.getElementById("submissions")

for (const post of blogPosts) {
    console.log(post)
    const div = document.createElement("div")
    //div to hold blog post
    const h2 = document.createElement("h2")
    //create h2 to hold title and description
    h2.innerText = `Title: ${post.title}`
    //create p 
    const p = document.createElement("p")
    p.innerText = `Blog Post: ${post.content}`
    //create 2nd p 
    const p2 = document.createElement("p")
    p2.innerText = `Author: ${post.username}`
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(p2)

    submissionsDiv.appendChild(div)
    // append to submissions div
}  

