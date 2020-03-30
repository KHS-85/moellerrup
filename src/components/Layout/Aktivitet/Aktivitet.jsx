import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import HampAkt from '../../gfx/HampAkt.jpg';
import MoederAkt from '../../gfx/MoederAkt.jpg';
import FestAkt from '../../gfx/FestAkt.jpg';
import DummyAkt from '../../gfx/DummyAkt.jpg';

import './Aktivitet.scss';

const Aktivitet = () => {
    const [aktiviteter] = useState([
        { img: HampAkt, title: 'Møllerup Hamp', text: 'På Møllerup gods dyrker vi industri-hamp til fødevarer, isolering og hudpleje.', linktext: 'Køb produktet her', link: "/hamp", id: 1 },
        { img: MoederAkt, title: 'Møder & Events', text: 'Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.', linktext: 'Læs mere her', link: "/booking" ,id: 2 },
        { img: FestAkt, title: 'Fest på kroen', text: 'Lej Huberthus Kroen og hold fest for op til 80 personer i romantiske og historiske rammer.', linktext: 'Læs mere her', link: "/booking", id: 3 },
        { img: DummyAkt, title: 'Aktivitet', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci eaque qui.', linktext: 'Læs mere her', link: "/", id: 4 },
        { img: DummyAkt, title: 'Aktivitet', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci eaque qui.', linktext: 'Læs mere her', link: "/", id: 5 },
        { img: DummyAkt, title: 'Aktivitet', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci eaque qui.', linktext: 'Læs mere her', link: "/", id: 6 },
        { img: DummyAkt, title: 'Aktivitet', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci eaque qui.', linktext: 'Læs mere her', link: "/", id: 7 },
        { img: DummyAkt, title: 'Aktivitet', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci eaque qui.', linktext: 'Læs mere her', link: "/", id: 8 },
        { img: DummyAkt, title: 'Aktivitet', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci eaque qui.', linktext: 'Læs mere her', link: "/", id: 9 }
    ]);
    return (
        <div className="card-deck">
            {aktiviteter.map(aktivitet => {
                return (
                    <section className="col-12 col-md-6 col-lg-4 my-1">
                        <div key={aktivitet.id} className="card">
                            <img src={aktivitet.img} alt="Aktivitet" title="Aktivitet" className="img-fluid card-img-top p-1" />
                            <div className="card-body">
                                <h3 className="card-title">{aktivitet.title}</h3>
                                <p className="card-text">{aktivitet.text}</p>
                                <NavLink to={aktivitet.link} className="card-link">{aktivitet.linktext}</NavLink>
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>

    )
}

export default Aktivitet