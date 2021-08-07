import React from 'react';

// reactstrap components
import { Button, Card, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
/*import GitHubSearch from "components/extra/GitHubSearch";*/
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import profile from 'assets/img/theme/profilePic.jpg';
import ScrollButton from 'components/extra/ScrollButton';
class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
   calculateMyAge = (dateOfBirth) => { 
    let diff = Date.now() - dateOfBirth.getTime();
    let age = new Date(diff); 
  
    return Math.abs(age.getUTCFullYear() - 1970);
}


  render() {
    return (
      <>
        <MainNavbar />
        <main className='profile-page' ref='main'>
          <ScrollButton></ScrollButton>
          <section className='section-profile-cover section-shaped pb-250'>
            {/* Circles background */}
            <div className='shape shape-style-1 shape-default alpha-4'>
              <span className='span-150' />
              <span className='span-50' />
              <span className='span-50' />
              <span className='span-75' />
              <span className='span-100' />
              <span className='span-75' />
              <span className='span-50' />
              <span className='span-100' />
              <span className='span-50' />
              <span className='span-100' />
            </div>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
          <section className='section'>
            <Container>
              <Card className='card-profile shadow mt--300'>
                <div className='px-4'>
                  <Row className='justify-content-center'>
                    <Col className='order-lg-2' lg='3'>
                      <div className='card-profile-image'>
                        <a href='#pablo' onClick={(e) => e.preventDefault()}>
                          <img
                            alt='...'
                            className='rounded-circle'
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className='order-lg-3 text-lg-right align-self-lg-center'
                      lg='4'
                    >
                      <div className='card-profile-actions py-4 mt-lg-0'>
                        <Button
                          className='mr-4'
                          color='info'
                          size='sm'
                          href='https://github.com/odehabuzaid'
                          target='_blank'
                        >
                          Connect
                        </Button>
                        <Button
                          className='float-right'
                          color='default'
                          size='sm'
                          to='/contact-page'
                          tag={Link}
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className='order-lg-1' lg='4'>
                
                    </Col>
                  </Row>
                  <div className='text-center mt-5'>
                    <h3>
                      Odeh Abuzaid{' '}
                      <span className='font-weight-light'>, {this.calculateMyAge(new Date(1990, 1, 14))}</span>
                    </h3>
                    <div className='h6 font-weight-300'>
                      <i className='ni location_pin mr-2' />
                      Amman, Jordan
                    </div>
                    <div className='h6 mt-4'>
                      <i className='ni business_briefcase-24 mr-2' />
                      Software Engineer - Isra University
                    </div>
                    <div>
                      <i className='ni education_hat mr-2' />
                      Software Development Student - ASAC
                    </div>
                  </div>
                  <div className='mt-5 py-5 border-top text-center'>
                    <Row className='justify-content-center'>
                      <Col lg='9'>
                        <p className='text-justify'>
                          am a software engineering graduate , got about 8 years
                          of working experience in IT operations and IT
                          infrastructure management , also I have efficient
                          skills & experience in developing windows services &
                          applications along with SQL basic practices . now am
                          learning the development of a full-stack web
                          applications.
                        </p>
                       
                      <Col>
                      <div className='card-profile-stats d-flex justify-content-center'>
                          <img
                            src='https://github-readme-stats.vercel.app/api/top-langs/?username=odehabuzaid'
                          />
                        
                     
                      </div>
                        </Col>
                        <Col>
                        <div className='card-profile-stats justify-content-center' >
                          <img
                           className='card-img'
                            src='https://github-readme-stats.vercel.app/api?username=odehabuzaid&count_private=true&show_icons=true&theme=buefy'
                          />
                      </div>
                        </Col>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
