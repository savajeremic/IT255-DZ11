import { IT255DZ11Page } from './app.po';

describe('it255-dz11 App', () => {
  let page: IT255DZ11Page;

  beforeEach(() => {
    page = new IT255DZ11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
