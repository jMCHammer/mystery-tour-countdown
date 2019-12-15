import React, { Component } from 'react';
import Countdown from './Countdown';

class TripCountdown extends Component {
  render() {
    var endDate = process.env.TRIP_DATE || new Date(new Date().getTime() + 10000);

    if (endDate > new Date()) {
      return (
            <Countdown date={endDate}> </Countdown>
      );
    } else {

    }

  }
}

export default TripCountdown;
