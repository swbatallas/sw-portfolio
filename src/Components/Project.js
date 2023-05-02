import { Row, Col, Container, Image } from "react-bootstrap"
export default function Project(props) {

    const proyecto = props.proyect

    return <>
        <h2 className="text-center mt-5">{proyecto.title}</h2>
        <h5 className="text-center mx-2">{proyecto.description}</h5>
        <Container fluid>
            <Row>
                {Object.entries(proyecto.caracteristicas).map((caracteristica) => {
                    return <Col className="col-project">
                        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                            <Image src={`/Media/${caracteristica[1].img}`} className="project-image" alt="imagen de project 0" rounded />
                            <h1 className="mt-4">{caracteristica[0]}</h1>
                            <p className="text-center mx-3">{caracteristica[1].description}</p>
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    </>
}