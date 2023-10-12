import ThemeDropDown from "../containers/Theme/ThemeDropDown";
import { AnyAction } from "redux";

const Navigation = () => {
  const handleClick = (event: AnyAction) => {
    event.preventDefault();
    window.location.href = event.currentTarget.getAttribute('href');
  };

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a
          href="/"
          onClick={handleClick}
          className="btn btn-ghost normal-case text-xl"
        >
          daisyUI
        </a>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className="navbarItem">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="/login"
                onClick={handleClick}
                className="info-content hover:bg-info-content hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Login
              </a>
              <a
                href="/registion"
                className="info-content hover:bg-info-content hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Registion
              </a>
            </div>
          </div>
        </div>
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/64680372?v=4" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        <div className="">
          <ThemeDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
