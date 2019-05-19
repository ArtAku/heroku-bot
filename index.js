const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '697956225:AAFlAkw8AlhBtGhXkpt6vzQYRxHUoANnnZM'
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Здравствуй! Пожалуйста, покажи, где ты находишься.')
})

bot.onText(/^\/place_order/, function (msg, match) {
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    };
    bot.sendMessage(msg.chat.id, "How can we contact you?", option).then(() => {
        // handle user phone
    })

});

