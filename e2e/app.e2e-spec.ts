import { A2materialRcPage } from './app.po';

describe('a2material-rc App', function() {
  let page: A2materialRcPage;

  beforeEach(() => {
    page = new A2materialRcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
