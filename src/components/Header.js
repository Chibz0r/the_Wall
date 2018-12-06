import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner align-center">
                    <div className="avatar"><img src={avatar} alt="great yarmouth shield" /></div>
                    <h1><strong>The Great Wall of Yarmouth</strong></h1>
                    <ul className="sidemenu nav-links">
                      <li><a href="#Introduction">Introduction</a></li>
                      <li><a href="#Look">A Look Inside</a></li>
                      <li><a href="#Buy">Buy the Book</a></li>
                      <li><a href="#Message">Message the Author</a></li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
