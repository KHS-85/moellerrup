import React from 'react'
import { NavLink } from 'react-router-dom'
import Nyhed from '../components/Layout/Nyhed/Nyhed'

const Nyheder = () => {
    return (
        <div className="container">
            <article className="row">
                <section className="col-12">
                    <div className="card my-3">
                        <img src={process.env.PUBLIC_URL + '/Verdensballet_1280x1280.jpg'} className="img-fluid" title="Verdensballet" alt="Verdensballet" />
                        <div className="pt-3 pl-3">
                            <h2>Verdensballetten på Møllerup Gods lørdag d. 13 juli 2019 blev en skøn aften</h2>
                            <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11 juli 2020</p>
                            <p><NavLink exact to="/virksomheder">Læs mere her</NavLink></p>
                        </div>
                    </div>
                </section>
                <Nyhed />
            </article>
        </div>
    )
}

export default Nyheder