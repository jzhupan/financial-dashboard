import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import { useEffect, useState } from 'react';
import axios from 'axios';

// };

interface TopNews {
    title: string,
    description: string,
    snippet: string,
    url: string,
    imageUrl: string,
    published_at: string,
    source: string,
    data: any,
}

const NewsSection = () => {
    const [topReports, setTopReports] = useState<TopNews[]>([])
    const [error, SetError] = useState('')

     useEffect(() => {
        axios.get<TopNews[]>(('../assets/TopTenNews.json'))
            .then((res) => {
            const resultsData = res.data.data
            setTopReports(resultsData)})
            .catch(err => SetError(err.message))
     }, [])

  return (
    <Container className="sidebar-container" fluid>
    {error && <p className='text-danger'>{error}</p>}

      {topReports.map(topReport => <Row key={topReport.title}>
        <Col><h3>{topReport.title}</h3></Col>
        <img className='image-news' src={topReport.imageUrl} alt="article-image" />
        <p>{topReport.snippet}</p>
        <a href={`${topReport.url}`}>Click to read more...</a>
        <p>{topReport.published_at}</p>
      </Row>)}
    </Container>
  );
}

export default NewsSection