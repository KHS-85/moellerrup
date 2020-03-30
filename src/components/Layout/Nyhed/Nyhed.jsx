import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Hamp from '../../gfx/hamp.jpg';
import Dansere from '../../gfx/dansere.jpg';
import Bygning from '../../gfx/bygning.jpg';

import './nyhed.scss';

const Nyhed = () => {
    const [nyheder] = useState([
        { img: Hamp, title: 'Køb vores hampeprodukter', text: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen.', linktext: 'Køb online her', link: "/hamp", id: 1 },
        { img: Dansere, title: 'Verdensballetten 2019', text: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forstillingen på Møllerup Gods.', linktext: 'Se mere her', link: "ballet" ,id: 2 },
        { img: Bygning, title: 'Historien om Møllerup Gods', text: 'Marsk Stig Andersen Hvide af den magtfulde Hvideslægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', linktext: 'Læs historien her', link: "/møllerup", id: 3 }
    ]);
    return (
        <div className="card-deck">
            {nyheder.map(nyhed => {
                return (
                    <section className="col-12 col-md-6 col-lg-4">
                        <div key={nyhed.id} className="card">
                            <img src={nyhed.img} alt="Nyhed" title="Nyhed" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h3 className="card-title">{nyhed.title}</h3>
                                <p className="card-text">{nyhed.text}</p>
                                <NavLink to={nyhed.link} className="card-link">{nyhed.linktext}</NavLink>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>

    )
}

export default Nyhed