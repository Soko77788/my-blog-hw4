let lightDark = document.getElementById("lightDark");

lightDark.onclick = function(){
    document.body.classList.toggle("light-theme");
}

//Use local storage to set a theme to light/dark

function toggleTheme() {
    let body = document.body;

    body.classList.toggle('dark-theme');

    let isDarkMode = body.classList.contains('dark-theme');

    let isLightMode = body.classList.contains('light-theme');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

//Get theme from local storage and apply whichever theme is the key in storage to retain modes between pages

document.getElementById('lightDark').addEventListener('click', toggleTheme);

let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') 
    document.body.classList.add('dark-theme');
    else {
        document.body.classList.add('light-theme');
    }

