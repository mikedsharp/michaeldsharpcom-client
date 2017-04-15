import { FuckingWorkPage } from './app.po';

describe('michaeldsharp.com front page', () => {
  let page: FuckingWorkPage;

  beforeEach(() => {
    page = new FuckingWorkPage();
  });

  it('should display message saying Mike D Sharp', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mike D Sharp');
  });
});
