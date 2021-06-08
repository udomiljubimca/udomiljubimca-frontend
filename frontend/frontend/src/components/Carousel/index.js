import React from "react"
import Carousel, { arrowsPlugin, slidesToShowPlugin   } from "@brainhubeu/react-carousel"
import Icon from "react-fa"
import "./style.scss"
import '@brainhubeu/react-carousel/lib/style.css'

export const GalleryCarousel = () => {

    return (
        <>
        <div className="galerija">
        <Carousel
        plugins={[
    'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 4
      }
    },
  ]}        >

        <img src="/" />
        <img src="/" />
        <img src="/" />
        <img src="/" />
        <img src="/" />
        <img src="/" />
        <img src="/" />
        <img src="/" />
        </Carousel>
</div>
        </>
    )
}