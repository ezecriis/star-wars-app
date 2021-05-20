import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';

// Components
import Loader from '../components/Loader';

const PeoplePage = ({ match }) => {
    
    const [peopleDetail, setPeopleDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPeopleData = async () => {

        const id = match.params.id;
        // console.log(`Id Param: ${id}`);
   
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        if (res && res.data) {
            console.log(res.data);
            setPeopleDetail(res.data);
        } else {
            setPeopleDetail(null);
        }
        setLoading(false);
    }

    useEffect(() => {
        getPeopleData();
    }, [])

    return (
        <>
        {loading ? (
            <Loader/>
        ) : (
            peopleDetail
            ?
            (
                <Container>
                <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Card.Body className={`rounded text-black`}>
                                <Card.Title as='div'>
                                    <strong>{peopleDetail.name}</strong>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row> 
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Card.Body>
                                <Card.Text>
                                    Height: {peopleDetail.height}
                                </Card.Text>
                                <Card.Text>
                                    Mass: {peopleDetail.mass}
                                </Card.Text>
                                <Card.Text>
                                    Hair Color: {peopleDetail.hair_color}
                                </Card.Text>
                                <Card.Text>
                                    Skin Color: {peopleDetail.skin_color}
                                </Card.Text>
                                <Card.Text>
                                    Eye Color: {peopleDetail.eye_color}
                                </Card.Text>
                                <Card.Text>
                                    Birth Year: {peopleDetail.birth_year}
                                </Card.Text>
                                <Card.Text>
                                    Created: {peopleDetail.created}
                                </Card.Text>
                                <Card.Text>
                                    Edited: {peopleDetail.edited}
                                </Card.Text>
                                <Card.Text>
                                    URL: {peopleDetail.url}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            )
            :
            <h1>People Detail Requested Not Found Page</h1>
        )
        }
        </>
    );
}

export default PeoplePage;
