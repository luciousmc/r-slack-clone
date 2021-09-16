import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.style';

function Sidebar() {
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
    </SidebarContainer>
  );
}

export { Sidebar };
