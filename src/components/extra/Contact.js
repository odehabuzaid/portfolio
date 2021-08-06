import React from 'react';
import emailjs from 'emailjs-com';
import { Card,Form, CardBody,FormGroup, Container, Row, Col,InputGroup,InputGroupAddon ,InputGroupText ,Input ,Button  } from 'reactstrap';
import classnames from "classnames";

export default function ContactUs() {
    
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_orpz7in', 'template_ms06dx3', e.target, 'user_nwjWlSXmtIAaLMYr6dhQe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
      <section className="section section-lg pt-lg-0 section-contact-us">
      <Container>
        <Row className="justify-content-center mt--300">
          <Col lg="8">
            <Card className="bg-gradient-secondary shadow">
              <CardBody className="p-lg-5">
                <h4 className="mb-1">Want to work with Me?</h4>
                <p className="mt-0">
                  Your project is very important.
                </p>
                <Form onSubmit={sendEmail}>
                <FormGroup className="mt-5 true" >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Your name"
                      type="text"
                      name="user_name"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="focused true" >
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email address"
                      type="email"
                      name="user_email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-4">
                  <Input
                    className="form-control-alternative"
                    cols="80"
                    name="message"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  />
                </FormGroup>
                <div>
                  <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </div>
                </Form>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
}
