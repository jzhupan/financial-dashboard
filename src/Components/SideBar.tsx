import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";


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

//const myUrl = (import.meta.env.VITE_REACT_APP_BASE_URL)

 interface Gainer {
  symbol: string,
  id: number,
  changesPercentage: number,
  price: number
}


const SideBar = () => {
     const [mostGainers, setMostGainers] = useState<Gainer[]>([])
    
     useEffect(() => {
      axios.get<Gainer[]>((import.meta.env.VITE_REACT_APP_BASE_URL))
        .then((res) => {
          setMostGainers(res.data.slice(0,10))})
     }, [])

  return (
    <Container className="sidebar-container" fluid>
      {mostGainers.map(mostGainer => 
      <Row>
        <Col><h6>{mostGainer.symbol}</h6></Col>
        <Col><h6>{mostGainer.changesPercentage.toFixed(2)}%</h6></Col>
        <Col><h6>${mostGainer.price}</h6></Col>
      </Row>)}
    </Container>

  );
};


export default SideBar;
