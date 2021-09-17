import React from 'react';
import {
  SidebarOptionChannel,
  SidebarOptionContainer,
} from './SidebarOption.style';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useDispatch } from 'react-redux';
import { enterChannel } from '../../../app/slices/channelSlice';

function SidebarOption({ id, Icon, title, addChannelOption }) {
  const dispatch = useDispatch();
  const addChannel = async () => {
    const channelName = prompt('Please enter channel name');

    if (channelName) {
      const roomRef = await addDoc(collection(db, 'rooms'), {
        name: channelName,
        timestamp: serverTimestamp(),
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterChannel({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export { SidebarOption };
