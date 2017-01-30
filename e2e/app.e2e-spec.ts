import { WeplusPage } from './app.po';

describe('weplus App', function() {
  let page: WeplusPage;

  beforeEach(() => {
    page = new WeplusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
