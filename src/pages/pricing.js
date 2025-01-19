import Header from '../components/header';

import header from '../img/tarifs/header.jpeg';

import snowFlake from '../img/tarifs/snowflake.png';
import sakura from '../img/tarifs/sakura.png';
import sun from '../img/tarifs/sun.png';

import paypal from '../img/tarifs/paypal.png';
import visa from '../img/tarifs/visa.png';
import maestro from '../img/tarifs/maestro.png';
import crumpledPaper from '../img/tarifs/crumpled-paper.png';

const Pricing = class {
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
                            <img width="70%" src="${header}" class="img-fluid" alt="spanish">
                        </div>
                    </div>
                </div>
                <div class="col-7 pt-5">
                    <h2 class="display-3 home--header-title">UN PRIX POUR <br>TOUTES LES SAISONS</h2>
                    <h2 class="display-6">Venez séjourner à Rosas</h2>
                    <div class="row">
                        <div class="col-12">
                            <p>De <span class="h3">460 €</span> à <span class="h3">760 €</span> / semaine</p>
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
            <section id="tarifs-pricing" class="mt-4 pt-4">
                <div class="row">
                    <div class="col-4">
                        <div class="card border border-dark bg-light pt-4">
                            <img src="${snowFlake}" class="card-img-top" alt="winter">
                            <div class="card-body">
                                <h5 class="card-title h4 text-center">Basse saison</h5>
                                <p class="card-text h2 text-center"><strong>460 €</strong> / semaine</p>
                                <hr>
                                <div>
                                <ul class="list-group list-group-flush mb-3">
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-calendar"></i>
                                        1<sup>er</sup> octobre / 28 février
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-people-group"></i>
                                        Pour 4 personnes
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-bed-pulse"></i>
                                        1 lit 150 cm
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-bed-pulse"></i>
                                        2 lits 90 cm
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-hand-sparkles"></i>
                                        Ménage inclus
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-layer-group"></i>
                                        Linge de lit inclus
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-layer-group"></i>
                                        Linge de toilette inclus
                                    </li>
                                </ul>                                  
                                </div>
                                <div class="d-grid gap-2">
                                    <a class="btn btn-primary btn-lg" href="/contact" type="button">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card border border-dark bg-light pt-4">
                            <img src="${sakura}" class="card-img-top" alt="winter">
                            <div class="card-body">
                                <h5 class="card-title h4 text-center">Moyenne saison</h5>
                                <p class="card-text h2 text-center"><strong>560 €</strong> / semaine</p>
                                <hr>
                                <div>
                                <ul class="list-group list-group-flush mb-3">
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-calendar"></i>
                                        1<sup>er</sup> octobre / 28 février
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-people-group"></i>
                                        Pour 4 personnes
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-bed-pulse"></i>
                                        1 lit 150 cm
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-bed-pulse"></i>
                                        2 lits 90 cm
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-hand-sparkles"></i>
                                        Ménage inclus
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-layer-group"></i>
                                        Linge de lit inclus
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-layer-group"></i>
                                        Linge de toilette inclus
                                    </li>
                                </ul>                                  
                                </div>
                                <div class="d-grid gap-2">
                                    <a class="btn btn-primary btn-lg" href="/contact" type="button">Contact</a>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div class="col-4">
                        <div class="card border border-dark bg-light pt-4">
                            <img src="${sun}" class="card-img-top" alt="winter">
                            <div class="card-body">
                                <h5 class="card-title h4 text-center">Haute saison</h5>
                                <p class="card-text h2 text-center"><strong>760 €</strong> / semaine</p>
                                <hr>
                                <div>
                                <ul class="list-group list-group-flush mb-3">
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-calendar"></i>
                                        1<sup>er</sup> octobre / 28 février
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-people-group"></i>
                                        Pour 4 personnes
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-bed-pulse"></i>
                                        1 lit 150 cm
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-bed-pulse"></i>
                                        2 lits 90 cm
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-hand-sparkles"></i>
                                        Ménage inclus
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-layer-group"></i>
                                        Linge de lit inclus
                                    </li>
                                    <li class="list-group-item">
                                        <i class="fa-solid fa-layer-group"></i>
                                        Linge de toilette inclus
                                    </li>
                                </ul>                                  
                                </div>
                                <div class="d-grid gap-2">
                                    <a class="btn btn-primary btn-lg" href="/contact" type="button">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container text-center" id="tarifs-conditions">
                <hr />
                <div class="h3  "><strong>50%</strong> du prix à la réservation</div>
                <div class="h3">Puis <strong>100%</strong> à une semaine de l'arrivée</div>
                <div class="h3">Avec caution de <strong>250 euros</strong></div>
            </section>
            <section class="container" id="tarifs-services">
                <hr/>
                <div class="row pt-5">
                    <div class="col-1"></div>
                    <div class="col-2">
                        <div class="d-grid">
                            <button class="btn btn-light" type="button">
                                <img class="img-fluid" width="70%" src="${paypal}" />
                            </button>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2">
                        <button class="btn btn-light pt-3 pb-3" type="button">
                            <img class="img-fluid" width="60%" src="${visa}" />
                        </button>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2">
                        <button class="btn btn-light pt-4 pb-4" type="button">
                            <img class="img-fluid" width="50%" src="${maestro}" />
                        </button>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-2">
                        <img class="img-fluid" width="50%" src="${crumpledPaper}" />
                        <div>Chéques vacances</div>
                        <div>non acceptés</div>
                    </div>
                    <div class="col-1"></div>
                </div>
            </section>
      </main> 
    `;
  }

  run() {
    this.body.innerHTML = this.render();
  }
};

export default Pricing;
