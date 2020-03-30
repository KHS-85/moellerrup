import React from 'react'
import { NavLink } from 'react-router-dom'
import booking_banner from '../components/gfx/booking_banner.jpg'
import booking_card from '../components/gfx/booking_card.jpg'

const Booking = () => {
    return (
        <div>

            <div className="container-fluid px-0 my-5">
                <div className="">
                    <img className="img-fluid" src={booking_banner} alt="booking" />
                </div>
            </div>

            <div className="container">
                <div className="px-3">

                    <h3 className="font-weight-bold pb-3">
                    Lej unikke festlokaler centralt i Østjylland til bryllup, firmafest eller koncerter
                    </h3>

                    <p>
                    Er du på udkig efter unikke festlokaler i Østjylland? Så lejer Møllerup Gods sin idylliske Hubertus Kro og den rustikke Kørelade ud til større fester og selskaber. Uanset om der er tale om bryllup eller firmafest, så sikrer vi en autentisk stil og de moderne faciliteter, der skal til for at give dig og dine gæster en uforglemmelig oplevelse på Møllerup Gods.<br /><br />
                    </p>
                    <p className="font-weight-italic pb-3">Læs mere om booking på de enkelte sider nedenfor.</p>

                </div>
            </div>

            <section className="container my-5 ">
                <div className="card-deck ">

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={booking_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Booking</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={booking_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Booking</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={booking_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Booking</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                    <section className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card w-75">
                            <img src={booking_card} alt="Firma" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h5 className="card-title">Booking</h5>
                                <NavLink to="/page" className="card-link">Læs mere her</NavLink>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}
export default Booking
