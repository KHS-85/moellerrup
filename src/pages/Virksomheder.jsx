import React from 'react'
import { NavLink } from 'react-router-dom'
import Virksomhed_banner from '../components/gfx/virksomhed_banner.png'
import Virksomhed_card from '../components/gfx/virksomhed_card.jpg'

const Virksomheder = () => {
    return (
        <div>

            <div className="container-fluid px-0 my-5">
                <div className="">
                    <img className="img-fluid" src={Virksomhed_banner} alt="virksomhed" />
                </div>
            </div>

            <div className="container">
                <div className="px-3">

                    <h3 className="font-weight-bold pb-3">
                        Virksomheder på Møllerup
                    </h3>

                    <p>
                    Møllerup Gods myldrer ikke længere med staldknægte og malkepiger, men her er stadig masser af liv. <br />
                    Møllerup Gods danner nemlig ramme for en række virksomheder ud over godsets drift. <br /><br />
                    </p>
                    <p className="font-weight-italic pb-3">Læs mere om virksomhederne på de enkelte sider nedenfor.</p>

                </div>
            </div>

            <section className="container my-5">
                <div className="card-deck">

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={Virksomhed_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Virksomhed</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={Virksomhed_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Virksomhed</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={Virksomhed_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Virksomhed</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={Virksomhed_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Virksomhed</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}

export default Virksomheder
