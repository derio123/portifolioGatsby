import React from "react";
import './index.css';

export default function Home() {
  return (
    <header>
      <nav className="navbar">
        <button className="navbar-toogle" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="logo">
          <a class="navbar-brand" href="index.html">
            <img src="imgs/pc.png" alt="" />DERX7
          </a>
        </div>
        <div className="">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link product" href="index.html">
                <i class="fas fa-home Portfólio"></i>
                <caption>Inicio</caption>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link product" href="https://github.com/derio123">
                <i class="fab fa-github Portfólio"></i>
                <caption>Projetos</caption>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
