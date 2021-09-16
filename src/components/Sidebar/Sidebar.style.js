import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid var(--border-b-color);
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-b-color);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--border-b-color);
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
`;

export { SidebarContainer, SidebarHeader, SidebarInfo };
