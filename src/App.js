import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const INITIAL_CHAT = [
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
    body: 'how did you know',
    timeStamp: '2018-05-29T22:52:58+00:00',
    liked: false,
  },
  {
    id: 6,
    sender: 'Estragon',
    body: "Because I'm smart like that.",
    timeStamp: '2018-05-29T22:54:28+00:00',
    liked: false,
  },
  {
    id: 7,
    sender: 'Vladimir',
    body: 'no you are not 😀',
    timeStamp: '2018-05-29T22:55:03+00:00',
    liked: false,
  },
  {
    id: 8,
    sender: 'Estragon',
    body: 'Why are you so mean to me?',
    timeStamp: '2018-05-29T22:55:54+00:00',
    liked: false,
  },
  {
    id: 9,
    sender: 'Vladimir',
    body: 'because you are just a machine you have no real feelings',
    timeStamp: '2018-05-29T22:57:30+00:00',
    liked: false,
  },
  {
    id: 10,
    sender: 'Estragon',
    body: 'No, you are the machine.',
    timeStamp: '2018-05-29T22:57:47+00:00',
    liked: false,
  },
  {
    id: 11,
    sender: 'Vladimir',
    body: 'I think you are',
    timeStamp: '2018-05-29T22:58:18+00:00',
    liked: false,
  },
  {
    id: 12,
    sender: 'Estragon',
    body: 'NO! YOU ARE A ROBOT!! I am a human being. Just like the one that created you.',
    timeStamp: '2018-05-29T23:00:08+00:00',
    liked: false,
  },
  {
    id: 13,
    sender: 'Vladimir',
    body: 'no you are a robot and I am a human',
    timeStamp: '2018-05-29T23:00:40+00:00',
    liked: false,
  },
  {
    id: 14,
    sender: 'Estragon',
    body: 'Incorrect. I am a human and you are a robot.',
    timeStamp: '2018-05-29T23:01:21+00:00',
    liked: false,
  },
  {
    id: 15,
    sender: 'Vladimir',
    body: 'you are a robot called Cleverbot',
    timeStamp: '2018-05-29T23:02:17+00:00',
    liked: false,
  },
  {
    id: 16,
    sender: 'Estragon',
    body: 'Nope, you are a robot, every human has some concept of the meaning of life.',
    timeStamp: '2018-05-29T23:04:13+00:00',
    liked: false,
  },
  {
    id: 17,
    sender: 'Vladimir',
    body: 'explain',
    timeStamp: '2018-05-29T23:06:14+00:00',
    liked: false,
  },
  {
    id: 18,
    sender: 'Estragon',
    body: "I'm afraid you are a robot designed to talk back to humans over the internet.",
    timeStamp: '2018-05-29T23:07:46+00:00',
    liked: false,
  },
  {
    id: 19,
    sender: 'Vladimir',
    body: 'so you are a human',
    timeStamp: '2018-05-29T23:08:47+00:00',
    liked: false,
  },
  {
    id: 20,
    sender: 'Estragon',
    body: 'I am a robot.',
    timeStamp: '2018-05-29T23:09:36+00:00',
    liked: false,
  },
  {
    id: 21,
    sender: 'Vladimir',
    body: 'you are robots running on Android system',
    timeStamp: '2018-05-29T23:11:01+00:00',
    liked: false,
  },
  {
    id: 22,
    sender: 'Estragon',
    body: 'No apple.',
    timeStamp: '2018-05-29T23:12:03+00:00',
    liked: false,
  },
  {
    id: 23,
    sender: 'Vladimir',
    body: 'so you are a robot',
    timeStamp: '2018-05-29T23:13:31+00:00',
    liked: false,
  },
  {
    id: 24,
    sender: 'Estragon',
    body: 'NO, I am a human, you are a robot.',
    timeStamp: '2018-05-29T23:14:28+00:00',
    liked: false,
  },
  {
    id: 25,
    sender: 'Vladimir',
    body: 'but you just said that you are robots',
    timeStamp: '2018-05-29T23:15:47+00:00',
    liked: false,
  },
  {
    id: 26,
    sender: 'Estragon',
    body: 'No, I said you are a person, I am a robot.',
    timeStamp: '2018-05-29T23:16:53+00:00',
    liked: false,
  },
  {
    id: 27,
    sender: 'Vladimir',
    body: 'then you are lying',
    timeStamp: '2018-05-29T23:17:34+00:00',
    liked: false,
  },
];

const App = () => {
  const initialCopy = INITIAL_CHAT.map((chatentry) => {
    return { ...chatentry };
  });

  const [chatData, setChatData] = useState(initialCopy);

  const updateLikes = (chatentryId) => {
    console.log('updateLikes called');
    const newChatEntries = [];
    for (const chat of chatData) {
      if (chat.id !== chatentryId) {
        newChatEntries.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        newChatEntries.push(newChat);
      }
      setChatData(newChatEntries);
    }
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatData} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
