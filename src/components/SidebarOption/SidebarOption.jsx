import React from 'react';
import {
  SidebarOptionChannel,
  SidebarOptionContainer,
} from './SidebarOption.style';

function SidebarOption({ Icon, title }) {
  return (
    <SidebarOptionContainer>
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
