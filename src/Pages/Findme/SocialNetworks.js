import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Twitter } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';


export default function SocialNetworks() {
    return (
        <Container fluid>
            <h1>Redes sociales</h1>
            <Row className='m-3'>
                <Col>
                    <Button variant="outline-dark" href='https://twitter.com/sw_batallas'>
                        <Twitter />
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-dark" href='https://www.linkedin.com/in/stewartbatallas/'>
                        <Linkedin />
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-dark" href='https://www.instagram.com/sw_batallas/'>
                        <Instagram />
                    </Button>
                </Col>

                <Col>
                    <Button variant="outline-dark" href='mailto:stewartbatallasminda@gmail.com'>
                        <EnvelopeFill />
                    </Button>
                </Col>
                <Col>
                    <Button variant="outline-dark" href='https://github.com/swbatallas'>
                        <Github />
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}