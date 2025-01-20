import Header from '../components/header';

import geo from '../img/geo/geo.jpeg';
import email from '../img/feedback/email.png';
import agenda from '../img/feedback/agenda.png';

const axios = require('axios').default;

const FeedBack = class {
  constructor(body) {
    this.body = body;
  }

  renderForm() {
    return `
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa-solid fa-user"></i>
          </span>
          <input name="name" type="text" class="form-control" placeholder="Jean" required>
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

  renderHeader() {
    return `
      <header class="container-fluid">
        ${Header}
        <div class="container mt-5 pt-4">
            <div class="row">
                <div class="col-5">
                    <div class="row">
                        <div class="col-12">
                            <img width="90%" src="${geo}" class="img-fluid" alt="spanish">
                        </div>
                    </div>
                </div>
                <div class="col-7 pt-5">
                    <h2 class="display-3 home--header-title">IDEALEMENT SITUE</h2>
                    <h2 class="display-6 text-danger">30 mètres de la plage</h2>
                    <div class="row">
                        <div class="col-12 mt-3">
                            <a href="/contact" class="btn btn-dark btn-lg rounded-pill">Contactez-nous</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    `;
  }

  renderCounter() {
    return `
        <section class="row">
            <div class="col-3"></div>
            <div class="col-3">
                <div class="row">
                    <div class="col-6 text-end">
                        <img width="80px" class="img-fluid" src="${email}" />
                    </div>
                    <div class="col-6 mt-2">
                        <div class="row">
                            <div class="col-12">
                                <span class="h2">${this.data.length}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p class="fs-6">Nombre d'avis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="row">
                    <div class="col-6 text-end">
                        <img width="80px" class="img-fluid" src="${agenda}" />
                    </div>
                    <div class="col-6 mt-2">
                        <div class="row">
                            <div class="col-12">
                                <span class="h2">2022</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p class="fs-6">Depuis juillet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3"></div>
        </section>
      `;
  }

  renderFeedback(feedBack) {
    const { createdAt, name, message } = feedBack;
    const date = new Date(createdAt);
    const dateFormated = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    return `
        <div class="col-12 mt-2 mb-2">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-3">Déposé le : ${dateFormated}</div>
                        <div class="col-3">Auteur : ${name}</div>
                    </div>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>${message}</p>
                    </blockquote>
                </div>
            </div>
        </div>
      `;
  }

  renderFeedbacks() {
    return `
        <section class="row">
            <div class="col-12">
                <h5 class="card-title h4">Nos clients parlent de nous</h5>
            </div>
            ${this.data.map((feedBack) => this.renderFeedback(feedBack)).join('')}
        </section>
      `;
  }

  render() {
    return `
      ${this.renderHeader()}
      <hr />
      <main class="container mt-5">
        ${this.renderCounter()}
        <hr/>
        ${this.renderForm()}
        <hr/>
       ${this.renderFeedbacks()}
      </main> 
    `;
  }

  onClickButton() {
    const formEl = document.querySelector('form');

    formEl.addEventListener('submit', () => {
      const dataForm = new FormData(formEl);

      axios.post('http://127.0.0.1:3000/feedback', JSON.parse(JSON.stringify(Object.fromEntries(dataForm))));
    });
  }

  run() {
    axios.get('http://127.0.0.1:3000/feedback').then((response) => {
      this.data = response.data;
      this.body.innerHTML = this.render();
      this.onClickButton();
    });
  }
};

export default FeedBack;
