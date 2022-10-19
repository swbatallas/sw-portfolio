import React from 'react'
import './SocialNetworks.css'
import { Container, Button, Image } from 'react-bootstrap'


export default function SocialNetworks() {
    let nameOfNetworks = ['linkedin', 'github', 'mail', 'twitter', 'instagram']
    console.log(nameOfNetworks)


    return (
        <Container fluid>
            {nameOfNetworks.map((network) => (
                <Button variant='dark'>
                    <Image role='img' src={`Media/${network}.svg`} alt={network} />
                </Button>
            ))}
        </Container>
    )
}