// Navigation.jsx

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../store/modules/theme/action/themeAction';
import { AnyAction } from 'redux';

interface NavigationProps {
  theme: string; // Assuming your theme is a string
  setTheme: (theme: string) => void;
}


const Navigation: React.FC<NavigationProps> = ({ theme, setTheme }) => {

  const handleThemeChange = (event: AnyAction) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    console.log("selectedTheme", selectedTheme);
  };

  useEffect(() => {
    console.log('Theme changed:', theme);
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);


  return(
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>

    <div className="flex-none gap-2">
    <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
      <div className="dropdown dropdown-end">
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-end">
        <label className="text-white">Select Theme:</label>
        <select onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="emerald">Emerald</option>
        </select>
      </div>
  </div>
  )
};

const mapStateToProps = (state: { theme: string }) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, { setTheme })(Navigation);

