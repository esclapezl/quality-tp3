import Header from '../components/header';
// Pictures
import home from '../img/contact/home.jpeg';

const axios = require('axios').default;

const Contact = class {
  constructor(body) {
    this.body = body;
  }

  renderHeader() {
    return `
      <header class="container-fluid">
        ${Header}
        <div class="container mt-5 pt-4">
            <div class="row">
                <div class="col-5">
                    <div class="row">
                        <div class="col-12">
                            <img width="90%" src="${home}" class="img-fluid" alt="spanish">
                        </div>
                    </div>
                </div>
                <div class="col-7 pt-5">
                    <h2 class="display-3 home--header-title">CONTACTEZ-NOUS</h2>
                    <h2 class="display-6 text-danger">remplissez le formulaire</h2>
                </div>
            </div>
        </div>
      </header>
    `;
  }

  renderForm() {
    return `
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa-solid fa-user"></i>
          </span>
          <input name="firstName" type="text" class="form-control" placeholder="Jean" required>
          <span class="input-group-text">
            <i class="fa-solid fa-user"></i>
          </span>
          <input name="lastName" type="text" class="form-control" placeholder="Louis" required>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa-solid fa-phone"></i>
          </span>
          <input
              name="mobilePhone"
              type="tel"
              class="form-control" 
              placeholder="0610203040"
              pattern="0[6|7]{1}([0-9]{2}){4}"
              required
          >
          <span class="input-group-text">
              <i class="fa-solid fa-envelope"></i>
          </span>
          <input
            name="email"
            type="email"
            class="form-control"
            placeholder="jean.louis@email.com"
            required
          >
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa-solid fa-calendar"></i>
          </span>
          <input name="arrivedAt" type="date" class="form-control" placeholder="Arrivée" required>
          <span class="input-group-text">
            <i class="fa-solid fa-calendar"></i>
          </span>
          <input name="departureAt" type="date" class="form-control" placeholder="Départ" required>
        </div>
        <div class="mb-3">
          <label class="form-label h5">Message :</label>
          <textarea name="message" class="form-control" rows="4"></textarea>
        </div>
        <div class="row">
          <div class="col-9"></div>
          <div class="col-3">
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">
                <i class="fa-solid fa-paper-plane"></i>
                  Envoyer
              </button>
            </div>
          </div>
        </div>
      </form>
    `;
  }

  onClickButton() {
    const formEl = document.querySelector('form');

    formEl.addEventListener('submit', () => {
      const dataForm = new FormData(formEl);

      axios.post('http://127.0.0.1:3000/contact', JSON.parse(JSON.stringify(Object.fromEntries(dataForm))));
    });
  }

  render() {
    return `
      ${this.renderHeader()}
      <hr />
      <main class="container mt-5">
        <section class="row">
          <h5 class="h4 pt-2 mb-4">Formulaire de contact</h5>
          ${this.renderForm()}
        </section>
      </main>
    `;
  }

  run() {
    this.body.innerHTML = this.render();
    this.onClickButton();
  }
};

export default Contact;
