const validation = () => {
    const calcForm = document.querySelector('.calc-block')
    const mainForm = document.querySelector('#form1')
    const connectForm = document.querySelector('#form2')
    const popupForm = document.querySelector('#form3')

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

    calcForm.addEventListener('input', (e) => {
        if (e.target.matches('input[type="text"]')) {
            e.target.value = e.target.value.replace(/\D+/, '')
        }
    })

    mainForm.addEventListener('focusout', (e) => {
        if (e.target.matches('input')) { validate(e.target) }
    })
    connectForm.addEventListener('focusout', (e) => {
        if (e.target.matches('input')) { validate(e.target) }
    })
    popupForm.addEventListener('focusout', (e) => {
        if (e.target.matches('input')) { validate(e.target) }
    })
}

export default validation