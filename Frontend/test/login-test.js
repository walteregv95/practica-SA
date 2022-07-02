const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function runtest(){
 
    var searchString = "delivery";

    
    let driver = await new Builder().forBrowser("chrome").build();

     
     await driver.get("http://localhost:5000/");
         
     
     await driver.findElement(By.name("email")).sendKeys(searchString);
     await driver.findElement(By.name("send")).click();
     console.log('Enviando datos')
     
     
     await driver.sleep(1000)
     
     await driver.quit();

}

runtest()