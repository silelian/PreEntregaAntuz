import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../../containers/cartWidget";
import style from "./style.module.css";
import icono from "../../assets/img/icono.ico";

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className={style["navBarEstilo"]} fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div className={style["navPrincipal"]}>
                            <img
                                src={icono}
                                alt="Icono"
                                className={style["navIcono"]}
                            />
                            <h1 className={style["navh1"]}>Marroquinería</h1>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 m-5"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link
                                className={style["nav-item"]}
                                href="#action1"
                            >
                                Inicio
                            </Nav.Link>
                            <Nav.Link
                                className={style["nav-item"]}
                                href="#action2"
                            >
                                Nosotros
                            </Nav.Link>
                            <NavDropdown
                                className={style["nav-item"]}
                                title="Producto"
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action3">
                                    Carteras
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Mochilas
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Producto
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link> */}
                        </Nav>

                        <CartWidget />

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="" className={style["navBuscar"]}>Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default NavBar;
