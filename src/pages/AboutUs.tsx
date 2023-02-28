import React from 'react'
import styled from 'styled-components'

const AboutUsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 70vh;
    font-family:sans-serif;
    margin-top:;
    `;
  

    const AboutUs: React.FunctionComponent = () => {
      return (
             
          <div className="container border border-dark">
          <AboutUsText>Popularly known as the Hare Krishna Movement, ISKCON is a worldwide confederation of more than 600 temples and centers, 110 vegetarian restaurants, and a wide variety of community projects. ISKCON belongs to the Gaudiya-Vaishnava sampradaya, or denomination, a monotheistic tradition within the broad Vedic, or Hindu culture.

          Based on the Bhagavad-Gita, ISKCON traces its spiritual lineage directly to the speaker of this sacred book, Lord Krishna, who is revered as the Supreme Personality of Godhead. The text teaches that the goal of life is to develop love of God, or Krishna, realized through the practice of bhakti-yoga, the science of devotional service. In the latter part of the 15th century, Sri Chaitanya Mahaprabhu revitalized the bhakti-yoga tradition by introducing an expansive spiritual movement that swept India. Central to this renaissance was the emphasis on chanting of Krishna’s name. Underlying this simple practice was a profound, rational, and intellectually comprehensive theology.
          
          This nonsectarian, monotheistic movement’s mission is to advance the well being of society by promoting the spiritual science of Krishna consciousness.</AboutUsText>
          </div>

      )
  }

export default AboutUs
