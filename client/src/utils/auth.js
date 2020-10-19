class Auth {

  login(history, token) {
    localStorage.setItem('token', JSON.stringify(token));
    if(this.isAuthenticated()) {
      history.push('/lesson');
    }
  }

  logout(history) {
    localStorage.removeItem('token');
    history.push('/');
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem('token'));
  }

}

export default new Auth();