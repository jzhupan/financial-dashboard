import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import { useEffect, useState } from 'react';
import axios from 'axios';
// import TopNewsSample from '../assets/TopNewsSample.json'
// const ReportSamples = require('../assets/TopNewsSample.json')


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

interface TopNews {
    title: string,
    description: string,
    snippet: string,
    url: string,
    imageUrl: string,
    published_at: string,
    source: string,

}

const NewsSection = () => {
    const [topReports, setTopReports] = useState<TopNews[]>([])
    
     useEffect(() => {
        axios.get<TopNews[]>((import.meta.env.VITE_REACT_APP_NEWS_SAMPLES_URL))
            .then((res) => {
            console.log(res.data)
            setTopReports(res.data)})
        
     }, [])

  return (
    <Container className="sidebar-container" fluid>
      {/* {topReports.map(topReport => <Row>
        <Col key={topReport.uuid}><img src={topReport.imageUrl}/>{topReport.title}</Col>
        <Col key={topReport.uuid}>{topReport.snippet}</Col>
        <Col key={topReport.uuid}>{topReport.url} {topReport.source}</Col>
        <Col key={topReport.uuid}>{topReport.published_at}</Col>
      </Row>)} */}
      {topReports.map(topReport => <Row key={topReport.title}>
        <h1>{topReport.title}</h1>
        <img src={topReport.imageUrl} />
        <p>{topReport.snippet}</p>
        <p>{topReport.url}</p>
        <p>{topReport.published_at}</p>
      </Row>)}
    </Container>
  );
}

export default NewsSection