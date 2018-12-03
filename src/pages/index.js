import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/northgate.jpg'
import thumb02 from '../assets/images/thumbs/chapter.jpg'
import thumb03 from '../assets/images/thumbs/cottonmap.jpg'
import thumb04 from '../assets/images/thumbs/moat.jpg'
import thumb05 from '../assets/images/thumbs/market.jpg'
import thumb06 from '../assets/images/thumbs/kings.jpg'

import full01 from '../assets/images/fulls/northgate.jpg'
import full02 from '../assets/images/fulls/chapter.jpg'
import full03 from '../assets/images/fulls/cottonmap.jpg'
import full04 from '../assets/images/fulls/moat.jpg'
import full05 from '../assets/images/fulls/market.jpg'
import full06 from '../assets/images/fulls/kings.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image1'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image2'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image3'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image4'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image5'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image6'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "The Great Wall of Yarmouth - by Paul Patterson"
        const siteDescription = "The Great Wall of Yarmouth written and illustrated by Paul Patterson"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="zero">

                    </section>

                    <section id="Introduction">
                        <header className="major">
                            <h2>Introduction</h2>
                        </header>
                        <p><strong>This Wall</strong></p>
                        <p>As it stands today, to many it may appear as just the remains of an old wall.</p>
                        <p>In terms of cost, labour and time, it is the biggest undertaking Great Yarmouth has, and will ever, endure.</p>
                        <p>After surviving around 700 years, today its greatest enemy is ignorance of its compelling history.</p>
                        <p>This book attempts to illustrate the importance of what remains, and why it should be preserved.</p>
                    </section>

                    <section id="Look">
                        <h2>Take a Look Inside</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, alt }) => ({
                            src,
                            thumbnail,
                            alt
                        }))} />

                    </section>

                    <section id="Buy">
                        <h2>Buy the Book</h2>
                        <div className="row">
                            <div className="6u">
                                <p>Details about book</p>
                            </div>
                            <div className="6u">
                                <p>Details about book 2</p>
                            </div>
                        </div>
                    </section>

                    <section id="Message">
                        <h2>Message the Author</h2>
                        <div className="row">
                            <div className="12u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)">
                                          <label for="name">Name</label>
                                          <input type="text" name="name" id="name" placeholder="Who are you" />
                                        </div>
                                        <div className="6u 12u$(xsmall)">
                                          <label for="email">Email</label>
                                          <input type="email" name="email" id="email" placeholder="Where to reply to you" />
                                        </div>
                                        <div className="12u">
                                          <label for="message">Message</label>
                                          <textarea name="message" id="message" placeholder="What is your message..." rows="4"></textarea>
                                        </div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                                <p className="align-right">or you can email <a href="mailto:paul@atecdesign.co.uk">paul@atecdesign.co.uk</a></p>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex