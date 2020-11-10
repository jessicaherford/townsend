import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const buildURL = (imagePath) => `./assets/${imagePath}.jpg`;

class Home extends Component {
    state = {
      images: [ 
        {id: 1, title: "gal1"},
        {id: 2, title: "gal2"},
        {id: 3, title: "gal3"},
        {id: 4, title: "gal4"},
        {id: 8, title: "gal8"},
        {id: 9, title: "gal9"},
        {id: 10, title: "gal10"},
        {id: 11, title: "gal11"},
        {id: 12, title: "gal12"},
        {id: 13, title: "gal13"},
        {id: 14, title: "gal14"},
        {id: 15, title: "gal15"},
        {id: 16, title: "gal16"},
        {id: 17, title: "gal17"},
        {id: 18, title: "gal18"},
        {id: 21, title: "gal21"},
        {id: 22, title: "gal22"},
        {id: 24, title: "gal24"},
        {id: 25, title: "gal25"}      
      ]
  }

  render() {
    const { images } = this.state;

    return ( 
    <div className="Home">
      <div className="container">
        <Carousel autoPlay infiniteLoop>
           {
              images.map(image => <div key={image.id} ><img src={buildURL(image.title)} alt={image.title}></img></div>)
            }
        </Carousel>
        <div className="col-12 statement">
          <h1>Artist's Statement</h1>
          <p>
            Creating one of a kind furniture represents a unique blending of the
            beauty, elegance, and materials of the natural world with the
            creative spirit of one's imagination.
          </p>
          <p>
            I studied furniture making at the College of the Redwoods in
            northern California, a program renowned for its excellence in
            craftsmanship and attention to detail. There I developed an
            extensive background in traditional cabinetmaking techniques and
            hand skills. The focused environment became the setting for me to
            explore complex forms and develop as an artist. I continued my
            education at Capellagarden in Sweden, a school with a long history
            in design and detailed craftsmanship. There I further developed my
            sense of materials, form, and composition.
          </p> 
          <p>
            My inspiration comes from
            nature, Asian Arts, and work of some of the great designers/ makers
            of the past, like Jacques-Emile Ruhlman and Edward Barnsley.
          </p>
          <p>
            My current work is influenced by the Art Deco style, and I enjoy its
            refined form and technical nature. I enjoy the challenge of complex
            design; the uncertainty that goes along with this type of work and
            how completely involved I have to be. My goal is to create works
            that are enduring, aesthetically pleasing, and made to the highest
            level of my ability. -Kent Townsend
          </p>
        </div>
      </div>
  </div>
  )}
}

export default Home;
