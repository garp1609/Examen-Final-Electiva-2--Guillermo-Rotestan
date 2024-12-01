const puppeteer = require('puppeteer');

test('La página debe contener el texto "Hola Mundo Guillermo Rotestan 2022-2011"', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${process.cwd()}/index.html`); // Cargar el archivo local.
  
  // Buscar el contenido del <h1>.
  const h1Content = await page.$eval('h1', el => el.textContent);
  
  // Comprobar si el contenido es el esperado.
  expect(h1Content).toBe('Hola Mundo Guillermo Rotestan 2022-2011');

  await browser.close();
});