import { Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { ChatInputContainer } from './ChatInput.style';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../../lib/firebase';

function ChatInput({ channelName, channelId }) {
  const inputRef = useRef(null);

  const sendMessage = async (event) => {
    event.preventDefault();

    if (!channelId) {
      return console.log('No Id');
    }

    const channelRef = collection(db, 'rooms', channelId, 'messages');
    await addDoc(channelRef, {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
      user: 'Mona Da Goat',
      userImage: '',
    });
    inputRef.current.value = '';
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          ref={inputRef}
          type='text'
          placeholder={`Message #${channelName}`}
        />
        <Button type='submit' hidden onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export { ChatInput };
