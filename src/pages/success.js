import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Success = (props) => (
	<Layout>
		<Helmet>
			<title>Thank you for your Message - The Great Wall of Yarmouth</title>
			<meta name="description" content="Success page for contact form submissions" />
		</Helmet>

		<div id="main">
			<section id="success">
				<div>
                    <header className="major">
                        <h1>Thank you!</h1>
                    </header>
                    <p>Thank you for your message, we aim to reply to all messages within a 24hrs!</p>
                    <p><a href="/">Click here</a> to return to our home page</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default Success