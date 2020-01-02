import { QLVLPage } from './app.po';

describe('qlvl App', function() {
  let page: QLVLPage;

  beforeEach(() => {
    page = new QLVLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
