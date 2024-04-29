const { Builder, By, Key, until, Capabilities, WebElement } = require("selenium-webdriver");
const assert = require('assert');
const { post } = require("selenium-webdriver/http");
const { percy } = require('browserstack-node-sdk');


describe("Bentley.com - ", () => {


  test("Page Load", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase1', 'Bentley.com PageLoad');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");        
    await driverTestcase.manage().window().maximize();    
    await new Promise((resolve) => setTimeout(resolve, 10000)); 
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.css('#post-10411 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e642c8e.elementor-section-height-min-height.home-hero.elementor-section-full_width.elementor-hidden-tablet.elementor-hidden-mobile.elementor-section-height-default.elementor-section-items-middle'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000)); 

    await driverTestcase.actions({ bridge: true }).sendKeys(Key.ARROW_DOWN).perform();

    assert.strictEqual(readyState, 'complete', 'Page did not load completely.');
    await driverTestcase.quit();
  });

  test("Search Resource database", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase2', 'Bentley.com PageLoad');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//resources/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-8848'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var searchtext = driverTestcase.findElement(By.css('#post-8848 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-a6da7b4.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > fieldset > div > label > input'));
    searchtext.sendKeys('utilities');
    await new Promise((resolve) => setTimeout(resolve, 10000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }
    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });


  test("Generic Search  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase3', 'Bentley.com Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var searchbar = driverTestcase.findElement(By.css('#site-navigation > div > div.menu-bar-items > span > a'));
    searchbar.click();
    var searchtext = driverTestcase.findElement(By.css('#site-navigation > div > form > input'));
    searchtext.sendKeys('iTwin');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.actions().sendKeys(Key.ENTER).perform();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }

    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  test("Check Video  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase4', 'Bentley.com Check Video');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//company/about-us/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-7220'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var videobutton = driverTestcase.findElement(By.css('#vjs_video_3 > button'));
    videobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 15000));
    var timeplayed = driverTestcase.findElement(By.css('#vjs_video_3 > div.vjs-control-bar > div.vjs-current-time.vjs-time-control.vjs-control > span.vjs-current-time-display'));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Check if any of the elements are visible
    let isVisible = "false";
    if (timeplayed) {
      isVisible = "true";
    }
    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  // test("Check Synchro Video  ", async () => {
  //   // Create BrowserStack capabilities
  //   const capabilities = Capabilities.chrome()
  //     .set('Testcase5', 'Bentley.com Check Video');
  //   const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
  //   await driverTestcase.get("https://bentleypocstg.wpengine.com//software/synchro/");
  //   await driverTestcase.manage().window().maximize();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   const bodyElement = await driverTestcase.findElement(By.id('post-5819'));
  //   // Scroll down the page using JavaScript
    

  //  // bodyElement.click();

  //   await new Promise((resolve) => setTimeout(resolve, 10000));

  //   // driverTestcase.switchTo().activeElement();
  //   // const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
  //   // if (closebutton) {
  //   //   closebutton.click();
  //   // }
  //   // await new Promise((resolve) => setTimeout(resolve, 10000));
  //   await driverTestcase.executeScript('window.scrollTo(0,2000);');
    
  //   const videoiframe = await driverTestcase.findElement(By.css('#section-tzoid-0-396149b4 > div > div.computer'));
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   videoiframe.click();
  //   await new Promise((resolve) => setTimeout(resolve, 5000));


  //   let isVisible = false;
  //   if (timeplayed) {
  //     isVisible = true;
  //   }
  //   assert.equal(isVisible, true);
  //   await driverTestcase.quit();
  // });

  test("Check Pencil Banner", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase6', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));

    const pencilbanner = driverTestcase.findElement(By.css('#premium-carousel-4bde3f2c > div > div > div > div > section'));
    let flag = "false";
    if (pencilbanner) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  // test("Check Form functionality", async () => {
  //   // Create BrowserStack capabilities
  //   const capabilities = Capabilities.chrome()
  //     .set('Testcase6', 'Bentley.com');
  //   const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
  //   await driverTestcase.get("https://bentleypocstg.wpengine.com//contact-us-for-license-plan/");
  //   await driverTestcase.manage().window().maximize();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   const readyState = await driverTestcase.executeScript('return document.readyState');
  //   //Click on the page 
  //   const bodyElement = await driverTestcase.findElement(By.id('post-23217'));
  //   bodyElement.click();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   driverTestcase.switchTo().activeElement();
  //   const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
  //   if (closebutton) {
  //     closebutton.click();
  //   }
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   let iframeform = driverTestcase.findElement(By.css('#hs-form-iframe-0'));
  //   driverTestcase.switchTo().frame(iframeform);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   await driverTestcase.executeScript('window.scrollTo(0, 2000);');

  //   // Find all email input fields within the iframe using a CSS selector
  //   let inputFieldsemail = await driverTestcase.findElements(By.css('input[type="email"]'));
  //   for (let inputFieldemail of inputFieldsemail) {
  //     await inputFieldemail.sendKeys('test@bentley.com');
  //   }

  //   // Find all text input fields within the iframe using a CSS selector
  //   let inputFields = await driverTestcase.findElements(By.css('input[type="text"]'));
  //   for (let inputField of inputFields) {
  //     await inputField.sendKeys('Test Test');
  //   }

  //   // Find all phone input fields within the iframe using a CSS selector
  //   let inputFieldsphone = await driverTestcase.findElements(By.css('input[type="tel"]'));
  //   for (let inputFieldphone of inputFieldsphone) {
  //     await inputFieldphone.sendKeys('1234567890');
  //   }
  //   // Find all select elements (dropdowns) within the iframe using a CSS selector
  //   let dropdowns = await driverTestcase.findElements(By.css('select'));
  //   for (let dropdown of dropdowns) {
  //     await dropdown.findElement(By.css('option:nth-child(2)')).click();
  //   }

  //   // Find all select elements (radiobuttons) within the iframe using a CSS selector
  //   let radiobuttons = await driverTestcase.findElements(By.css('input[type="radio"]'));
  //   for (let radiobutton of radiobuttons) {
  //     if (radiobutton.getText == "No")
  //       await radiobutton.click();
  //   }

  //   // Find all select elements (checkboxes) within the iframe using a CSS selector
  //   let checkboxes = await driverTestcase.findElements(By.css('input[type="checkbox"]'));
  //   for (let checkbox of checkboxes) {
  //     if (checkbox.getText == "AGENT")
  //       await checkbox.click();
  //       await driverTestcase.executeScript('arguments[0].scrollIntoView();', checkbox);
  //   }


  //   //Click the submit button 
  //   let submitbutton = await driverTestcase.findElement(By.css('imput[type="submit"'));
  //   submitbutton.click();

  //   await driverTestcase.executeScript('window.scrollTo(0, 15000);');
  //   await new Promise((resolve) => setTimeout(resolve, 10000));




  //   // let flag = false;
  //   // if (pencilbanner) {
  //   //   flag = true;
  //   // }
  //   // assert.equal(flag, true);
  //   await driverTestcase.quit();
  // });

  test("Scroll to Top", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase10', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
   await driverTestcase.executeScript('window.scrollTo(0, 15000);');
   await new Promise((resolve) => setTimeout(resolve, 5000));
    const scrolltotop = driverTestcase.findElement(By.css('#back-to-top-btn'));
    scrolltotop.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    //Check if the page reached top of the change 
    let scrollPosition = await driverTestcase.executeScript('return window.scrollY;');    
    let flag = false;    
    if (scrollPosition == 0) {
      flag = true;
    }
    assert.equal(flag, true);
    await driverTestcase.quit();
  });
  test("Check Header", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase11', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const header = driverTestcase.findElement(By.css('#post-10411 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e642c8e.elementor-section-height-min-height.home-hero.elementor-section-full_width.elementor-hidden-tablet.elementor-hidden-mobile.elementor-section-height-default.elementor-section-items-middle'));
    header.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    //Check if the page reached top of the change     
    let flag = false;    
    if (header) {
      flag = true;
    }
    assert.equal(flag, true);
    await driverTestcase.quit();
  });
  test("Check Footer", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase12', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const footer = driverTestcase.findElement(By.css('body > div.site-footer > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-807005c.footer.elementor-hidden-mobile.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default'));
    footer.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    //Check if the page reached top of the change     
    let flag = false;    
    if (footer) {
      flag = true;
    }
    assert.equal(flag, true);
    await driverTestcase.quit();
  });
  test("Check Header Navigation", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase13', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let items = await driverTestcase.findElements(By.css('#mega-menu-item-52325 > a'));
    for (let i = 0; i < items.length; i++) {       
      if (await items[i].getText() !== "") {
        await items[i].click();
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
    }

    let breadcrumbs = await driverTestcase.findElement(By.css('body > div.aioseo-breadcrumbs > span:nth-child(3) > a:nth-child(3)'));
    let outputMessage = await breadcrumbs.getText();
    let flag = false;
    if (outputMessage == "Industries") {
      flag = true;
    }
    assert.equal(flag, true);
    await driverTestcase.quit();
  });
  test("Check SubHeader Navigation", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase14', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let items = await driverTestcase.findElements(By.css('#mega-menu-item-5830 > a'));
    for (let i = 0; i < items.length; i++) {       
      if (await items[i].getText() == "Software") {        
        await items[i].click();
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
    }
    let itemsubmenu = await driverTestcase.findElements(By.css('#mega-menu-item-5830 > ul'));
    await driverTestcase.switchTo().activeElement();
    let flag = "false";
    for(let i=0; i<itemsubmenu.length;i++)
    {
      //itemsubmenu[i].click();

      if((await itemsubmenu[i].getText()).includes("Bridge Design"))
      {
         flag = "true";
      }

    } 


    //assert.strictEqual(flag, 'false', 'Subheader Navigation failed.');
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check Footer Navigation", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase15', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const footernav = await driverTestcase.findElement(By.css('body > div.site-footer > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-807005c.footer.elementor-hidden-mobile.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-9e2ce86 > div > div.elementor-element.elementor-element-0e71c94.footer-2024-updates.elementor-widget.elementor-widget-text-editor > div > a:nth-child(9)'));
    footernav.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const checkbreadcrumbs = await driverTestcase.findElement(By.css('body > div.aioseo-breadcrumbs > span:nth-child(3)'));
    let flag = "false";
    if((await checkbreadcrumbs.getText()).includes("Newsroom"))
    {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check Sign in functionality", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase16', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //Click on Signin 
    let menuElement = await driverTestcase.findElement(By.css('#mega-menu-item-15953'));
    await menuElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let myAccountSection = await driverTestcase.findElement(By.css('#mega-menu-item-custom_html-4 > div > a'));
    await myAccountSection.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let emailLogin = await driverTestcase.findElement(By.id('identifierInput'));
    await emailLogin.sendKeys('carlastata@netscape.net');
    await emailLogin.submit();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let password = await driverTestcase.findElement(By.id('password'));
    await password.sendKeys('Bentley123');

    let signIn = await driverTestcase.findElement(By.id('sign-in-button'));
    await signIn.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let myAccountCheck = await driverTestcase.findElement(By.css('#mega-menu-item-15953 > a'));
    await myAccountCheck.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let username = await driverTestcase.findElement(By.css('#mega-menu-item-custom_html-4 > div > h4'));
    let usernameText = await username.getText();

    let flag = "false";
    if(usernameText.includes("Therese Stata"))
    {
      flag = "true";
    }

    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check Iframe", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase18', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//events/overview/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-16206'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const iframeevents = await driverTestcase.findElement(By.css('#post-16206 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-ece3e12.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > iframe'));
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let flag = "false";
    if(iframeevents.isDisplayed)
    {
      flag = "true";
    }


    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Search Newsroom", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase19', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//newsroom");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-47709'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const newsinput = await driverTestcase.findElement(By.css('#post-47709 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-14f6c38.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-40e9e0a.elementor-widget.elementor-widget-wpgb-facet > div > div > fieldset > div > label > input'))    ;
    newsinput.sendKeys('press coverage');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 5000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));
    let flag = "false";
    if(elements.length >= 1)
    {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Search Channelpartner listing", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase20', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//channel-partners/listing/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-24137'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const channelpartnercountry = await driverTestcase.findElement(By.css('#post-24137 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-46290d53.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-3edb5092 > div > div > div > div > fieldset > div > label > select > option:nth-child(40)'))    ;
    channelpartnercountry.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let elements = await driverTestcase.findElement(By.css('#post-24137 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3af43797.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > span'));
    let flag = "false";
    if((await elements.getText()).includes('11'))
    {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Search Trainingpartner listing", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase21', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//product-training-partners/listing/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-24162'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const trainingpartnerproduct = await driverTestcase.findElement(By.css('#post-24162 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-72704ecc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-4d43c3a2 > div > div > div > div > fieldset > div > label > select > option:nth-child(135)'))    ;
    trainingpartnerproduct.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let elements = await driverTestcase.findElement(By.css('#post-24162 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1cec3356.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > span'));
    let flag = "false";
    if((await elements.getText()).includes('51'))
    {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Search Software Page", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase22', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//software/overview/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-53506'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const softwaresearch = await driverTestcase.findElement(By.css('#post-53506 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-f432254.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > fieldset > div > label > input'))    ;
    softwaresearch.sendKeys('WaterCAD')
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    let flag = "false";
    if((await elements.length >= 1))
    {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check Accessibility widget", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase23', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//company/about-us/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-7220'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const paragraphElement = await driverTestcase.findElement(By.css('#post-7220 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-393f745.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-88db42c.elementor-widget.elementor-widget-text-editor > div > p'));
    // Execute JavaScript code to get the font size    
    const zoomsizeelement1 = await driverTestcase.findElement(By.css('#page'));
    const zoomsizebefore = await driverTestcase.executeScript('return window.getComputedStyle(arguments[0]).zoom', zoomsizeelement1);
    const accessibilitybutton = await driverTestcase.findElement(By.css('#userway-button'));
    accessibilitybutton.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const iframes = await driverTestcase.findElements(By.css('iframe'));

    console.log("Number of iframes:", iframes.length);

    // Iterate through each iframe and log its src attribute
    for (let iframe of iframes) {
      const src = await iframe.getAttribute('src');
      console.log("Src of iframe:", src);
      if (src.includes('cdn.userway.org')) {
        driverTestcase.switchTo().frame(iframe);
        await new Promise((resolve) => setTimeout(resolve, 10000));
        // Find all buttons within the iframe
        const buttonsInIframe = await driverTestcase.findElements(By.css('button'));
        await new Promise((resolve) => setTimeout(resolve, 10000));
        // Log the number of buttons found and their text
        console.log("Number of buttons in iframe:", buttonsInIframe.length);
        let flag = "false";
        for (let button of buttonsInIframe) {
          const buttonText = await button.getText();
          if (buttonText.includes('Bigger Text')) {
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 10000));
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 10000));
            break;
          }
        }
        const closebuttonaccessibility = await driverTestcase.findElement(By.css('body > main > div > div > div:nth-child(1) > div > button'));
        closebuttonaccessibility.click();
        break;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().defaultContent();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 2000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const headerelement = await driverTestcase.findElement(By.css('#post-7220 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4b847c88.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-68a307e4 > div > section > div > div > div > div.elementor-element.elementor-element-13879578.hero-inherit.elementor-widget.elementor-widget-heading > div > h1'))


    const zoomsizeelement = await driverTestcase.findElement(By.css('#page'));
    const zoomsizeafter = await driverTestcase.executeScript('return window.getComputedStyle(arguments[0]).zoom', zoomsizeelement);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (zoomsizeafter != zoomsizebefore) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check youtube video - projectwise", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase25', 'Bentley.com');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//software/projectwise/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-8370'));
    await driverTestcase.executeScript('window.scrollTo(0, 800);');
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    //await driverTestcase.executeScript('window.scrollTo(0, 5000);');

    const iframeelement = await driverTestcase.findElement(By.css('#section-tzoid-0-1ee09766 > div > div.computer'));
    await new Promise((resolve) => setTimeout(resolve, 10000));
    iframeelement.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const iframes = await iframeelement.findElements(By.css('iframe'));
    await new Promise((resolve) => setTimeout(resolve, 10000));    
    let flag = "false";
    for (let iframe of iframes) {
      const src = await iframe.getAttribute('src');
      console.log("Src of iframe:", src);
      driverTestcase.switchTo().frame(iframe);
      await new Promise((resolve) => setTimeout(resolve, 10000));
      const screenshot = await driverTestcase.takeScreenshot();
      console.log(screenshot);
      flag = "true";

    }

    
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Double Word Search  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase27', 'Bentley.com Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var searchbar = driverTestcase.findElement(By.css('#site-navigation > div > div.menu-bar-items > span > a'));
    searchbar.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var searchtext = driverTestcase.findElement(By.css('#site-navigation > div > form > input'));
    searchtext.sendKeys('Bentley View');
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await driverTestcase.actions().sendKeys(Key.ENTER).perform();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }

    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });
  test("Search for No Results ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase28', 'Bentley.com Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var searchbar = driverTestcase.findElement(By.css('#site-navigation > div > div.menu-bar-items > span > a'));
    searchbar.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var searchtext = driverTestcase.findElement(By.css('#site-navigation > div > form > input'));
    searchtext.sendKeys('42');
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await driverTestcase.actions().sendKeys(Key.ENTER).perform();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElement(By.css('#content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-d06728c.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div'));

    // Check if any of the elements are visible
    let isVisible = "false";

    if ((await elements.getText()).includes('Keep calm')) {
      isVisible = "true";
    }


    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });
  test("Check subheader on page", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase29', 'Bentley.com Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//software/cad-modeling-and-visualization/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-23244'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    var subheader = await driverTestcase.findElement(By.css('#post-23244 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1dbcaa4.elementor-section-full_width.elementor-section-height-min-height.sticky-sub-nav.elementor-section-height-default.elementor-section-items-middle.elementor-sticky > div > div > div > div > div > div > div > div.premium-nav-menu-container > ul > li.menu-item.premium-nav-menu-item.elementor-repeater.elementor-repeater-item-afd2aff > a'));    
    let flag = "false";
    if((await subheader.getText()).includes('Best Software'))
    {
      flag = "true";
    }    
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Feedback Tab", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase30', 'Bentley.com Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const feedbackbutton = await driverTestcase.findElement(By.css('#feedback-button'));
    feedbackbutton.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // Get all window handles
    let handles = await driverTestcase.getAllWindowHandles();
    await driverTestcase.switchTo().window(handles[1]);
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const screenshot = await driverTestcase.takeScreenshot();
    console.log(screenshot);    
    driverTestcase.switchTo().window(handles[0]);
    let isVisible = "false";
    if(handles.length > 1)
    {
      isVisible = "true";
    }
    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  test("Language site check  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase31', 'Bentley.com Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleypocstg.wpengine.com//");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const bodyElement = await driverTestcase.findElement(By.id('post-10411'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 10000));

    driverTestcase.switchTo().activeElement();
    const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
    if (closebutton) {
      closebutton.click();
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const languagemenu = await driverTestcase.findElement(By.css('#mega-menu-item-46647 > a'));
    languagemenu.click();
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const germanymenu = await driverTestcase.findElement(By.css('#mega-menu-item-46648 > a'));
    germanymenu.click();
    await new Promise((resolve) => setTimeout(resolve, 20000));
    const pagetitle = await driverTestcase.getTitle();
    let isVisible = "false";
    if(pagetitle.includes('Infrastruktur-Engineering-Software'))
    {
      isVisible = "true";
    }
    
    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });
});
