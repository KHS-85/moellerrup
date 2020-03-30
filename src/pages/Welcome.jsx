import React from 'react'
import Deco from '../components/gfx/deco.png'

const Welcome = () => {
    return (
        <div className="welcome">
            <article className="container my-5">
                <section className="row">
                    <div className="col-12">

                        <div className="mx-auto text-center py-3" >
                            <img className="img-fluid" src={Deco} alt="fancy decoration above text"/>
                        </div>

                        <div className="mx-0 px-1 mx-sm-5 px-sm-5">
                            <h3 className="text-center pb-3">Velkommen til Møllerup Gods</h3>
                            <p>Vi byder dig indenfor, hvor traditionelle værdier møder innovative visioner. På Møllerup Gods finder du traditionelt landbrug,
                            jagt og hestepension, men vi driver også aktivt flere virksomheder med fokus på hamp og bæredygtighed. <br/><br/>

                            Vi åbner flere gange om året dørene for offentligheden, når vi afholder Verdensballetten, inviterer på rundvisning eller afholder
                            private eller firmaarrangementer inden for rammerne af de gule bindingsværksmure. <br/><br/>
                            </p>
                            <p className="text-center">Venlig hilsen</p>
                            <p className="text-center font-weight-bold font-italic">Alexander, Anne Sophie og Stig Gamborg</p> 
                            
                        </div>

                    </div>
                </section>
            </article>
        </div>
    )
}

export default Welcome
