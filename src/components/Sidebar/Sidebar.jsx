import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import React, { useEffect, useState } from 'react';
import SidebarOption from '../SidebarOption';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.style';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../../lib/firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const roomCollectionRef = collection(db, 'rooms');
    const q = query(roomCollectionRef, orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const rooms = querySnapshot.docs.map((room) => ({
        id: room.id,
        name: room.data().name,
        timestamp: serverTimestamp(),
      }));
      setChannels(rooms);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>MONAHS CIRLCE OF FWENDS</h2>
          <h3>
            <FiberManualRecordIcon />
            Monah Da Goat
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions & Reactions' />
      <SidebarOption Icon={DraftsIcon} title='Saved Items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People & User Groups' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File Browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show Less' />

      <hr />

      <SidebarOption Icon={ExpandMoreIcon} title='Channels' />

      <hr />

      <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />

      {channels?.map((channel) => (
        <SidebarOption key={channel.id} id={channel.id} title={channel.name} />
      ))}
    </SidebarContainer>
  );
}

export { Sidebar };
