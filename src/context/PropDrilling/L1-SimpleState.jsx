import React, { useState } from 'react';
import ColoredPart from './LeftL2-ColoredPart';
import ChangePart from './RightL2-ChangePart';
import { Row, Col } from 'reactstrap';

export default function SimpleState() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Wayne');
  const [color, setColor] = useState('blue');

  //the folloing is to avoid the ESLint warning that
  //we're not calling the "set" methods.
  if ((setFirstName, setLastName, setColor)) {
  }

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    // eslint-disable-next-line
    eval(str);
  }

  return (
    <Row>
      <Col md='6'>
        <ColoredPart firstName={firstName} lastName={lastName} color={color} />
      </Col>
      <Col md='6'>
        <ChangePart
          firstName={firstName}
          lastName={lastName}
          color={color}
          onChange={change}
        />
      </Col>
    </Row>
  );
}
