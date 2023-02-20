import React from 'react'
import './SocialNetworks.css'
import { Container, Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'


export default function SocialNetworks() {
    let nameOfNetworks = [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/stewartbatallas/' },
        { name: 'Github', url: 'https://github.com/swbatallas' },
        { name: 'Twitter', url: 'https://twitter.com/sw_batallas' },
        { name: 'Instagram', url: 'https://instagram.com/sw_batallas/' },
        { name: 'Mail', url: 'mailto:stewartbatallasminda@gmail.com' },
        { name: 'CV', url: 'stewart-cv-2002.pdf' }
    ]

    return (
        <Container className='d-flex flex-row justify-content-center align-items-center my-4' >
            {nameOfNetworks.map(network => (
                <OverlayTrigger delay={{ hide: 350, show: 250 }} overlay={(props) => (
                    <Tooltip {...props}>
                        {network.name}
                    </Tooltip>
                )}
                    placement="top">
                    <a href={network.url} target="_blank" rel="noreferrer" key={network.name}>
                        <Button className='buttons d-flex justify-content center align-items-center'
                            variant='light'>
                            <Image role='img' src={`Media/${network.name.toLowerCase()}.svg`} alt={network.name} />
                        </Button>
                    </a>

                </OverlayTrigger>
            ))}
        </Container>
    )
}