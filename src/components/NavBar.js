import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { PlayBtn } from "react-bootstrap-icons";


import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { CartWidget } from "./CartWidget";




export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <PlayBtn size={30} color="royalblue" />
          </Navbar.Brand>

          {/* <ItemListContainer/> */}
          <ItemListContainer/>
          <div className="danger">hola</div>

          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
};