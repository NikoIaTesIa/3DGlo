const scroll = () => {
    const menu = document.querySelector('menu')
    const chevron = document.getElementById('chevron')

    const handleScroll = (item) => {
        const itemTarget = document.getElementById(item.getAttribute('href').slice(1))

        itemTarget.scrollIntoView({ block: "start", behavior: "smooth" })
    }

    menu.addEventListener('click', (e) => {
        if (e.target.matches('ul > li > a')) {
            e.preventDefault()
            handleScroll(e.target)
        }
    })

    chevron.addEventListener('click', (e) => {
        e.preventDefault()
        handleScroll(chevron)
    })
}

export default scroll