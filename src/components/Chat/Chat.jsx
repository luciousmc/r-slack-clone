import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import React, { useEffect, useRef, useState } from 'react';
import {
  ChatBottom,
  ChatContainer,
  ChatHeader,
  ChatMessages,
  HeaderLeft,
  HeaderRight,
} from './Chat.style';
import ChatInput from '../Chatinput';
import { selectChannelId } from '../../../app/slices/channelSlice';
import { useSelector } from 'react-redux';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import Message from '../Message';

function Chat() {
  const channelId = useSelector(selectChannelId);
  const [channelDetails, setRoomDetails] = useState(null);
  const [channelMessages, setRoomMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    const getRoomDetails = async () => {
      setLoading(true);
      const channelDocRef = doc(db, 'rooms', channelId);
      const channelDoc = await getDoc(channelDocRef);
      setRoomDetails(channelDoc.data());
      setLoading(false);
    };

    const getRoomMessages = () => {
      const channelColRef = collection(db, 'rooms', channelId, 'messages');
      const q = query(channelColRef, orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const messages = snapshot.docs.map((message) => ({
          id: message.id,
          user: message.data().user,
          userImage: message.data().userImage,
          timestamp: message.data().timestamp,
          message: message.data().message,
        }));
        setRoomMessages(messages);
      });

      return unsubscribe;
    };

    if (channelId) {
      getRoomDetails();
      const unsub = getRoomMessages();

      return () => {
        unsub();
      };
    }
  }, [channelId]);

  const scrollToBottom = () => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [channelMessages, loading]);

  return (
    <ChatContainer>
      <>
        <ChatHeader>
          <HeaderLeft>
            <h4>
              <strong>#{channelDetails?.name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </ChatHeader>

        <ChatMessages>
          {channelMessages?.map((channelMessage) => {
            const { id, message, timestamp, user, userImage } = channelMessage;

            return (
              <Message
                key={id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>

        <ChatInput channelName={channelDetails?.name} channelId={channelId} />
      </>
    </ChatContainer>
  );
}

export { Chat };
