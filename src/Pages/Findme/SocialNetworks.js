import React from 'react'
import './SocialNetworks.css'
import { Container, Button, Image } from 'react-bootstrap'


export default function SocialNetworks() {
    let nameOfNetworks = ['linkedin', 'github', 'mail', 'twitter', 'instagram']
    console.log(nameOfNetworks)


    return (
        <Container fluid className='d-flex flex-row justify-content-center align-items-center' >
            {nameOfNetworks.map((network) => (
                <Button className='buttons d-flex justify-content center align-items-center m-1' variant='light'>
                    <Image className='m-1' role='img' src={`Media/${network}.svg`} alt={network} />
                </Button>
            ))}
        </Container>
    )
}