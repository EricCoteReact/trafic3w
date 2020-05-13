import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';
import MyRouting from './MyRouting';
import UserProvider from './UserProvider';

function Content() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      style={{
        ...props,
        position: 'absolute',
        width: '100%',
        paddingBottom: '100px',
      }}
    >
      <MyRouting location={item} />
    </animated.div>
  ));
}

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div
          style={{
            minHeight: '100vh',
            // display: 'flex',
            // flexDirection: 'column',
            overflowX: 'hidden',
          }}
        >
          <Menu />
          <Container className='position-relative '>
            <Content />
          </Container>
          <Footer className='bg-dark text-light py-3 fixed-bottom' />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}
