import Header from '../components/header-admin';

const axios = require('axios').default;

const Admin = class {
  constructor(body) {
    this.body = body;
  }

  run() {
    axios.get('http://127.0.0.1:3000/contacts', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      this.dataMessages = response.data;
      this.body.innerHTML = this.render();

      const btnEl = document.querySelectorAll('table button');

      Array.from(btnEl).forEach((btn) => {
        const { id } = btn.dataset;

        btn.addEventListener('click', () => this.onClickDelete(id));
      });

      const btnDisc = document.querySelector('.disconnected');

      btnDisc.addEventListener('click', () => this.onClickDdisconnected());
    });
  }

  renderMessage({
    id,
    arrivedAt,
    departureAt,
    createdAt,
    firstName,
    lastName,
    message
  }) {
    const dateCreateAt = new Date(createdAt);
    const dateArrivedAt = new Date(arrivedAt);
    const dateDepartureAt = new Date(departureAt);

    return `
    <tr>
      <td>${dateCreateAt.getDay()}/${dateCreateAt.getMonth()}/${dateCreateAt.getFullYear()}</td>
      <td>${firstName} ${lastName}</td>
      <td>${dateArrivedAt.getDay()}/${dateArrivedAt.getMonth()}/${dateArrivedAt.getFullYear()} -> ${dateDepartureAt.getDay()}/${dateDepartureAt.getMonth()}/${dateDepartureAt.getFullYear()}</td>
      <td>${message}</td>
      <td><button class="btn btn-primary" data-id="${id}">delete</button></td>
    </tr>
    `;
  }

  renderMessages(messages) {
    return `
      <table class="table table-dark table-striped">
        <thead>
          <tr>
              <th scope="col">dates</th>
              <th scope="col">authors</th>
              <th scope="col">arrived -> departure</th>
              <th scope="col">messages</th>
              <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          ${messages.map((message) => this.renderMessage(message)).join('')}
        </tbody>
      </table>
    `;
  }

  onClickDelete(id) {
    axios.delete(`http://127.0.0.1:3000/contact/${id}`).then(() => {
      window.location = '/admin';
    });
  }

  onClickDdisconnected() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  render() {
    return `
      <main class="container mt-5">
        ${Header}
        <div class="row">
          <div class="col-12">
            ${this.renderMessages(this.dataMessages)}
          </div>
        </div>
      </main>
    `;
  }
};

export default Admin;
