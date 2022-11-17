import React from 'react'
import SocialNetworks from '../../Components/Findme/SocialNetworks';
import { Row, Col, Container, Image } from 'react-bootstrap'
import './Profile.css'
import { Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export default function Profile() {
    const { t } = useTranslation();

    return (
        <Container className='presentation'>
            <Container fluid className='title d-flex justify-content-center align-items-center'>
                <h1>Stewart Batallas</h1>
            </Container>
            <Container className='description'>
                <Row className=' d-flex mt-3'>
                    <Col xs={12} md={7} className='profile-photo d-flex justify-content-center align-items-center'>
                        <Image role='img' rounded src='Media/stw.png' alt={t('profile-photo')} />
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center' xs={12} md={5}>
                        <p className='text-muted'>
                            {t('description')}
                        </p>
                        <SocialNetworks />
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </Container>
    )
}