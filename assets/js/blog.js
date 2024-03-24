console.log("Turkey")


let storedData = localStorage.getItem("formData")
if (storedData) {
    let formData = 
    JSON.parse(storedData);
    document.querySelector(".title").innerText =("Title: " + formData.title );

    document.querySelector(".content").innerText =("Content: " + formData.content);

    document.querySelector(".posted-by").innerText =("Username: " + formData.username);
} else {

}

