import React from 'react'

const Footer = () => {
    return (
        <div className="Footer-Element">
           <div className="container pt-5">
               <div className="row mx-auto">

                   <div className="col-12 col-sm-4">
                       <ul className="footer-list text-center text-sm-left">
                           <li><a href="/nyheder">Nyheder</a></li>
                           <li><a href="/Lej-en-bolig">Lej en bolig</a></li>
                           <li><a href="/kontakt">Kontakt</a></li>
                       </ul>
                   </div>

                   <div className="col-12 col-sm-4 text-center">
                        <h5 className="font-weight-bold">Møllerup Gods</h5>
                        <p className="mb-1">Møllerupvej 26 </p>
                        <p>8410 Rønde </p> 
                   </div>

                   <div className="col-12 col-sm-4 text-center">
                        <h5 className="font-weight-bold">Kontakt</h5>
                        <p className="mb-1">+45 8758 6900</p>
                        <p>info@moellerup.dk</p> 
                   </div>

               </div>
               <div className="row">
                   <div className="col-12 pt-3">
                   <p className="text-center">Copyright 2020 © Møllerup Gods</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
