import { browser, by, element } from 'protractor';

export class IT255DZ11Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
