const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function runtest(){
 
    var searchString = "1";

    
    let driver = await new Builder().forBrowser("chrome").build();

     
     await driver.get("http://localhost:4200/notify");
         
     
     await driver.findElement(By.name("id")).sendKeys(searchString);
     await driver.findElement(By.id("send")).click();
     console.log('Enviando datos')
     
    
     await driver.sleep(1000)
     
     await driver.quit();

}

runtest()