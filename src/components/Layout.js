import React from "react";
import { Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import BaseNavbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="fl_layout">
      <BaseNavbar />
      <Row>
        <Col xl={2} lg={3} md={4} >
          <Menu />
        </Col>
        <Col xl={10} lg={9} md={8}>
          <div>{children}</div>
        </Col>
      </Row>
    </div>
  );
}

export default Layout;
