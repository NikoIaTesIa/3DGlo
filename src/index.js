import timerWidget from './modules/timerWidget'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'

const date = new Date()
date.setHours(date.getHours() + 12)

timerWidget(date)
menu()
modal()
scroll()