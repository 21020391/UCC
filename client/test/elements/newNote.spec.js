const { suite } = require("selenium-webdriver/testing");
const { By, Builder, until, Select, Browser } = require("selenium-webdriver");
const assert = require("assert");

suite(
    function (env) {
        describe("New Note Test", function () {
            let driver;

            before(async function () {
                driver = await env.builder().build();
            });

            after(() => driver.quit());

            // Test 1
            it("Create Note Test 1", async function () {

                await driver.manage().setTimeouts({ implicit: 5000 });

                // Navigate to URL
                await driver.get("http://localhost:5173/login");
                await driver.findElement(By.id("username")).sendKeys("aa");
                await driver.findElement(By.id("password")).sendKeys("11");
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                await driver.findElement(By.id("newNote")).click();
                await driver.findElement(By.id("title")).sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                await driver.findElement(By.id("description")).sendKeys("1111111111111111111111111111111111111111111111111111111111");
                await driver.findElement(By.id("status")).click();

                await driver.findElement(By.css("option[value='0']")).click();

                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .submit();

                // Wait for the page navigation back to the Notes page
                await driver.wait(until.urlIs('http://localhost:5173/notes'), 5000);

                const currentUrl = await driver.getCurrentUrl();
                assert.equal(currentUrl, 'http://localhost:5173/notes');
            });

            // Test 2
            it("Create Note Test 2", async function () {

                await driver.manage().setTimeouts({ implicit: 5000 });

                // Navigate to URL
                await driver.get("http://localhost:5173/login");
                await driver.findElement(By.id("username")).sendKeys("aa");
                await driver.findElement(By.id("password")).sendKeys("11");
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                await driver.findElement(By.id("newNote")).click();
                await driver.findElement(By.id("title")).sendKeys("                                                        ");
                await driver.findElement(By.id("description")).sendKeys("1111111111111111111111111111111111111111111111111111111111");
                await driver.findElement(By.id("status")).click();

                await driver.findElement(By.css("option[value='1']")).click();
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                // Wait for the page navigation back to the Notes page
                await driver.wait(until.urlIs('http://localhost:5173/notes'), 5000);

                const currentUrl = await driver.getCurrentUrl();
                assert.equal(currentUrl, 'http://localhost:5173/notes');
            });

            // Test 3
            it("Create Note Test 3", async function () {

                await driver.manage().setTimeouts({ implicit: 5000 });

                // Navigate to URL
                await driver.get("http://localhost:5173/login");
                await driver.findElement(By.id("username")).sendKeys("aa");
                await driver.findElement(By.id("password")).sendKeys("11");
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                await driver.findElement(By.id("newNote")).click();
                await driver.findElement(By.id("title")).sendKeys("1");
                await driver.findElement(By.id("status")).click();

                await driver.findElement(By.css("option[value='2']")).click();
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                // Wait for the page navigation back to the Notes page
                await driver.wait(until.urlIs('http://localhost:5173/notes'), 5000);

                const currentUrl = await driver.getCurrentUrl();
                assert.equal(currentUrl, 'http://localhost:5173/notes');
            });

            // Test 4
            it("Create Note Test 4", async function () {

                await driver.manage().setTimeouts({ implicit: 5000 });

                // Navigate to URL
                await driver.get("http://localhost:5173/login");
                await driver.findElement(By.id("username")).sendKeys("aa");
                await driver.findElement(By.id("password")).sendKeys("11");
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                await driver.findElement(By.id("newNote")).click();
                await driver.findElement(By.id("description")).sendKeys("1111111111111111111111111111111111111111111111111111111111");
                await driver.findElement(By.id("status")).click();

                await driver.findElement(By.css("option[value='0']")).click();
                await driver
                    .findElement(By.className("btn btn-primary btn-block confirm-button"))
                    .click();

                // Wait for the page navigation back to the Notes page
                await driver.wait(until.urlIs('http://localhost:5173/notes'), 5000);

                const currentUrl = await driver.getCurrentUrl();
                assert.equal(currentUrl, 'http://localhost:5173/notes/create');
            });
        });
    },
    { browsers: [Browser.CHROME, Browser.EDGE] }
);
