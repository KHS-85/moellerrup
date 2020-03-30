import React from 'react'
import kontakt_banner from '../components/gfx/kontakt_banner.jpg'

const Kontakt = () => {
    return (
        <div>

            {/* image banner */}
            <div className="container-fluid px-0 my-5">
                <div className="">
                    <img className="img-fluid" src={kontakt_banner} alt="skrivebord med fjerpen og papir" />
                </div>
            </div>


            <article className="container my-5">
                <section className="row">

                    {/* kontakt formular */}
                    <div className="col order-2 order-md-1">
                        <form action="/send_besked">
                            <div class="form-group">
                                <label for="name"><strong>Dit navn (skal udfyldes):</strong></label>
                                <input type="text" class="form-control" placeholder="Dit navn" id="name" required />
                            </div>
                            <div class="form-group">
                                <label for="email"><strong>Din Email adresse (skal udfyldes):</strong></label>
                                <input type="email" class="form-control" placeholder="Din email" id="email" required />
                            </div>
                            <div class="form-group">
                                <label for="tlf"><strong>Telefon:</strong></label>
                                <input type="tel" class="form-control" placeholder="Indtast telefon" id="tlf" pattern="[0-9]{8}" required />
                            </div>
                            <div class="form-group form-check">
                                <div class="form-check py-1">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">Fest/bryllup</label>
                                </div>
                                <div class="form-check py-1">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label class="form-check-label" for="defaultCheck2">Møde/firmaarrangement</label>
                                </div>
                                <div class="form-check py-1">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                    <label class="form-check-label" for="defaultCheck3">Rundvisning/foredrag</label>
                                </div>
                                <div class="form-check py-1">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                                    <label class="form-check-label" for="defaultCheck4">Andet</label>
                                </div>
                                <div class="form-group py-1">
                                    <label for="Textarea"><strong>Din besked</strong></label>
                                    <textarea class="form-control" id="Textarea" rows="3" required></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Indsend</button>
                        </form>
                    </div>

                    {/* Google Maps iFrame */}
                    <div className="col order-1 order-md-2 py-3">
                        <iframe title="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2214.6769524554243!2d10.551463416241948!3d56.28362638069865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c31d3cf89231d%3A0xf4d3e0dded488a0b!2sM%C3%B8llerupvej%2026%2C%208410%20R%C3%B8nde!5e0!3m2!1sen!2sdk!4v1585570532899!5m2!1sen!2sdk" width="auto" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                </section>





            </article>
        </div>
    )
}

export default Kontakt
