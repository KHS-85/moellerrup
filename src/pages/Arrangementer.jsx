import React from 'react'
import { NavLink } from 'react-router-dom'
import arrangement_banner from '../components/gfx/arrangement_banner.jpg'
import arrangement_card from '../components/gfx/arrangement_card.jpg'

const Arrangementer = () => {
    return (
        <div>

            <div className="container-fluid px-0 my-5">
                <div className="">
                    <img className="img-fluid" src={arrangement_banner} alt="arrangement" />
                </div>
            </div>

            <div className="container">
                <div className="px-3">

                    <h3 className="font-weight-bold pb-3">
                    Arrangementer på Møllerup
                    </h3>

                    <p>
                    De gule bygninger og arealet omkring Møllerup sætter hvert år rammerne for en række for store og små aktiviteter og kulturelle begivenheder. Udover Verdensballetten, der er et årligt tilbagevendende arrangement, åbner Møllerup dørene op og fortæller om godsets daglige drift og bedrifter til Åbent Landbrug, Herregårdenes Dag samt historiske rundvisninger og besøg i vores gårdbutik.<br /><br />
                    </p>
                    <p className="font-weight-italic pb-3">Læs mere om arrangementerne på de enkelte sider nedenfor.</p>

                </div>
            </div>

            <section className="container my-5 ">
                <div className="card-deck ">

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={arrangement_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Arrangement</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={arrangement_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Arrangement</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={arrangement_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Arrangement</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={arrangement_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Arrangement</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}

export default Arrangementer
