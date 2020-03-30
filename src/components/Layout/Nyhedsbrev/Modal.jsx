import React from 'react'

const Modal = () => {
    return (
        <article>
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Tak for din tilmelding!</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            Du er nu tilmeldt vores nyhedsbrev og vil fremover modtage det på din email
                    </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Modal
