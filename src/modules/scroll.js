const scroll = () => {
    const menuItems = document.querySelectorAll('menu > ul > li > a')
    const chevron = document.getElementById('chevron')

    const handleScroll = (item) => {
        const itemTarget = document.getElementById(item.getAttribute('href').slice(1))

        itemTarget.scrollIntoView({ block: "start", behavior: "smooth" })
    }

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            handleScroll(item)
        })
    })

    chevron.addEventListener('click', (event) => {
        event.preventDefault()
        handleScroll(chevron)
    })
}

export default scroll