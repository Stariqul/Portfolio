import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <a
                  class="btn text-white"
                  href="https://drive.google.com/file/d/1fWaFtx8tgvxefoP39jlX0fEcrdbmg_EB/view"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl bg-primary">
            Portfolio
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="blog">Blogs</Link>
            </li>
            <li>
              <a
                class="btn text-white bg-primary"
                href="https://drive.google.com/file/d/1fWaFtx8tgvxefoP39jlX0fEcrdbmg_EB/view"
              >
                My Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
