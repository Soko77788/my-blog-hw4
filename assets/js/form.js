
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []
   

    let formData = { 
        username: 
        document.getElementById("username").value,
        title: 
        document.getElementById("title").value,
        content: 
        document.getElementById("content").value
    };

    blogPosts.push(formData)

localStorage.setItem("blogPosts", JSON.stringify(blogPosts));



    window.location.href = "blog.html";

    document.getElementById("form").reset();

});





