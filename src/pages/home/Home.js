import React from 'react';
import About from '../../components/about/About';
import Capabilities from '../../components/capabilities/Capabilities';
import Clients from '../../components/clients/Clients';
import Hero from '../../components/hero/Hero';
import Portfolio from '../../components/portfolio/Portfolio';
import Form from '../../components/form/Form';
import Footer from "../../components/footer/Footer"

const Home = () => {
    return (
        <>
        <Hero/>
        <About/>
        <Portfolio/>
        <Capabilities/>
        <Clients/>
        <Form/>
        <Footer/>
        </>
    )
}

export default Home
