const { By, Builder, until, Select } = require("selenium-webdriver");
const assert = require('assert');

describe("New Note Test", function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Dang nhap", async function () {
    //const input = {[title,description]:[1,1],[a,k],[1,q],[a,2]};

    await driver.manage().setTimeouts({ implicit: 5000});

    // Navigate to URL
    await driver.get("http://localhost:5173/login");
    await driver.findElement(By.id("username")).sendKeys("aa");
    await driver.findElement(By.id("password")).sendKeys("11");
    await driver
      .findElement(By.className("btn btn-primary btn-block confirm-button"))
      .click();
      await driver.findElement(By.id("newNote")).click();
      await driver.findElement(By.id("title")).sendKeys("aa");
      await driver.findElement(By.id("description")).sendKeys("11");
      await driver.findElement(By.id("status")).click();

      const zeroElement = await driver.findElement(By.css("option[value='0']"))
      const oneElement = await driver.findElement(By.css("option[value='1']"))
      const twoElement = await driver.findElement(By.css("option[value='2']"))

      zeroElement.click();
      await driver
      .findElement(By.className("btn btn-primary btn-block confirm-button"))
      .click();
    

    //after(() => driver.quit());
  });
});
