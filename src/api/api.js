const baseURL = 'http://localhost:3001';

const setAuthToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));

const registerOptions = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user),
});

const api = {
  async register(user) {
    const response = await fetch(`${baseURL}/signup`, registerOptions(user));

    const { status: code } = response;

    if (code === 200) setAuthToken(response);

    const data = await response.json();
    return data;
  },
};

export default api;
