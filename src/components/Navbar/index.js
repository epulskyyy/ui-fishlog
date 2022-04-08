import React from "react";
import { Navbar, Button } from "react-bootstrap";
import FishLogLogo from "../../images/fishlog.svg"
import FlStatus from "../Status";

function BaseNavbar() {
  return (
    <Navbar className="px-4 py-3 border border-1 fl_navbar">
      <a href="#asd" className="text-dark ic-menu"> <i className="bx bx-menu bx-big"/></a>
      <Navbar.Brand href="#home" className="ms-4" ><img src={FishLogLogo} alt="fishlog" /></Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Button variant="outline-primary" className="me-4">Bantuan</Button>
      <FlStatus variant="light-success" size="big-bold" >FishLog</FlStatus>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default BaseNavbar;
