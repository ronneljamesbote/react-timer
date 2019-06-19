import React, { Component } from "react";
import ControlPanel from "../../components/controlPanel";
import Display from "../../components/display";
import { getTimeFormatted } from "../../libs";
import stlyes from "./styles.module.scss";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      started: false,
      time: 0
    };

    this.timer = null;
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  handleInputChange = (event) => {
    let value = parseInt(event.target.value);

    if (value && typeof value === "number") {
      if (value <= 356400) {
        this.setState({ time: value * 1000, seconds: value });
      }
      return;
    }

    this.setState({ time: 0, seconds: 0 });
  };

  handleStartTimer = () => {
    const { started, time } = this.state;

    if (!started && time > 0) {
      this.setState(() => ({ started: true }));

      this.timer = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.started && prevState.time > 0) {
            return {
              seconds: Math.floor(prevState.time / 1000),
              time: prevState.time - 10
            };
          }

          this.clearTimer();
          return { seconds: 0, started: false, time: 0 };
        });
      }, 10);
    }
  };

  handleStopTimer = () => {
    this.clearTimer();
    this.setState({ started: false });
  };

  handleResetTimer = () => {
    this.clearTimer();
    this.setState({ started: false, seconds: 0, time: 0 });
  };

  render() {
    const { seconds, started, time } = this.state;

    return (
      <div className={stlyes.timer}>
        <Display
          onInputChange={this.handleInputChange}
          seconds={seconds}
          started={started}
          time={getTimeFormatted(time)}
        />
        <ControlPanel
          onResetTimer={this.handleResetTimer}
          onStartTimer={this.handleStartTimer}
          onStopTimer={this.handleStopTimer}
          started={started}
        />
      </div>
    );
  }
}

export default Timer;
