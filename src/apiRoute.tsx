let API_ROUTE: string;
let STATIC_ROUTE: string;

if (process.env.NODE_ENV === 'development') {
  API_ROUTE = 'http://127.0.0.1:8888/api/v1';
  STATIC_ROUTE = 'http://127.0.0.1:8888';
} else {
  API_ROUTE = 'https://chodapi.com/api/v1';
  STATIC_ROUTE = 'http://127.0.0.1:8888';
}

const routes = { API_ROUTE, STATIC_ROUTE };

export default routes;

