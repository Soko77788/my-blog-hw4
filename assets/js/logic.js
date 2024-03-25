let lightDark = document.getElementById("lightDark");

lightDark.onclick = function(){
    document.body.classList.toggle("light-theme");
}


// function toggleTheme() {

//     document.body.classList.toggle('dark-theme');

//     let isDarkMode = document.body.classList.contains('dark-theme');
// localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

// document.getElementById('lightDark').addEventListener('click', toggleTheme);

// let savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//     document.body.classList.add('dark-theme');
// }
// }

function toggleTheme() {
    let body = document.body;

    body.classList.toggle('dark-theme');

    let isDarkMode = body.classList.contains('dark-theme');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

document.getElementById('lightDark').addEventListener('click', toggleTheme);

let savedTheme = localStorage.getItem('theme');localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
