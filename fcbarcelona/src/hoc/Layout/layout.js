import React, { Component } from 'react';
import './layout.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import ControlledCarousel from '../../components/Carousel/carousel';


class Layout extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <Header/>
                <br></br>
                <ControlledCarousel/>
                <br></br>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;