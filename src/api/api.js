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
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
});

const addReserveOptions = (reserve) => ({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(reserve),
});

const deleteReserveOptions = () => ({
  method: 'delete',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
});

const addItemOptions = (item) => ({
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(item),
});

const deleteItemOptions = () => ({
  method: 'delete',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
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
    const response = await fetch(`${baseURL}/current_user`, { headers: authorization() });
    const data = await response.json();
    return data;
  },

  async fetchItems() {
    const response = await fetch(`${baseURL}/items`);
    const data = await response.json();
    return data;
  },

  async addItemfetch(item) {
    const response = await fetch(`${baseURL}/items`, addItemOptions(item));
    const data = await response.json();
    return data;
  },

  async deleteItemfetch() {
    const response = await fetch(`${baseURL}/items`, deleteItemOptions());
    const data = await response.json();
    return data;
  },

  async fetchReserves() {
    const response = await fetch(`${baseURL}/reserves`, { headers: authorization() });
    const data = await response.json();
    return data;
  },

  async addReservefetch(reserve) {
    const response = await fetch(`${baseURL}/reserves`, addReserveOptions(reserve));
    const data = await response.json();
    return data;
  },

  async deleteReservefetch(id) {
    const response = await fetch(`${baseURL}/reserves/${id}`, deleteReserveOptions());
    const data = await response.json();
    return data;
  },
};

export default api;
