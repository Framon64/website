const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на фактический токен вашего бота
const bot = new TelegramBot('6432360659:AAFAMrYGAxzC4Re_4VPA5_jPCFdMlh03_Zk', { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я ваш бот. Как дела?');
});

// Обработчик команды /open
bot.onText(/\/open/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = 'https://your-web-app-url'; // Замените на фактический URL вашего веб-приложения
    bot.sendMessage(chatId, `Откройте мое веб-приложение по ссылке: ${webAppUrl}`);
});

// Обработчик текстовых сообщений
bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Пример ответа на сообщение "Привет"
    if (messageText.toLowerCase() === 'привет') {
        bot.sendMessage(chatId, 'Привет! Как я могу вам помочь?');
    }
});