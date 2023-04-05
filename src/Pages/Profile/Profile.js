import React, { useEffect, useState } from 'react'
import SocialNetworks from '../../Components/Findme/SocialNetworks';
import { Row, Col, Container, Image } from 'react-bootstrap'
import './Profile.css'
import { Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useHover } from '../../hooks/useHover';


export default function Profile() {
    const { t } = useTranslation();
    const [hoverRef, isHovering] = useHover();
    const [clearBackground, setClearBackground] = useState('whitesmoke')
    const [opacity, setOpacity] = useState(0)

/*     useEffect(() =>
        isHovering ?
            (setClearBackground('#212529'), setOpacity(1), document.body.classList.add('stop-scrolling'))
            :
            (setClearBackground('whitesmoke'), setOpacity(0), document.body.classList.remove('stop-scrolling'))
        , [isHovering]) */

    return (
        <Container
            className='presentation min-vh-100 d-flex justify-content-center align-items-center'
            style={{ backgroundColor: clearBackground }}
            fluid>
            <h1 className='hover-text text-uppercase' style={{ opacity: opacity }}>Full Stack developer in progress</h1>
            <h1 className='title text-uppercase text-center mb-5'>
                Stewart Batallas
            </h1>
            <Container className='description'>
                <Row className=' d-flex mt-3'>
                    <Col
                        xs={12} md={7}
                        className='profile-photo d-flex justify-content-center align-items-center'>
                        <Image
                            role='img'
                            src='Media/stw-color.jpg'
                            alt={t('profile-photo')}
                            className='zoom'
                            rounded ref={hoverRef} />
                    </Col>
                    <Col xs={12} md={5}
                        className='d-flex flex-column justify-content-center align-items-center'>
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