import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                    style={{ minHeight: "70vh" }}
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/9a/71/6f/9a716f90fc2e24079b8960168d5ea089.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ minHeight: "70vh" }}
                    className="d-block w-100"
                    src="https://www.freewebheaders.com/wp-content/gallery/fashion-headers/women-fashion-and-accessories-website-header.jpg"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ minHeight: "70vh" }}
                    className="d-block w-100"
                    src="http://4.bp.blogspot.com/-F_s6OrSdWkU/UyfPbNye9jI/AAAAAAAABUY/wSr1MwJQMzs/s1600/Vancouver+Fashion+Week+header.PNG"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;