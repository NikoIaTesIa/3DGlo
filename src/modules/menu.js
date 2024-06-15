const menu = () => {
    const body = document.querySelector('body')

    body.addEventListener('click', (e) => {
        const menu = document.querySelector('menu')

        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu')
        } else if (!e.target.closest('menu') || e.target.matches('.close-btn') || e.target.matches('menu > ul > li > a')) {
            menu.classList.remove('active-menu')
        }
    })
}

export default menu