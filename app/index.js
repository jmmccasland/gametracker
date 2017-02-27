import 'whatwg-fetch';
import App from './views/app';

const app = new App(document.querySelector('.app'));

app.created();
