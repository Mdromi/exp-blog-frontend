let API_ROUTE: string;

if (process.env.NODE_ENV === 'development') {
  API_ROUTE = 'http://127.0.0.1:8888/api/v1';
} else {
  API_ROUTE = 'https://chodapi.com/api/v1';
}

export default API_ROUTE as APIRouteType;

type APIRouteType = typeof API_ROUTE;
