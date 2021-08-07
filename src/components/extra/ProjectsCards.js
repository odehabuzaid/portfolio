import React from 'react';

import { Button, Card, CardBody, Col } from 'reactstrap';
import Aos from 'aos';
import projectsData from 'assets/data/projects.json';
import ToolsBadge from './ToolsBadge';
class ProjectsCards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Aos.init({
      duration : 2000
    });
  }
  render() {
    return (
      <>
        {projectsData.map((element,index) => (
          <Col  
          key={index}
          data-aos='slide-up'
          data-aos-offset='250'
          lg='4'
          className='mb-3'>
            <Card className='card-lift--hover shadow border-0'>
              {/* <Card.Img  variant='top' src={element.imgSrc} alt={element.projectTitle}  /> */}
              <img
                src={element.imgSrc}
                alt={element.projectTitle}
                style={{objectFit:'contain' }}
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
                  id=''
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
                  id=''
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
