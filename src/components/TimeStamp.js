import { DateTime } from 'luxon';

const TimeStamp = (timeStamp) => {
  const time = DateTime.fromISO(timeStamp);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  return <span title={absolute}>{relative}</span>;
};

export default TimeStamp;
