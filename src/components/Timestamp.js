import React from 'react';
import moment from 'moment';

class Timestamp extends React.Component {
  render() {
    const time = moment(this.props.time);
    const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
    const relative = time.fromNow();

    return <span title={absolute}>{relative}</span>;
  }
}

export default Timestamp;
