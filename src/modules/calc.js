const calc = (price) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = calcBlock.querySelector('.calc-type')
    const calcSquare = calcBlock.querySelector('.calc-square')
    const calcCount = calcBlock.querySelector('.calc-count')
    const calcDay = calcBlock.querySelector('.calc-day')
    const total = document.getElementById('total')

    let animationId

    const countCalc = () => {
        const calcTypeValue = +calcType.value
        const calcSquareValue = +calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcType.value && calcSquare.value) {
            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
            calcAnimation(totalValue)
        } else {
            total.textContent = totalValue
        }
    }

    const calcAnimation = (
        value,
        currentValue = 0,
        stepValue = Math.pow(10, `${value}`.length - 2)
    ) => {
        if (currentValue === value) {
            total.textContent = currentValue
            cancelAnimationFrame(animationId)
        } else {
            const stepExp = `${stepValue}`.length - 1
            const diffExp = `${value - currentValue}`.length - 1

            if (diffExp === stepExp - 1) {
                stepValue = stepExp - 1 >= 0 ? Math.pow(10, stepExp - 1) : Math.pow(10, 0)
            }

            currentValue += stepValue
            total.textContent = currentValue

            animationId = requestAnimationFrame(() => { calcAnimation(value, currentValue, stepValue) })
        }
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
            countCalc()
        }
    })
}

export default calc