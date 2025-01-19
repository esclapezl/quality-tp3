import Route from './route';
import Admin from './pages/admin';
import Home from './pages/index';
import Contact from './pages/contact';
import Pricing from './pages/pricing';
import Geo from './pages/geo';
import Feedback from './pages/feedback';
import Login from './pages/login';

import './css/reset.scss';
import './css/bootstrap.scss';
import './index.scss';

const routeHome = new Route('/', Home);
const routeContact = new Route('/contact', Contact);
const routePricing = new Route('/pricing', Pricing);
const routeGeo = new Route('/geo', Geo);
const routeFeedback = new Route('/feedback', Feedback);
const routeAdmin = new Route('/admin', Admin, true);
const routeLogin = new Route('/login', Login);

console.log(routeContact, routeHome, routePricing, routeGeo, routeFeedback, routeAdmin, routeLogin);
