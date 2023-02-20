import React, { useRef } from 'react'
import { Container, Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import './Projects.css'
import { useTranslation } from 'react-i18next';


function Projects() {
  const { t } = useTranslation();
  const projectsRef = useRef(null)

/*   useLayoutEffect(() => {
    if (projectsRef) {
      setTimeout(() => { projectsRef.current.scrollIntoView() }, 300)
    }
  }, [projectsRef]) */

  const fragenTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Próximamente disponible
    </Tooltip>
  );

  return (
      <Container ref={projectsRef} className='projects mt-5'>
        <h1 className='my-5'>{t('projectstitle')}</h1>
        <Card className='card-project'>
          <Card.Header className='d-flex flex-column'>
            <Card.Img variant='top' src='Media/trivial.png' alt={t('trivial-image')} />
            <Card.Title className='mt-2'>
              FRAGEN
            </Card.Title>
          </Card.Header>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <Card.Text className='text-center'>
              {t('trivial-description')}
            </Card.Text>
            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={fragenTooltip}>
              <Button variant='info'>
                Fragen
              </Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      </Container>
  )
}

export default Projects