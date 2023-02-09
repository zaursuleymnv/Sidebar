let sidebar = document.querySelector('.sidebar')
let burger = document.querySelector('#showBtn');
burger.addEventListener('click', function() {
    sidebar.classList.toggle('show')
    burger.classList.toggle('show')
})