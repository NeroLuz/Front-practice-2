import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Header.css"

const Header = () => {
    const [menu, setMenu] = useState(false)

    const mostrarMenu = () => {
        setMenu(!menu)
    }

  return (
    <header>
        <nav>
            <div id="info-empresa">
                <h2><a href="index.html">Bonsai</a></h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#">Product <i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Templates <i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
            </div>
            <div className="buttons">
                <button className="login"><b>LOG IN</b></button>
                <button className="register"><b>START FREE</b></button>
            </div>
            <div className={menu ? "mostrar" : "ocultar"} id="navbar-responsive">
                <button onClick={mostrarMenu} className={menu ? "mostrar" : "ocultar"} id="cerrar-menu"><i className="fa-solid fa-xmark"></i></button>
                <div className={menu ? "mostrar nav-links" : "ocultar"} id="nav-links2">
                    <ul>
                        <li><a href="#">Product <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href="#">Templates <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className={menu ? "mostrar buttons" : "ocultar"} id="buttons2">
                    <button className={menu ? "mostrar login" : "ocultar"} id="login2"><b>LOG IN</b></button>
                </div>
            </div>
            <button onClick={mostrarMenu} className={menu ? "ocultar" : "mostrar"} id="menu-hamburguesa"><i className="fa-solid fa-bars"></i></button>
        </nav>
    </header>
  )
}

export default Header