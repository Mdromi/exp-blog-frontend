import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { SignOut } from "../../store/modules/auth/actions/authAction";
import {
  PhotoIcon,
  UserCircleIcon,
 LinkIcon,
} from "@heroicons/react/24/solid";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: AnyAction) => state.Auth.isAuthenticated
  );

  const handleLogout = () => {
    dispatch<any>(SignOut());
  };
  return (
    <div className="flex justify-center items-center mt-6 ">
      {isAuthenticated ? (
        <form className="w-75 mt-6 p-10 rounded-md border border-gray-400">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        medium.com/
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="username"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Short Tilte
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Write a few word about yourself."
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      placeholder="Write a few sentences about yourself."
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Enter Your First Name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Enter  Your Last Name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter Your Email Address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Your Social Links
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>

              <div className="mt-8">
                <div className="mt-4 space-y-10">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      Webiste
                    </label>
                    <div className="relative">
                      <div
                        className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <LinkIcon
                          className="h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      </div>

                      <input
                        id="website"
                        type="url"
                        name="website"
                        className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-md
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                        placeholder="Enter your Website Link"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-10">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      Github
                    </label>
                    <div className="relative">
                      <div
                        className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <LinkIcon
                          className="h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      </div>

                      <input
                        id="github"
                        type="url"
                        name="github"
                        className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-md
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                        placeholder="Enter your Github Link"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-10">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      Linkedin
                    </label>
                    <div className="relative">
                      <div
                        className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <LinkIcon
                          className="h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      </div>

                      <input
                        id="linkedin"
                        type="url"
                        name="linkedin"
                        className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-md
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                        placeholder="Enter your Linkedin Link"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-10">
                  <div className="flex flex-col mb-5">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >
                      Twitter
                    </label>
                    <div className="relative">
                      <div
                        className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <LinkIcon
                          className="h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      </div>

                      <input
                        id="twitter"
                        type="url"
                        name="twitter"
                        className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-md
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                        placeholder="Enter your Twitter Link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <p>Please log in to access the content.</p>
      )}
    </div>
  );
};

export default Profile;
