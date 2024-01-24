import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ChatLog from './ChatLog';
import { render, screen } from '@testing-library/react';

const LOG = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false,
  },
  {
    id: 2,
    sender: 'Estragon',
    body: 'Because you are wrong.',
    timeStamp: '2018-05-29T22:49:33+00:00',
    liked: false,
  },
  {
    id: 3,
    sender: 'Vladimir',
    body: 'because I am what',
    timeStamp: '2018-05-29T22:50:22+00:00',
    liked: false,
  },
  {
    id: 4,
    sender: 'Estragon',
    body: 'A robot.',
    timeStamp: '2018-05-29T22:52:21+00:00',
    liked: false,
  },
  {
    id: 5,
    sender: 'Vladimir',
    body: 'Notabot',
    timeStamp: '2019-07-23T22:52:21+00:00',
    liked: false,
  },
];

describe('Wave 02: ChatLog', () => {
  beforeEach(() => {
    render(<ChatLog entries={LOG} />);
  });

  test('renders without crashing and shows all the names', () => {
    [
      {
        name: 'Vladimir',
        numChats: 3,
      },
      {
        name: 'Estragon',
        numChats: 2,
      },
    ].forEach((person) => {
      const elementList = screen.getAllByText(new RegExp(person.name));
      expect(elementList.length).toEqual(person.numChats);

      elementList.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  test('renders an empty list without crashing', () => {
    const element = render(<ChatLog entries={[]} />);
    expect(element).not.toBeNull();
  });
});
