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
  await page.locator('[placeholder="Email"]').fill(user.iNvalidUserEmail);
  await page.locator('[placeholder="Пароль"]').fill(user.iNvalidPassword);
  await page.locator('button:has-text("Войти")').click(); // нажимаем "Войти"

  // ожидаемый результат

  //  await page.locator(
  //    'data-testid="login-error-hint"'
  //).getAttribute("Вы ввели неправильно логин или пароль");

  //await page.waitForSelector("#app > div:nth-child(2) > div > div > div.components-common-ModalBox-components-Modal--container--3QBaN > div.components-common-ModalBox-components-Modal--content--298rk > div.components-common-ModalBox-components-authorization-SignIn--root--3o7mw > div > form > div._-packages-ui-kit-components-v2-Input--root--oc5t0._-packages-ui-kit-components-v2-Input--size-m--3KhyI._-packages-ui-kit-components-v2-Input--fluid--3V7AU._-packages-ui-kit-components-v2-Input--error--1QFF1 > div");
  //const actual = await page.$eval(
  //  "#app > div:nth-child(2) > div > div > div.components-common-ModalBox-components-Modal--container--3QBaN > div.components-common-ModalBox-components-Modal--content--298rk > div.components-common-ModalBox-components-authorization-SignIn--root--3o7mw > div > form > div._-packages-ui-kit-components-v2-Input--root--oc5t0._-packages-ui-kit-components-v2-Input--size-m--3KhyI._-packages-ui-kit-components-v2-Input--fluid--3V7AU._-packages-ui-kit-components-v2-Input--error--1QFF1 > div",
  //  (link) => link.textContent
  //);
  //expect(actual).toContain("Вы ввели неправильно логин или пароль");
  //закрываем браузер
  await browser.close();
})();
