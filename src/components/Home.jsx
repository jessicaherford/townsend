import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const buildURL = (imagePath) => `./assets/${imagePath}.png`;

class Home extends Component {
    state = {
      images: [ 
        {id: 17, title: "gal17"},
        {id: 2, title: "gal2"},
        {id: 21, title: "gal21"},
        {id: 26, title: "gal26"},
        {id: 1, title: "gal1"}
      ]
    }

  render() {
    const { images } = this.state;

    return ( 
    <div className="Home">
      <div className="">
        <Carousel autoPlay infiniteLoop stopOnHover={false} interval='10000' transitionTime='550'>
           {
              images.map(image => <div key={image.id} ><img src={buildURL(image.title)} alt={image.title}></img></div>)
            }
        </Carousel>
        <div className="statement container">
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
            explore complex forms and develop as an artist. 
          </p>
          <p>
            I continued my education at Capellagarden in Sweden, a school with a long history
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
