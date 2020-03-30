import React from 'react'
import DKC from '../components/gfx/DKBSlogo_new.png'
import Instagram from '../components/Layout/Instragram/Instagram'
import Nyhedsbrev from '../components/Layout/Nyhedsbrev/Nyhedsbrev'

const Outro = () => {
    return (
        <article className="container my-5 px-sm-5">
            {/* DKC Logo + Tekst */}
            <section className="row">
                <div className="col">
                    <img className="img-fluid" src={DKC} alt="Logo for Danske Konference Centre . DK" />
                    <h5 className="my-3">Møllerup Gods er autoriseret partner hos Danske Konferencecentre</h5>
                </div>
            </section>

            <section className="row mt-5">

            <div className="col col-md-9">
            <Instagram />
            </div>

            <div className="col">
            <Nyhedsbrev />
            </div>

            </section>
            
        </article>
    )
}

export default Outro
