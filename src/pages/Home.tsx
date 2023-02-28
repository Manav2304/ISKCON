import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import styled from 'styled-components'
const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
    margin: 500px;

`

const Home: React.FunctionComponent = () => {
  return (
    <>
      <HomeText>
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://w0.peakpx.com/wallpaper/681/177/HD-wallpaper-krishna-god-god-krishna-lord-lord-krishna-shree-krishna.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>JAY SHREE KRISHNA</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://w0.peakpx.com/wallpaper/153/84/HD-wallpaper-krishna-arjun-god-govind-kanha-lord-lord-krishna-mahabharat-shree-krishna-shri-krishna.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://w0.peakpx.com/wallpaper/732/841/HD-wallpaper-krishna-god-lord-krishna-mahabharat-narayan-narayana-shri-rama-vasudeva.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </HomeText>
    </>
  );
}

export default Home;