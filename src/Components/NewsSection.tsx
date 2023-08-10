import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";


const NewsSection = () => {
  return (
    <Container fluid className='news-container'>
        <Row className='news-row'>
            <h1>News</h1>
        </Row>
        <Row className='news-row'>
            <Col className='news-col'>
                <img src="https://via.placeholder.com/200/3D1D73/0000FF" />
            </Col>
            <Col className='news-col'>
                <h1>News title</h1>
                <p>This is where the paragraph news</p>
                <span>Date</span>

            </Col>
        </Row>
        <Row className='news-row'>
            <Col className='news-col'>
                <img src="https://via.placeholder.com/200/3D1D73/0000FF" />
            </Col>
            <Col className='news-col'>
                <h1>News title</h1>
                <p>This is where the paragraph news</p>
                <span>Date</span>

            </Col>
        </Row>
        <Row className='news-row'>
            <Col className='news-col'>
                <img src="https://via.placeholder.com/200/3D1D73/0000FF" />
            </Col>
            <Col className='news-col'>
                <h1>News title</h1>
                <p>This is where the paragraph news</p>
                <span>Date</span>
            </Col>
        </Row>
    </Container>
  )
}

export default NewsSection