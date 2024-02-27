import ChatEntry from './ChatEntry';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Wave 01: ChatEntry', () => {
  beforeEach(() => {
    render(
      <ChatEntry
        id={7}
        sender="Joe Biden"
        body="Get out by 8am.  I'll count the silverware"
        timeStamp="2018-05-18T22:12:03Z"
        liked={false}
      />
    );
  });

  test('renders without crashing and shows the sender', () => {
    expect(screen.getByText(/Joe Biden/)).toBeInTheDocument();
  });

  test('that it will display the body', () => {
    expect(screen.getByText(/Get out by 8am/)).toBeInTheDocument();
  });

  test('that it will display the time', () => {
    expect(screen.getByText(/\d+ years ago/)).toBeInTheDocument();
  });
});
