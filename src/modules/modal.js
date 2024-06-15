const modal = () => {
    const modal = document.querySelector('.popup')
    const modalCallingBlock = document.getElementById('service-block')
    const translateValue = 110

    let animationId, step, accelerationRatio

    const popupAnimation = () => {
        animationId = requestAnimationFrame(popupAnimation)

        if (step >= 0) {
            modal.style.transform = `translateY(${-step}%)`
        } else {
            modal.style.transform = `translateY(0%)`
            cancelAnimationFrame(animationId)

            setTimeout(() => {
                modal.style.transition = '0.2s'
                modal.style.backgroundColor = 'rgba(0, 0, 0, .5)'
            }, 0)
        }

        accelerationRatio += 0.2
        step -= accelerationRatio
    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            const inputs = modal.querySelectorAll('input')

            inputs.forEach(item => { item.value = '' })
            modal.style.display = ''
            modal.style.transition = ''
            modal.style.transform = `translateY(-${translateValue}%)`
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        }
    })

    modalCallingBlock.addEventListener('click', (e) => {
        if (e.target.matches('.popup-btn')) {
            modal.style.display = 'block'
            modal.style.transform = `translateY(-${translateValue}%)`
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)'

            step = translateValue
            accelerationRatio = 5
            popupAnimation()
        }
    })
}

export default modal