import { MichaeldsharpcomClientPage } from './app.po';

describe('michaeldsharpcom-client App', function() {
  let page: MichaeldsharpcomClientPage;

  beforeEach(() => {
    page = new MichaeldsharpcomClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
