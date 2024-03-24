console.log("Turkey")


let storedData = localStorage.getItem("formData");
if (storedData) {
    let formData = 
    JSON.parse(storedData);
    document.querySelector(".title").innerText =("Title: " + formData.title );

    document.querySelector(".content").innerText =("Content: " + formData.content);

    document.querySelector(".posted-by").innerText =("Username: " + formData.username);
} else {

}



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

