import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  return <span title={absolute}>{relative}</span>;
};

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeStamp;
