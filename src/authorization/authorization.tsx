import axios from 'axios';

export default function setAuthorizationToken(token: string | null | boolean) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
