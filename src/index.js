import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import 'normalize.css'

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);