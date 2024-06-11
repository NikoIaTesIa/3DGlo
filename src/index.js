import timerWidget from './modules/timerWidget'
import menu from './modules/menu'
import modal from './modules/modal'

const date = new Date()
date.setHours(date.getHours() + 12)

timerWidget(date)
menu()
modal()