import { Container, Image } from 'react-bootstrap'

export function SkillsComponent(props) {
    const tipo = props.tipo
    const array = props.array

    return <Container className='my-2'>
        <h2>{tipo}</h2>
        {array.map(Skill => (
            <div className='badge' key={Skill.name}>
                <Image role='img' src={Skill.url} alt={Skill.name} className='raise' />
            </div>
        ))}
    </Container>
}