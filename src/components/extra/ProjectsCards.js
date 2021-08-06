import React from 'react';

import { Button, Card, CardBody, Col } from 'reactstrap';

import projectsData from 'assets/data/projects.json';
import ToolsBadge from './ToolsBadge';
class ProjectsCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {projectsData.map((element) => (
          <Col lg='4' className='mb-3'>
            <Card className='card-lift--hover shadow border-0'>
              {/* <Card.Img  variant='top' src={element.imgSrc} alt={element.projectTitle}  /> */}
              <img
                src={element.imgSrc}
                alt={element.projectTitle}
                style={{ minWidth: '100%' }}
              />
              <CardBody className='py-5'>
                <h6 className='text-primary text-uppercase'>
                  {element.projectTitle}
                </h6>
                <p className='description mt-3'>
                  {element.projectDescription}{' '}
                </p>
                <div>
                  <ToolsBadge tools={element.tools} />
                </div>
                <Button
                  className='mt-4 btn-primary'
                  href={element.LiveVersionLink}
                  color='facebook'
                  id='tooltip829810202'
                  target='_blank'
                >
                  <span className='btn-inner--icon'>
                    Preview <i className='fa fa-globe'> </i>
                  </span>
                </Button>
                <Button
                  className='mt-4 btn-primary'
                  color='github'
                  href={element.gitHubLink}
                  id='tooltip495507257'
                  target='_blank'
                >
                  <span className='btn-inner--icon'>
                    GitHub <i className='fa fa-github'> </i>
                  </span>
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

export default ProjectsCards;
