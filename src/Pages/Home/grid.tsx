import { Col, Container, Row } from "react-bootstrap";
import { tileData } from "./constant";
interface TileData {
  img: string;
  title: string;
  author: string;
}

export const Grid: React.FC = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {tileData.map((tile: TileData, index: number) => (
          <Col key={index}>
            <div className="card">
              <img src={tile.img} className="card-img-top" alt={tile.title} />
              <div className="card-body">
                <h5 className="card-title">{tile.title}</h5>
                <p className="card-text">by {tile.author}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
