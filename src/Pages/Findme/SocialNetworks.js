import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Twitter } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';



export default function SocialNetworks() {
    return (
        <Container fluid className='d-flex flex-column justify-content-center align-items-center'>
            <Row className='m-2'>
                <Col className='md-px-5'>
                    <Button variant="outline-dark" href='https://twitter.com/sw_batallas'>
                        <Twitter />
                    </Button>
                </Col>
                <Col className='px-2'>
                    <Button variant="outline-dark" href='https://www.linkedin.com/in/stewartbatallas/'>
                        <Linkedin />
                    </Button>
                </Col>
                <Col className='px-2'>
                    <Button variant="outline-dark" href='https://www.instagram.com/sw_batallas/'>
                        <Instagram />
                    </Button>
                </Col>
                <Col className='px-2'>
                    <Button variant="outline-dark" href='mailto:stewartbatallasminda@gmail.com'>
                        <EnvelopeFill />
                    </Button>
                </Col>
                <Col className='px-2'>
                    <Button variant="outline-dark" href='https://github.com/swbatallas'>
                        <Github />
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}