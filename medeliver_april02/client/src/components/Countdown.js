import React, { Component } from "react";
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date("2022-02-28T18:20:00+05:30") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
});

class Countdown extends Component {
  render() {
    return (
      <div className="countdown">
        {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <p>
            <span>{timeLeft.hours}</span>
            <span>:</span>
            <span>{timeLeft.minutes}</span>
            <span>:</span>
            <span>{timeLeft.seconds}</span>
          </p>
        ) : (
          <p>Time is up 🔥</p>
        )}
      </div>
    );
  }
}

export default Countdown;
