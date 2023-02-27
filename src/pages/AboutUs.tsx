import React from 'react'
import styled from 'styled-components'

const AboutUsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    height: 70vh;
    `;

const AboutUs = () => {
  return (
    <AboutUsText>ISKCON is a Hindu religious organization that was founded in 1966 in New York City. 
    It is based on the teachings of the ancient Hindu scriptures, the Bhagavad Gita and the Srimad Bhagavatam, 
    and focuses on the worship of Lord Krishna. 
    The organization has a worldwide presence and operates temples, cultural centers, and educational institutions.</AboutUsText>
  )
}

export default AboutUs
