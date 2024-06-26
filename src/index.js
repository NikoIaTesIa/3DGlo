import timerWidget from './modules/timerWidget'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'

const date = new Date()
date.setHours(date.getHours() + 12)

timerWidget(date)
menu()
modal()
scroll()
validation()
tabs()
slider(
    '.portfolio-content', '.portfolio-item',
    '.portfolio-dots', '.dot',
    '#arrow-left', '#arrow-right',
    'portfolio-item-active', 'dot-active'
)
calc(100)