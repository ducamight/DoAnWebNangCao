import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import { Row, Col, Card, Image } from 'react-bootstrap';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Row className="mb-4">
      <h1>🔥 BESTSLLER 🔥</h1>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={4} lg={4} className="mb-3">
          <Card>
            <Link to={`/product/${product._id}`}>
              <Image
                src={product.image}
                alt={product.name}
                fluid
                className="card-img-top"
              />
            </Link>
            <Card.Body>
              <Card.Title className="text-center">{product.name}</Card.Title>
              <Card.Text className="text-center">
                ${product.price.toFixed(2)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ProductCarousel;