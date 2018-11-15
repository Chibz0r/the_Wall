import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner align-center">
                    <div className="avatar"><img src={avatar} alt="" /></div>
                    <h1><strong>The Great Wall of Yarmouth</strong></h1>
                    <ul className="sidemenu">
                      <li>Introduction</li>
                      <li>A Look Inside</li>
                      <li>Buy the Book</li>
                      <li>Message the Author</li>
                    </ul>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
