
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
       
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
      
            <NavItem>
            <div className="copyright text-center text-xl-left text-muted">
               Powered By
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.creative-tim.com?ref=adr-auth-footer"
                  target="_blank"
                >
                  GunMA
                </a>
              </div>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
