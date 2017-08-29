import { UltimateFormPage } from './app.po';

describe('ultimate-form App', () => {
  let page: UltimateFormPage;

  beforeEach(() => {
    page = new UltimateFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
