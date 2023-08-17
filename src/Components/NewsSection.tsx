import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface TopNews {
  image: string,
  publishedDate: string,
  site: string,
  text: string,
  symbol: string,
  ticker: string,
  title: string,
  url: string
}

const NewsSection = () => {
  const [topReports, setTopReports] = useState<TopNews[]>([])
  const [error, SetError] = useState('')

  useEffect(() => {
    axios.get<TopNews[]>((import.meta.env.VITE_REACT_APP_STOCK_NEWS_URL))
      .then((res) => {
        const resultsData = res.data.slice(0, 10)
        //console.log(resultsData)
        setTopReports(resultsData)
      })
      .catch(err => SetError(err.message))
  }, [])


  return (
    <Container className="news-container" fluid>
      <h2>Stock News</h2>
      {error && <p className='text-danger'>{error}</p>}
      {topReports.map(topReport => 
        <Row key={topReport.ticker} className='news-section'>

        <Col>
          <img className='image-news' src={topReport.image} alt="article-image" />
        </Col>
        <Col className='news-text-box'>
        <h3>{topReport.title} </h3>

        <h6>Published: {topReport.publishedDate}</h6>
        <br />
        <p className='content-paragraph'>"{topReport.text}"</p>
        <br />
        <h6>Source: {topReport.site}</h6>
        <a href={`${topReport.url}`} target="_blank">Click to see full article...</a></Col>
      </Row>)}
    </Container>
  );
}

export default NewsSection