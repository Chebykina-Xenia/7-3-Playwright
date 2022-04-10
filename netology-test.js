const{chromium} = require('playwright');

(async() => {

    //сохраняем сущность браузер и запускаем его
    const browser = await chromium.launch(
        {headless: false}
    );
    //создаём сущность страницы и возвращаем новую страницу
    const page = await browser.newPage();
    //переходим на веб-сайт
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.waitForNavigation({ waitUntil: 'documentloaded' })    //закрываем браузер
    await browser.close();

})()