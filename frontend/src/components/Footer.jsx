import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={footerStyles}>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p style={textStyles}>
                            COMICSWORLD &copy; {currentYear}
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

const footerStyles = {
    backgroundColor: 'black',
    color: '#ffffff', 
    padding: '20px 0', 
    borderTop: '3px solid #f3e4b2', 
};

const textStyles = {
    fontSize: '1rem',
    fontWeight: 'bold', 
    margin: 0,
    textTransform: 'uppercase', 
    letterSpacing: '1px',
};

export default Footer;
