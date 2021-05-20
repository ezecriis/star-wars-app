import { Spinner, Col, Row } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center mt-5' style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <Spinner
                        className='spinner-border  spinner-border-lg'
                        role='status'
                        style={{ height: '5vh', width: '5vh' }}
                        variant="info"
                    >
                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='loader-personaje mx-3'> Cargando personajes SW </div>
                </Col>
            </Row>
        </div>
    )
}

export default Loader;
