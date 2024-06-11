const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
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

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            modal.style.transform = `translateY(-${translateValue}%)`
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)'

            step = translateValue
            accelerationRatio = 5
            popupAnimation()
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = ''
        modal.style.transition = ''
        modal.style.transform = `translateY(-${translateValue}%)`
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    })
}

export default modal