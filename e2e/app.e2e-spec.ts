import { RetailManagePage } from './app.po';

describe('retail-manage App', () => {
  let page: RetailManagePage;

  beforeEach(() => {
    page = new RetailManagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
