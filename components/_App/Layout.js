import React from 'react';
import Head from 'next/head';
import GoTop from '../Shared/GoTop';
import { ToastContainer, Slide } from 'react-toastify';
import ReactTooltip from 'react-tooltip'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <ReactTooltip  />
            <Head>
                <title>Sneaker Wars</title>
                <meta name="description" content="Sneaker Wars is a marketplace for salers and customers" />
                <meta name="og:title" property="og:title" content="Sneaker Wars MarketPlace"></meta>
                <meta name="twitter:card" content="Sneaker Wars"></meta>
                <link rel="canonical" href="https://novine-react.envytheme.com/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1590076309/ppuymfucr4jubqvhqaqt.jpg" />
            </Head>
            { children }
            <ToastContainer transition={Slide} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}
export default Layout;