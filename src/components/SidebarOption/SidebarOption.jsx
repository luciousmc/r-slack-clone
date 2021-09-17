import React from 'react';
import {
  SidebarOptionChannel,
  SidebarOptionContainer,
} from './SidebarOption.style';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

function SidebarOption({ id, Icon, title, addChannelOption }) {
  const addChannel = async () => {
    const channelName = prompt('Please enter channel name');

    if (channelName) {
      const roomRef = await addDoc(collection(db, 'rooms'), {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

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
