const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '697956225:AAFlAkw8AlhBtGhXkpt6vzQYRxHUoANnnZM'
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Здравствуй! Пожалуйста, покажи, где ты находишься.')
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "Отправить мое местоположение",
                request_contact: true
            }] ["Неважно"]]
        }
    }
})

