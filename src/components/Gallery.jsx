import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import ModalImage from 'react-modal-image';

const buildURL = (imagePath) => `./assets/${imagePath}.jpg`;

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
)

class Gallery extends Component {
  state = {
    images: [ 
     {id: 1, title: "gal1"},
     {id: 2, title: "gal2"},
     {id: 3, title: "gal3"},
     {id: 4, title: "gal4"},
     {id: 5, title: "gal5"},
     {id: 6, title: "gal6"},
     {id: 7, title: "gal7"},
     {id: 27, title: "gal27"},
     {id: 9, title: "gal9"},
     {id: 10, title: "gal10"},
     {id: 11, title: "gal11"},
     {id: 13, title: "gal13"},
     {id: 14, title: "gal14"},
     {id: 15, title: "gal15"},
     {id: 12, title: "gal12"},
     {id: 16, title: "gal16"},
     {id: 17, title: "gal17"},
     {id: 18, title: "gal18"},
     {id: 21, title: "gal21"},
     {id: 22, title: "gal22"},
     {id: 25, title: "gal25"},
     {id: 8, title: "gal8"},
     {id: 28, title: "gal28"},
     {id: 29, title: "gal29"},
     {id: 30, title: "gal30"},

     ]
   };

  render () {
    const { images } = this.state;
    return (
    <div className="gallery">
        <div className="image-container">
            <LazyLoad placeholder={<Loading />}>
              {images.map(image => 
                <div key={image.id} className='image-list'>
                    <ModalImage small={buildURL(image.title)} large={buildURL(image.title)} alt={image.title}/>
                </div>)}
            </LazyLoad>
        </div>
    </div>
    )
    };
}

export default Gallery;
