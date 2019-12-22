import React, {Component} from 'react';
import styled from 'styled-components';
import {Carousel} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.css';
import './Slider.scss';

const CarouselWrapper = styled.div`
  max-width: 1200px;
  .carousel-control.left,
  .carousel-control.right {
    background: green;
  }
`;

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts')
            .then(response => response.json())
            .then(content => this.setState({ content: content }));
    }

    render() {
        const { content } = this.state;
        return (
            <div >
                <CarouselWrapper>
                    <Carousel d-block w-100 h-30 fade={true}  interval={1000}>
                        {/* eslint-disable-next-line array-callback-return */}
                        {content.map((content, index) => {
                            if(content.isActive){
                                return (
                                    <Carousel.Item key={index}>
                                        <a href={content.path}>
                                            <img
                                                d-block
                                                w-100
                                                h-30
                                                alt='900x500'
                                                src={content.photos[0]}
                                            />
                                        </a>
                                        <Carousel.Caption>
                                            <h1>{content.title}</h1>
                                            <p>{content.text}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )}
                        })}

                    </Carousel>
                </CarouselWrapper>
            </div>
        );
    }
}

export default Slider;