const slider = (
    sliderContainer, sliderItem,
    dotContainer, dotItem,
    btnId1, btnId2,
    slideActv = 'slide-active',
    dotActv = 'dot-active'
) => {
    const sliderBlock = document.querySelector(sliderContainer)
    const slides = document.querySelectorAll(sliderItem)
    const dotsBlock = document.querySelector(dotContainer)
    const timeInterval = 2000

    let slideIndex = 0
    let dots, intervalId

    const addDots = (container, count) => {
        while (count > 0) {
            const dot = document.createElement('li')

            dot.classList.add(dotItem.slice(1))
            container.append(dot)
            count--
        }

        dots = container.querySelectorAll(dotItem)
    }

    const prevSlide = (elems, index, className) => {
        elems[index].classList.remove(className)
    }

    const nextSlide = (elems, index, className) => {
        elems[index].classList.add(className)
    }

    const autoSlide = () => {
        prevSlide(slides, slideIndex, slideActv)
        prevSlide(dots, slideIndex, dotActv)

        slideIndex = (slideIndex + 1) % slides.length

        nextSlide(slides, slideIndex, slideActv)
        nextSlide(dots, slideIndex, dotActv)
    }

    const startSlide = (timer = 1500) => {
        intervalId = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(intervalId)
    }

    if (!sliderBlock || !dotsBlock || slides.length === 0) {
        console.log(Error('Invalid parameters! No such node(s) in the document.'));
        return;
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.matches(`${dotItem}, ${btnId1}, ${btnId2}`)) {
            prevSlide(slides, slideIndex, slideActv)
            prevSlide(dots, slideIndex, dotActv)

            if (e.target.matches(btnId1)) {
                slideIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1
            } else if (e.target.matches(btnId2)) {
                slideIndex = (slideIndex + 1) % slides.length
            } else if (e.target.matches(dotItem)) {
                slideIndex = [...dots].indexOf(e.target)
            }

            nextSlide(slides, slideIndex, slideActv)
            nextSlide(dots, slideIndex, dotActv)
        }
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`${dotItem}, ${btnId1}, ${btnId2}`)) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(`${dotItem}, ${btnId1}, ${btnId2}`)) {
            startSlide(timeInterval)
        }
    }, true)

    addDots(dotsBlock, slides.length)
    startSlide(timeInterval)
}

export default slider