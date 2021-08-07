/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from 'react';
import ill2 from 'assets/img/ill/ill-2.svg';
import ProjectsCards from 'components/extra/ProjectsCards';
import ScrollButton from 'components/extra/ScrollButton';

import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import MainNavbar from 'components/Navbars/MainNavbar.js';
import MySkills from 'components/extra/MySkills';
class Portfolio extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref='main'>
          <ScrollButton />
          <div className='position-relative'>
            {/* shape Hero */}
            <section className='section section-lg section-shaped pb-250'>
              <div className='shape shape-style-1 shape-default'>
                <span className='span-150' />
                <span className='span-75' />
                <span className='span-100' />
                <span className='span-100' />
                <span className='span-50' />
                <span className='span-100' />
              </div>
              <Container className='py-lg-md d-flex'>
                <div className='col px-0'>
                  <Row>
                    <Col lg='6'>
                      <h1 className='display-3 text-white'>
                        Creating Exceptional Digital Experiences{' '}
                        <span>With proven web development skills.</span>
                      </h1>
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className='section section-lg pt-lg-0 mt--200'>
            <Container>
              <Row className=''>
                <br />
                <Col lg='12'>
                  <Row className='row-grid'>
                    <ProjectsCards />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <span></span>
          <section className='section pb-0 bg-gradient-warning'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='order-lg-2 ml-lg-auto' md='6'>
                  <div className='position-relative pl-md-5'>
                    <img
                      alt='...'
                      className='img-center img-fluid'
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className='order-lg-1' lg='6'>
                  <div className='d-flex px-3'>
                    <div>
                      <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                        <i className='ni ni-building text-primary' />
                      </div>
                    </div>
                    <div className='pl-4'>
                      <h4 className='display-3 text-white'>about me</h4>
                      <p className='text-white'>
                        I enjoy creating responsive and user-friendly websites.I
                        discovered how fullfilling the development process can
                        be and started learning more about web development ever
                        since.
                      </p>
                    </div>
                  </div>
                  <Card className='shadow shadow-lg--hover mt-5'>
                    <CardBody>
                      <h5 className='title text-warning'>My Skills</h5>
                      <div className='d-flex px-3'>
                        <div className='pl-4'>
                          <div className='text-center'>
                            <Row className='justify-content-center'>
                              <MySkills />
                            </Row>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
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
            <br /> <br />
          </section>
          <SimpleFooter/>
        </main>
      </>
    );
  }
}
import SimpleFooter from 'components/Footers/SimpleFooter.js';
export default Portfolio;
