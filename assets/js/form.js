document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
})

   

//     let formData = { 
//         username: 
//         document.getElementById("username").value,
//         title: 
//         document.getElementById("title").value,
//         content: 
//         document.getElementById("content").value
//     };

// localStorage.setItem("formData", JSON.stringify(formData));


//     window.location.href = "file:///Users/sokos6/Desktop/my-blog-hw4/blog.html";

//     document.getElementById("form").reset();

// });





// let submissionElement = 
// document.createElement("div");
// submissionElement.innerHTML = 
// "Title:" + formData.title + 
// "Content:" + formData.content + 
// "Username:" + formData.username;

// let submissionsContainer = 
// document.getElementById("submissions");

// submissionsContainer.appendChild(submissionElement);

const collectFormData = function() {


let formDataArray = [];

while(true) {
    let username =
    document.getElementById("username").value;

        if (username === null) {
            break;
        }

    let title = 
    document.getElementById("title").value;

        if (title === null) {
            break;
        }

    let content =
    document.getElementById("content").value;

        if(content === null) {
            break;
        }
        else {
            break;
        }

    let formData = {
        username: username,
        title: title,
        content: content
    };

    formDataArray.push(formData);
    console.log(formDataArray)

};

return formDataArray
}

localStorage.setItem("formDataArray", JSON.stringify(formDataArray));


    window.location.href = "file:///Users/sokos6/Desktop/my-blog-hw4/blog.html";

    document.getElementById("form").reset();
