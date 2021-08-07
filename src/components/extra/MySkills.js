import React from 'react';
import { Col } from 'reactstrap';
const MySkills = () => {
  const skills = [
    { src: 'HTML5.svg', name: 'HTML5' },
    { src: 'CSS3.svg', name: 'CSS3' },
    { src: 'JAVASCRIPT.svg', name: 'JAVASCRIPT' },
    { src: 'NODEJS.svg', name: 'NODE JS' },
    { src: 'REACT.svg', name: 'React' },
    { src: 'B.jpg', name: 'Bootstrap' },
    { src: 'c.svg', name: 'Csharp' },
    { src: 'NET.svg', name: 'NET' },
  ];

  return skills.map((skill, index) => {
    return (
      <Col key={index} lg='4' xs='4' className='mb-4'>
        <img
          alt={skill.name}
          className='img-fluid d-inline-block'
          src={skill.src}
          data-toggle='tooltip'
          title={skill.name}
        />
      </Col>
    );
  });
};

export default MySkills;
