import timerWidget from './modules/timerWidget'

const date = new Date()
date.setHours(date.getHours() + 12)

timerWidget(date)