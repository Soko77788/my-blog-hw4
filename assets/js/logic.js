let lightDark = document.getElementById("lightDark");

lightDark.onclick = function(){
    document.body.classList.toggle("light-theme");
}


function toggleTheme() {

    document.body.classList.toggle('dark-mode');

    let isDarkMode = document.body.classList.contains('dark-mode');
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

document.getElementById('lightDark').addEventListener('click', toggleTheme);

let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}
}