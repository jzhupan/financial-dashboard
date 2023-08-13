import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import { useEffect, useState } from 'react';
import axios from 'axios';

// interface User {
//   id: number,
//   name: string,
// }
// JSON.stringify(import.meta.env.VITE_REACT_APP_USERS_URL)


// const SideBar = () => {
//      const [users, setUsers] = useState<User[]>([])
    
//      useEffect(() => {
//       axios.get<User[]>((import.meta.env.VITE_REACT_APP_USERS_URL))
//         .then((res) => {
          
//          setUsers(res.data)})
//         .catch((error) => {
//           if(error.response) {
//             console.log(error.response.data)
//           }
//         })
//      }, [])

//   return (
//     // <Container className="sidebar-container" fluid>
      
//     // </Container>
//     <ul>
//       {users.map(user => <li key={user.id}>{user.name}</li>)}
//     </ul>
//   );
// };

interface News {
    title: string,
    description: string,
    snippet: string,
    url: string,
    imageUrl: string,
    published_at: string,
    source: string,
    uuid: number
}

const NewsSection = () => {
    const [topNews, setTopNews] = useState<News[]>([])

    useEffect(() => {
        axios.get<News[]>((import.meta.env.VITE_REACT_APP_NEWS_SAMPLES))
        .then((res) => {
            setTopNews(res.data)
        })
    })

  return (
    <Container fluid className='news-container'>

        {/* <Row className='news-row'>
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
        </Row> */}
    </Container>
  )
}

export default NewsSection