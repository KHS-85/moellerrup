import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return (
        <div>
            <article className="container">
                <section className="row">
                    <div className="col">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BYEbiReFVjp/'
                            // maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Instagram
