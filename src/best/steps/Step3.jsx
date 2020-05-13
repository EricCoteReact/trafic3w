import React from 'react';
import Cat from '../Cat';
//import withCat from '../with-cat';

function withMouse(Component) {
  class WithMouse extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (evt) => {
      this.setState({ x: evt.clientX, y: evt.clientY });
    };

    render() {
      return (
        <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  }

  WithMouse.displayName = `WithSubscription(${
    Component.displayName || Component.name || 'Component'
  })`;
  return WithMouse;
}

// eslint-disable-next-line
function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

export default withMouse(Cat);

//export default withMouse(Cat);
//export default withMouse(withCat(DisplayMouse));

//DEFINITIONS:
//Higher order Function:
//Function, takes a fn, and returns a new function that
//wraps the original one with added functionality

//Higher Order Component:
//Function, takes a "child" component,
//returns a parent component to push props down
//to this child component
