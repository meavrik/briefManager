import { BriefManagerPage } from './app.po';

describe('brief-manager App', function() {
  let page: BriefManagerPage;

  beforeEach(() => {
    page = new BriefManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
