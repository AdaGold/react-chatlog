import { DateTime } from 'luxon';

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  return (
    <span className="entry-time" title={absolute}>
      {relative}
    </span>
  );
};

export default TimeStamp;
