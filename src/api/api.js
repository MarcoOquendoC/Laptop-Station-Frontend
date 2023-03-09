// Local storage
const setAuthToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));
const unsetAuthToken = () => localStorage.removeItem('token');
const authorization = () => ({ Authorization: localStorage.getItem('token') } || null);

const baseURL = 'http://localhost:3001';
// Options
const registerOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
});

const loginOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
});

const logoutOptions = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

// Object of fetch functions
const api = {
  async register(user) {
    const response = await fetch(`${baseURL}/signup`, registerOptions(user));
    const { status: code } = response;
    if (code === 200) setAuthToken(response);
    const data = await response.json();
    return data;
  },

  async login(user) {
    const response = await fetch(`${baseURL}/login`, loginOptions(user));
    const { status: code } = response;
    if (code === 200) {
      setAuthToken(response);
      const data = await response.json();
      return data;
    }
    return 'Error src/api/api.js line 43';
  },

  async logout() {
    const response = await fetch(`${baseURL}/logout`, logoutOptions());
    const { status: code } = response;
    if (code === 200) {
      unsetAuthToken(response);
      return 'logged out';
    }
    return null;
  },

  async currentUser() {
    const response = await fetch(`${baseURL}/current_user`, authorization());
    const { status: code } = response;
    if (code === 200) setAuthToken(response);
    const data = await response.json();
    return data;
  },

  async fetchItems() {
    const response = await fetch(`${baseURL}/items`);
    const data = await response.json();
    return data;
  },
};

export default { api };
