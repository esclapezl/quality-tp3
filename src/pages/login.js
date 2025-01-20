const axios = require('axios').default;

const Login = class {
  constructor(body) {
    this.body = body;
  }

  run() {
    this.body.innerHTML = this.render();
    this.onClickButton();
  }

  onClickButton() {
    const formEl = document.querySelector('form');

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const dataForm = JSON.parse(JSON.stringify(Object.fromEntries(new FormData(formEl))));

      axios.get(`http://127.0.0.1:3000/login?login=${dataForm.name}&password=${dataForm.password}`)
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem('token', token);

          window.location.href = '/admin';
        }).catch(() => {
          console.log('badddd');
        });
    });
  }

  renderForm() {
    return `
      <form>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa-solid fa-user"></i>
          </span>
          <input name="name" type="text" class="form-control" placeholder="hello world" required>
        </div>
          <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa-solid fa-lock"></i>
          </span>
          <input name="password" type="password" class="form-control" required>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">
            <i class="fa-solid fa-paper-plane"></i>
            Envoyer
          </button>
        </div>
      </form>
    `;
  }

  render() {
    return `
        <main class="container" style="margin-top:30vh;">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                  ${this.renderForm()}
                </div>
                <div class="col-3"></div>
            </div>
        </main>
    `;
  }
};

export default Login;
