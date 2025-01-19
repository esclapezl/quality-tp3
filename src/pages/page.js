import Header from '../components/header';

const Page = class {
  constructor(body) {
    this.body = body;
  }
  renderHeader() {
    return `
      <header class="container-fluid">
        ${Header}
        <div class="container mt-5 pt-4">
        </div>
      </header>
    `;
  }

  render() {
    return `
      ${this.renderHeader()}
      <hr />
      <main class="container mt-5">
      </main> 
    `;
  }

  run() {
    this.body.innerHTML = this.render();
  }
};

export default Page;
