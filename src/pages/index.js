import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

// volume 1 images
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

/*
//volume 2 images
import thumb07 from '..assets/images/thumbs/ '

import full07 from  '..assets/images/fulls/ '
*/

import bookCovers from '../assets/images/book-covers.png'
import bookCovervol1 from '../assets/images/volume-1.png'
import bookCovervol2 from '../assets/images/volume-2.png'

const VOLUME1 = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image1'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image2'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image3'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image4'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image5'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.', alt: 'image6'}
];

// eslint-disable-next-line
const VOLUME2 = [
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
                        <div className="row">
                            <div className="8u 12u$(xsmall)">
                                <img src={bookCovers} alt="great wall of yarmouth book cover" />
                            </div>
                            <div className="4u 12u$(xsmall)">
                                <p>190 pages containing facts about the medieval wall of Yarmouth.</p>
                                <p>Including never before seen illustrations of how the wall and gates looked, and how they would appear today had they survived.</p>
                                <p>Written and illustrated by Paul B. Patterson</p>
                            </div>                          
                        </div>
                    </section>

                    <section id="Introduction">
                        <header className="major">
                            <h2>Introduction</h2>
                        </header>
                        <div className="row">
                        <div className="6u 12u$(xsmall)">
                            <h3>Volume 1 - Murage</h3>
                            <p><strong>This Wall</strong></p>
                            <p>As it stands today, to many it may appear as just the remains of an old wall.</p>
                            <p>In terms of cost, labour and time, it is the biggest undertaking Great Yarmouth has, and will ever, endure.</p>
                            <p>After surviving around 700 years, today its greatest enemy is ignorance of its compelling history.</p>
                            <p>This book attempts to illustrate the importance of what remains, and why it should be preserved.</p>
                        </div>
                        <div className="6u 12u$(xsmall)">
                            <h3>Volume 2 - Mumorum Operatio</h3>
                            <p>The full story of the wall, its effect over the town, and how the town evolved.
                            Less than three centuries ago, Great Yarmouth was still a fortified town.
                            Its wall almost complete with its towers, and most of the gates still standing.</p>

                            <p>By 1850 all the gates had gone.
                            <br />Great Yarmouth suffered immensely during the bombing raids in World War II, massive areas of the town’s important medieval past was lost.
                            From 1950’s to the 1970’s thoughtless planning to restructure the town and roads paradoxically damaged important areas, which had survived time and war.
                            Despite these huge losses in a relatively short time, Great Yarmouth is still recognised as one of England’s most interesting medieval towns.
                            In defiance of all these losses, Great Yarmouth still proudly contains some of the country’s most interesting buildings and structures.</p>

                            <p>This book attempts to illustrate the importance of what remains, and why they should be preserved.</p>
                        </div>
                        </div>
                    </section>

                    <section id="Look">
                        <h2>Take a Look Inside</h2>

                        <Gallery images={VOLUME1.map(({ id, src, thumbnail, caption, description, alt }) => ({
                            src,
                            thumbnail,
                            alt
                        }))} />                        

                    </section>

                    <section id="Buy">
                        <h2>Buy the Book</h2>
                        <div className="row">
                            <div className="6u">
                                <img src={bookCovervol1} alt="book cover" />
                                <p>Details about book</p>
                            </div>
                            <div className="6u">
                                <img src={bookCovervol2} alt="book cover" />
                                <p>Details about book 2</p>
                            </div>
                        </div>
                    </section>

                    <section id="Message">
                        <h2>Message the Author</h2>
                        <div className="row">
                            <div className="12u 12u$(small)">
                                <form name="message-the-author" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="bot-field" />
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
                                        <ul className="actions">
                                            <li><input type="submit" value="Send Message" /></li>
                                        </ul>
                                    </div>

                                </form>
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