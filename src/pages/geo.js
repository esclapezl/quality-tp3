import Header from '../components/header';

import geo from '../img/geo/geo.jpeg';

const Localisation = class {
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

  render() {
    return `
      ${this.renderHeader()}
      <hr />
      <main class="container mt-5">
        <section class="row">
          <div class="col-4">
              <h5 class="card-title h4">Accès</h5>
              <hr/>
              <div class="card border border-light bg-light pt-2">
                  <div class="card-body">
                      <h5 class="card-title h4">
                          <i class="fa-solid fa-voiture"></i>
                          Voiture
                      </h5>
                  </div>
                  <div class="carsd-footer pe-2 ps-2 pb-2">
                      <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action list-group-item-primary rounded mb-2" aria-current="true">
                              <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Paris <i class="fa-solid fa-arrow-right"></i> Rosas</h5>
                                <small>Temps de trajet : <strong>8 heures</strong></small>
                              </div>
                              <p class="mb-1">Autoroute jusqu'à Figueras.</p>
                              <small>900 km.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action list-group-item-primary rounded mb-2" aria-current="true">
                              <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Toulouse <i class="fa-solid fa-arrow-right"></i> Rosas</h5>
                                <small>Temps de trajet: <strong>2h30</strong></small>
                              </div>
                              <p class="mb-1">Autoroute jusqu'à Figueras.</p>
                              <small>290 km.</small>
                            </a>
                        </div>
                  </div>
              </div>
              <div class="card border border-light bg-light pt-2 mt-2">
                  <div class="card-body">
                      <h5 class="card-title h4">
                          <i class="fa-solid fa-plane"></i>
                          Avion
                      </h5>
                  </div>
                  <div class="carsd-footer pe-2 ps-2 pb-2">
                      <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action list-group-item-primary rounded mb-2" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Paris <i class="fa-solid fa-arrow-right"></i> Barcelone</h5>
                              <small>Temps de trajet: <strong>1h15</strong></small>
                            </div>
                            <p class="mb-1">Location de voiture directement à l'aéroport, car jusqu'à Rosas.</p>
                            <small>Puis de l'aéroport à Rosas : 1h30.</small>
                          </a>
                        </div>
                  </div>
              </div>
              <div class="card border border-light bg-light pt-2 mt-2">
                  <div class="card-body">
                      <h5 class="card-title h4">
                          <i class="fa-solid fa-train-subway"></i>
                          Train
                      </h5>
                  </div>
                  <div class="carsd-footer pe-2 ps-2 pb-2">
                      <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action list-group-item-primary rounded mb-2" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Paris <i class="fa-solid fa-arrow-right"></i> Barcelone</h5>
                              <small>Temps de trajet: <strong>6h30</strong></small>
                            </div>
                            <p class="mb-1">Puis de la gare de Barcelone à Rosas : location de voiture directement à la gare ou train jusqu'à Figueras.</p>
                          </a>
                        </div>
                  </div>
              </div>
          </div>
          <div class="col-8">
              <h5 class="card-title h4">Carte</h5>
              <hr/>
              <div class="card border border-light bg-light pt-2">
                  <div class="card-body">
                      <h5 class="card-title h4">
                          <i class="fa-solid fa-map-location"></i>
                          Localisation
                      </h5>
                      <hr/>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1476.3135223062156!2d3.1618640724716895!3d42.26513647400954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba615c74d8d999%3A0xe0929c77e5000cc1!2sCarrer%20de%20Bernat%20Metge%2C%201%2C%2017480%20Roses%2C%20Girona%2C%20Espagne!5e0!3m2!1sfr!2sfr!4v1654188389795!5m2!1sfr!2sfr" width="100%" height="788" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
              </div>
          </div>
      </section>
      <hr/>
      <section class="row">
          <div class="col-12">
              <h5 class="h4 pt-2">
                  <i class="fa-solid fa-basket-shopping"></i>
                  A proximité
              </h5>
              <p>Situé sur la promenade qui longe la mer, l'appartement offre un accès direct à la plage.</p>
              <p> Nombreux commerces à proximité immédiate : restaurants, bars, supérette...</p>
              <p>Parc naturel Cap de Creuz.</p>
              <p>Villages typiques de la Costa Brava : Cadaques (Village de Dali), Figueras, Pals, Calella de Pallafrugell, Escala, Paratallada, Peralada...</p>
                     </div>
          <hr/>
          <div class="row">
              <h5 class="h4 pt-2">
                  <i class="fa-solid fa-eye"></i>
                  Nos meilleures adresses
              </h5>
              <div class="col-6">
                  <ol class="list-group list-group-numbered">
                      <li class="list-group-item">Restaurant Rosa</li>
                      <li class="list-group-item">Jamoneria Jamon 100 %</li>
                      <li class="list-group-item">Sidreria Toxt's</li>
                  </ol>
              </div>
              <div class="col-6">
                  <ol class="list-group list-group-numbered">
                      <li class="list-group-item">Restaurant Las Palmeras</li>
                      <li class="list-group-item">A emporter : El rey del pollo</li>
                      <li class="list-group-item">Restaurant Pica Pica</li>
                  </ol>
                  </div>
          </div>
      </section>
      <hr/>
      <section id="appartement-gallerie">
          <div class="row">
              <div class="col-6">
                  <div class="home--appartement-photo1"></div>
              </div>
              <div class="col-6">
                  <div class="row">
                      <div class="col-12">
                          <div class="home--appartement-photo2"></div>
                      </div>
                      <div class="col-12">
                          <div class="home--appartement-photo3"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row mt-4">
              <div class="col-6">
                  <div class="row">
                      <div class="col-12">
                          <div class="home--appartement-photo2"></div>
                      </div>
                      <div class="col-12">
                          <div class="home--appartement-photo3"></div>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="home--appartement-photo1"></div>
              </div>
          </div>
        </section>
      </main> 
    `;
  }

  run() {
    this.body.innerHTML = this.render();
  }
};

export default Localisation;
