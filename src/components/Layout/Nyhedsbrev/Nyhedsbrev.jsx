import React from 'react'
import Modal from './Modal'

const Nyhedsbrev = () => {
    return (

        <div>
            <Modal />
            <form action="newsletter_signup" class="card p-3 bg-light newsletter-box">
                <div class="form-group">
                    <label for="email-new">Email-adresse:</label>
                    <input type="email" class="form-control" id="email-new" placeholder="Indtast email-adresse" name="email-new" required />
                    <div class="valid-feedback">Email-adressen er gyldig</div>
                    <div class="invalid-feedback">Email-adressen er ugyldig</div>
                </div>
                <div class="form-group">
                    <label for="fnavn">Fornavn:</label>
                    <input type="text" class="form-control" id="fnavn" placeholder="Indtast fornavn" name="uname" required />
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">Skriv venligst dit fornavn her</div>
                </div>
                <div class="form-group">
                    <label for="enavn">Efternavn:</label>
                    <input type="text" class="form-control" id="enavn" placeholder="Indtast efternavn" name="enavn" required />
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">Skriv venligst dit efternavn her</div>
                </div>
                <div class="form-check py-1">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1"> Møllerup - Alle </label>
                </div>
                <div class="form-check py-1">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                    <label class="form-check-label" for="defaultCheck2"> Verdensballetten </label>
                </div>
                <div class="form-check py-1">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                    <label class="form-check-label" for="defaultCheck3"> Møllerup Hamp </label>
                </div>
                <button type="submit" class="btn btn-primary my-3">Tilmeld</button>
            </form>

        </div>
    )
}

export default Nyhedsbrev
