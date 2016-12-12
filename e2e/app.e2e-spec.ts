import { Real1Page } from './app.po';

describe('real1 App', function() {
  let page: Real1Page;

  beforeEach(() => {
    page = new Real1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
