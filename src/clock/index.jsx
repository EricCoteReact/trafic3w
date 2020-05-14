import React from 'react';
import { Button /* as Btn */ } from 'reactstrap';
import Day from './Day';

function getTime() {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return new Intl.DateTimeFormat('en-CA', options).format(new Date());
}

function getDay() {
  const options = {
    weekday: 'long',
  };
  return new Intl.DateTimeFormat('en-CA', options).format(new Date());
}

export default class Clock extends React.Component {
  state = {
    time: getTime(),
    title: 'Démarrer Horloge',
  };

  timerRef = null;

  startTimer = () => {
    this.timerRef = setInterval(() => {
      //console.log('tick');
      if (this.state.time !== getTime()) {
        this.setState({ time: getTime() });
      }
    }, 0);
    this.setState({ time: getTime() });
  };

  stopTimer = () => {
    clearInterval(this.timerRef);
    this.timerRef = null;
    this.setState({ time: getTime() });
  };

  timerToggler = () => {
    if (this.timerRef) {
      this.setState({ title: 'Démarrer Horloge' });
      this.stopTimer();
    } else {
      this.setState({ title: 'Arrêter Horloge' });
      this.startTimer();
    }
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //     if (nextState.time !== this.state.time) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }

  // componentDidUpdate(){
  //     console.log("tick");
  // }

  // componentWillUnmount = () => {
  //     this.stopTimer();
  // }

  render = () => {
    //console.log(this.state.time);
    return (
      <div>
        <Button color='primary' onClick={this.timerToggler}>
          {this.state.title}
        </Button>
        <h1>{this.state.time}</h1>
        <Day day={getDay()} />
      </div>
    );
  };
}

//const Button = React.memo(Btn)
