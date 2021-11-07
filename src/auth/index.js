export function storeToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  
  export function getToken() {
    const myToken = JSON.parse(localStorage.getItem('token'));
    return myToken;
  }
  
  export function clearCurrentUser() {
    localStorage.removeItem('token');
  }

  export function storeUsername(username) {
    localStorage.setItem('username', JSON.stringify(username));
  }

  export function getUsername(username) {
    const myUsername = JSON.parse(localStorage.getItem('username'));
    return myUsername;
  }

  export function clearCurrentUsername() {
    localStorage.removeItem('username')
  }