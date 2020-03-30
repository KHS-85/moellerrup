import React from 'react'
// import { NavLink } from 'react-router-dom'
import Accordian from './Accordian/Accordian'
import historie_banner from '../../gfx/historie_banner.jpg'
import historie_img from '../../gfx/historie_img.jpg'

const Møllerup = () => {
    return (
        <div>

            <div className="container-fluid px-0 my-5">
                <div className="">
                    <img className="img-fluid" src={historie_banner} alt="møllerup gods luftfoto" />
                </div>
            </div>

            <div className="container">
                <div className="px-3">

                    <h2 className="font-weight-bold pb-1">
                        Møllerup Gods er en kulturhistorisk perle i Nationalpark Mols Bjerge
                    </h2>

                    <h4 className="pl-2 pb-2">
                        – men det er også et hjem og en virksomhed med en holdning til fortid, nutid og fremtid.
                    </h4>

                    <p>
                        Møllerup Gods er et levende sted, hvor vi værner om naturen og kulturhistorien i respekt for generationer, der svandt og generationer, der kommer. Hver generation er en meget lille del af en meget lang historie. Når vi lægger nyt tag på huset og planter egetræer i skoven, så er det en investering for vores børns børnebørn. På samme vis høster vi i dag frugterne af de frø, som fortidige generationer har sået. Det er et ansvar, vi forvalter med stor taknemmelighed og stolthed.<br /><br />
                    </p>

                </div>

                <div>

                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: "lightgrey" }}>

                <div className="container px-3 pb-5">

                    <h3 className="pt-5 pb-3">
                        Familien Gamborg
                        </h3>

                    <p>
                        “Vi” er Anne Sophie og Stig Gamborg, men Møllerup Gods er et større familieforetagende. Vi har fire børn, der alle hjælper til – blandt andet når vi høster og arrangerer events som Verdensballetten, eller når vi laver en stor satsning med et nyt eventyr som hamp, hvor vi udvikler fødevarer og hudpleje. <br /> <br />

                        Anne Sophie styrer landbruget og er aktiv i bestyrelserne for Nationalpark Mols Bjerge, Gammel Estrup samt Sektionen for Større Jordbrug. Stig er hovedarkitekten bag udviklingen af Møllerup Gods som “inkubator” og er desuden direktør i Advance Nonwoven. <br /> <br />

                        Anne Sophies mor, tidligere hofdame Lena von Lüttichau, bor i den tidligere chaufførbolig “Garagenborg” – som faktisk er en af godsets nyere bygninger. Vi er alle meget engagerede i vores lille, aktive lokalsamfund.
                        </p>

                        <img className="py-3 img-fluid" src={historie_img} alt="familien Gamborg"/>
                </div>

            </div>

            <div className="container my-5">
                <h4 className="pb-3">Historien om Møllerup</h4>
                {/* Accordian component with collapsible sections for Møllerup history */}
                <Accordian />

            </div>

        </div>
    )
}

export default Møllerup
