const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '697956225:AAFlAkw8AlhBtGhXkpt6vzQYRxHUoANnnZM'
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Здравствуй!')
})

