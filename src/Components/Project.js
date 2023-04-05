import { Container } from "react-bootstrap"
export default function Project(props) {

    const { proyecto } = props.proyecto

    return <Container className='d-flex justify-content-center align-items-center my-3'>
        <img src={`/Media/${proyecto.img}.png`} className='project-image' alt={`Imagen de ${proyecto}`} />
        <Container>
            <h2 className='text-center'>{proyecto.title}</h2>
            <p className='text-center'>{proyecto.description}</p>
        </Container>
    </Container>

}
