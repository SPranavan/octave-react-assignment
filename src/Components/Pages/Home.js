import homepageimage from '../Images/home.png';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/shawarma1.jpg';
import image2 from '../Images/shawarma2.jpg';
import image3 from '../Images/shawarma3.jpg';

const Home = () => {
    return (
        <div>
            <div className="mt-4 me-5 ms-1">

            <Carousel fade style={{ width: "100%" }}>
                <Carousel.Item>
                    <img src={image1} style={{ width: "100%" }} alt="First slide" className="homepage-image" />
                    <Carousel.Caption>
                        <div className="text-left text-lg-center mt-4">
                            <h4>Discover the Flavor of Chicken Shawarma</h4>
                            <button className="btn app-btn-2 btn-lg mt-2">Order Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image2} style={{ width: "100%" }} alt="Second slide" className="homepage-image" />
                    <Carousel.Caption>
                        <div className="text-left text-lg-center mt-4">
                            <h4>Discover the Flavor of Shawarma Rice</h4>
                            <button className="btn app-btn-2 btn-lg mt-2">Order Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image3} style={{ width: "100%" }} alt="Third slide" className="homepage-image" />
                    <Carousel.Caption>
                        <div className="text-left text-lg-center mt-4">
                            <h4>Discover the Flavor of Shawarma Gravy</h4>
                            <button className="btn app-btn-2 btn-lg mt-2">Order Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
            </div>
        </div>
    )
}

export default Home;