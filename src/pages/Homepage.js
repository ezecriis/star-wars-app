import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';

const Homepage = () => {

    const [peopleData, setPeopleData] = useState([]);
    const [loading, setLoading] = useState(true)

    const getPeopleData = async () => {
    
        let peopleArray = [];
        const res = await axios.get(`https://swapi.dev/api/people/`);
        if (res && res.data && res.data.results) {
            res.data.results.forEach(people => {
                peopleArray.push(people);
            });
        }
        setPeopleData(peopleArray);
        setLoading(false);
    }

    useEffect(() => {
        getPeopleData();
    }, [])

    const peopleCards = peopleData.map(people => {

        const peopleUrlSplitted = people.url.split('/');
        const peopleId = peopleUrlSplitted[(5)];
        const peopleLocalUrl = `/people/${peopleId}` ;

        return (
            <Col key={people.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-red rounded' style={{ border: 'none' }}>
                    <Card.Body className={`${""} rounded text-red`}>
                        <Link to={peopleLocalUrl} className='link-name'>
                            <Card.Title as='div'>
                                <strong>{people.name}</strong>
                            </Card.Title>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        );
    })

    return (
        <>
        {loading ? (
            <Loader/>
        ) : (
            <Container> 
                <Row>
                    {peopleCards}
                </Row>
            </Container>
        )}
        </>
    )
}

export default Homepage;
