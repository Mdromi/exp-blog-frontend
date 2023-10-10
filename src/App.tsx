import { useEffect } from 'react';
import './App.css';
import  AppRoutes from './Route';
import { useDispatch } from 'react-redux';
import { setTheme } from './store/modules/theme/action/themeAction';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the initial theme
    dispatch(setTheme('light')); // or your default theme
  }, [dispatch]);
  
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
