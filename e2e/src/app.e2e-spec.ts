import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debería mostrar la palabra Registro', () => {
    page.navigateTo();
    expect(page.getParagraphText('app-root h1')).toEqual('Registro');
  });
});
