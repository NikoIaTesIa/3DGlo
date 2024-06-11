import timerWidget from './modules/timerWidget'
import menu from './modules/menu'

const date = new Date()
date.setHours(date.getHours() + 12)

timerWidget(date)
menu()