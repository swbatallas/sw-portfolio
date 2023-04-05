import { Container, Row, Image } from 'react-bootstrap'

export function SkillsComponent(props) {
    const tipo = props.tipo
    const array = props.array

    return <Container className='d-flex flex-column justify-content-center align-items-center my-2'>
        <h3>{tipo}</h3>
        <Row xs={1} md={2} lg={4} xl={6}>
            {array.map(Skill => (
                <Container className='badge my-1' key={Skill.name}>
                    <Image role='img' src={Skill.url} alt={Skill.name} className='raise' />
                </Container>
            ))}
        </Row>
    </Container>
}