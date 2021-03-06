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
import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import ContactUs from 'components/extra/Contact';
import ScrollButton from 'components/extra/ScrollButton';

class Contact extends React.Component {
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
          <section className='section section-shaped section-lg'>
            <div className='shape shape-style-1 bg-gradient-default'></div>
          </section>
          <br />
          <Container className='pt-lg-9'>
            <Row className='justify-content-center'>
              <Col>
                <ContactUs />
              </Col>
            </Row>
          </Container>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Contact;
