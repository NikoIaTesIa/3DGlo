const validation = () => {
    const calcItems = document.querySelectorAll('.calc-block > input[type="text"]')
    const mainItems = document.querySelectorAll('#form1 input')
    const connectItems = document.querySelectorAll('#form2 input')
    const popuptItems = document.querySelectorAll('#form3 input')

    const validate = (elem) => {
        switch (elem.value !== '') {
            case elem.type === 'text':
                if (elem.placeholder === 'Ваше сообщение') {
                    elem.value = elem.value.replace(/[^А-Яа-я\!\?\.\,\-\s]/g, '')
                } else {
                    let strArray

                    elem.value = elem.value.replace(/[^А-Яа-я\-\s]/g, '');
                    elem.value = elem.value.replace(/[А-Яа-я]/g, c => c.toLowerCase());

                    strArray = elem.value.split(' ')
                    strArray.forEach((item, index) => {
                        if (/[а-я]/.test(item)) {
                            strArray[index] = item[0].toUpperCase() + item.slice(1)
                        }
                    })
                    elem.value = strArray.join(' ')
                }
                break;
            case elem.type === 'email':
                elem.value = elem.value.replace(/[^A-Za-z\d\@\-\_\.\!\~\*\']/g, '');
                break;
            case elem.type === 'tel':
                elem.value = elem.value.replace(/[^\d\(\)\-]/g, '');
                break;
            default:
                console.log(Error('Wrong input type!'));
                break;
        }

        elem.value = elem.value.replace(/\s{2,}/g, ' ')
        elem.value = elem.value.replace(/\-{2,}/g, '-')
        elem.value = elem.value.replace(/^\s/, '').replace(/\s$/, '')
        elem.value = elem.value.replace(/^\-/, '').replace(/\-$/, '')
    }

    calcItems.forEach(item => item.addEventListener('input', () => item.value = item.value.replace(/\D+/, '')))

    mainItems.forEach(item => item.addEventListener('blur', () => validate(item)))
    connectItems.forEach(item => item.addEventListener('blur', () => validate(item)))
    popuptItems.forEach(item => item.addEventListener('blur', () => validate(item)))
}

export default validation