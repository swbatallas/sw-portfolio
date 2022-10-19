import React from 'react'
import './SocialNetworks.css'
import { Container, Button, Image } from 'react-bootstrap'


export default function SocialNetworks() {
    let nameOfNetworks = [
        { name: 'linkedin', url: 'https://linkedin.com/in/stewartbatallas/' },
        { name: 'github', url: 'https://github.com/swbatallas' },
        { name: 'twitter', url: 'https://twitter.com/sw_batallas' },
        { name: 'instagram', url: 'https://instagram.com/sw_batallas/' },
        { name: 'mail', url: 'mailto:stewartbatallasminda@gmail.com' }
    ]

    return (
        <Container fluid className='d-flex flex-row justify-content-center align-items-center mt-5' >
            {nameOfNetworks.map(network => (
                <a href={network.url} target="_blank" rel="noreferrer">
                    <Button className='buttons d-flex justify-content center align-items-center m-1'
                        variant='light'>
                        <Image className='m-1' role='img' src={`Media/${network.name}.svg`} alt={network.name} />
                    </Button>
                </a>
            ))}
        </Container>
    )
}