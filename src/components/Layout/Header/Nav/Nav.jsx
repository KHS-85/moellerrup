import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import Logo from '../../../gfx/Moellerup_Logo.png'

const Nav = () => {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light px-0">


                {/* Navbar collapse button */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button>

                {/* Møllerup Gods Logo */}

                <span className="navbar-brand mollerup-logo">
                    <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active"><img className="mollerup-logo" src={Logo} alt="Møllerup Gods Logo" /></NavLink>
                </span>


                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav pt-3 mx-auto">
                        <li className="nav-item active">
                            <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Forside</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/møllerup" className="navbar_link" activeClassName="navbar_link--active">Møllerup Gods</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/virksomheder" className="navbar_link" activeClassName="navbar_link--active">Virksomheder</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/arrangementer" className="navbar_link" activeClassName="navbar_link--active">Arrangementer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/booking" className="navbar_link" activeClassName="navbar_link--active">Booking</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kontakt" className="navbar_link" activeClassName="navbar_link--active">Kontakt</NavLink>
                        </li>
                    </ul>


                </div>

            </nav>

        </div>
    )
}

export default Nav
