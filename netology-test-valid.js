const { chromium } = require("playwright");
const user = require("./user");

const { expect } = require("@playwright/test");

(async () => {
  //сохраняем сущность браузер и запускаем его
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  //создаём сущность страницы и возвращаем новую страницу
  const page = await browser.newPage();
  //переходим на веб-сайт
  await page.goto("https://netology.ru/?modal=sign_in", {
    timeout: 30 * 10000,
  });
  //await page.waitForNavigation({ waitUntil: 'documentloaded' })
  await page.locator('[placeholder="Email"]').fill(user.validUserEmail);
  await page.locator('[placeholder="Пароль"]').fill(user.validPassword);
  await page.locator('button:has-text("Войти")').click(); // нажимаем "Войти"
  // ожидаемый результат
  let curUrl = await page.url();
  await expect(curUrl).toEqual("https://netology.ru/profile");
  //закрываем браузер
  await browser.close();
})();
