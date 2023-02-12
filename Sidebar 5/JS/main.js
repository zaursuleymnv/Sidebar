const sidebar = document.querySelector('.sidebar')
const burger = document.querySelector('#showBtn')
const logoSidebar = document.querySelector('.sidebar-header-logo')
const navSpan1 = document.querySelector('.span-text1')
const navSpan2 = document.querySelector('.span-text2')
const navSpan3 = document.querySelector('.span-text3')
const navSpan4 = document.querySelector('.span-text4')
const navSpan5 = document.querySelector('.span-text5')

burger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    burger.classList.toggle('show');
    logoSidebar.classList.toggle('show');
    navSpan1.classList.toggle('show');
    navSpan2.classList.toggle('show');
    navSpan3.classList.toggle('show');
    navSpan4.classList.toggle('show');
    navSpan5.classList.toggle('show');

    // navSpan.forEach(e => {
    //     e.addEventListener('click', (e) => {
    //         this.classList.toggle('show')
    //     })
    // })
});

// if(burger.addEventListener('click', () => {
//     navSpan.forEach(e => {
//         e.addEventListener('click', (e) => {
//             this.classList.toggle('show')
//         })
//     })
// }));


