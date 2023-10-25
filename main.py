from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('6432360659:AAFAMrYGAxzC4Re_4VPA5_jPCFdMlh03_Zk')
dp = Dispatcher(bot)



@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton('Открыть приложение', web_app=WebAppInfo(url='https://framon64.github.io/website/')))

    await message.answer('Привет', reply_markup=markup)

executor.start_polling(dp)