const axios = require('axios').default;

const Route = class {
  constructor(route, Page, priv) {
    this.route = route;
    this.Page = Page;
    this.body = document.querySelector('body');
    this.priv = !priv;

    this.run();
  }

  routing() {
    if (window.location.pathname === this.route && !this.priv) {
      const token = localStorage.getItem('token');

      axios.get('http://127.0.0.1:3000/auth', {
        headers: {
          authorization: token
        }
      })
        .then(() => {
          const page = new this.Page(this.body);
          page.run();
        }).catch(() => {
          window.location.href = '/login';
        });

      return;
    }

    if (window.location.pathname === this.route && this.priv) {
      const page = new this.Page(this.body);
      page.run();
    }
  }

  run() {
    this.routing();
  }
};

export default Route;
