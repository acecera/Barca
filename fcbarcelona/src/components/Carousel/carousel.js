import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel 
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img 
                      className="d-block w-100"
                      src="holder.js/800x400?text=First Slide&bg=373940"
                      alt="First Slide"
                    />
                    <Carousel.Caption>
                      <h3>First Slide Label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second Slide&bg=282c34"
                      alt="Second Slide"
                    />
                    <Carousel.Caption>
                      <h3>Second Slide Label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third Slide&bg=373940"
                      alt="Third Slide"
                    />
                    <Carousel.Caption>
                      <h3>Third Slide Label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ControlledCarousel;