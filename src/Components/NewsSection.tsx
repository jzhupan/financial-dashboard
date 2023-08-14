import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import { useEffect, useState } from 'react';
import axios from 'axios';

// };

interface TopNews {
    title: string,
    date: string,
    content: any,
    link: string,
    image: string,
    author: string,
    site: string,
}

const NewsSection = () => {
    const [topReports, setTopReports] = useState<TopNews[]>([])
    const [error, SetError] = useState('')

     useEffect(() => {
        axios.get<TopNews[]>((import.meta.env.VITE_REACT_APP_FMP_ARTICLES))
            .then((res) => {
            const resultsData = res.data.content
            //console.log(resultsData)
            setTopReports(resultsData)
        })
            .catch(err => SetError(err.message))
     }, [])

  return (
    <Container className="sidebar-container" fluid>
    {error && <p className='text-danger'>{error}</p>}
      {topReports.map(topReport => <Row key={topReport.title} className='news-section'>
        <Col>
        <h3>{topReport.title} </h3>
        <h6>{topReport.date}</h6>
        </Col>
        <img className='image-news' src={topReport.image} alt="article-image" />
        <p className='content-paragraph'>{topReport.content}</p>
        <h6>Author:{topReport.author}</h6>
        <h6>Source:{topReport.site}</h6>
        <a href={`${topReport.link}`} target="_blank">Click to see full article...</a>
      </Row>)}
    </Container>
  );
}

export default NewsSection