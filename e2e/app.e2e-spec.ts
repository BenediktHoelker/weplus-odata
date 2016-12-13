import { Weplus20161213Page } from './app.po';

describe('weplus-20161213 App', function() {
  let page: Weplus20161213Page;

  beforeEach(() => {
    page = new Weplus20161213Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
