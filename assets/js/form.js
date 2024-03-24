document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let formData = {
        username: 
        document.getElementById("username").value,
        title: 
        document.getElementById("title").value,
        content: 
        document.getElementById("content").value
    };

    localStorage.setItem("formData", 
    JSON.stringify(formData));

    window.location.href = "file:///Users/sokos6/Desktop/my-blog-hw4/blog.html";


let submissionElement = 
document.createElement("div");
submissionElement.innerHTML = 
"Title:" + formData.title + 
"Content:" + formData.content + 
"Username:" + formData.username;

let submissionsContainer = 
document.getElementById("submissions");

submissionsContainer.appendChild(submissionElement);

document.getElementById("myForm").reset();

});