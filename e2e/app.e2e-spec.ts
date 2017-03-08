import { FuckingWorkPage } from './app.po';

describe('fucking-work App', () => {
  let page: FuckingWorkPage;

  beforeEach(() => {
    page = new FuckingWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
