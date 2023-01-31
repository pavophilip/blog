import styled from "@emotion/styled";

const NavbarItems = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

const NavbarItem = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  gap: 4px;
`;

const NavbarItemIcon = styled.div``;

const NavbarItemText = styled.div``;

// const ActiveNavbarItem = styled(NavbarItem)`
//   &:before {
//   }
// `;

const Navbar = () => {
  return (
    <NavbarItems>
      <NavbarItem>
        <NavbarItemIcon>👋</NavbarItemIcon>
        <NavbarItemText>About me</NavbarItemText>
      </NavbarItem>
      <NavbarItem>
        <NavbarItemIcon>✏️</NavbarItemIcon>
        <NavbarItemText>My Blog</NavbarItemText>
      </NavbarItem>
      <NavbarItem>
        <NavbarItemIcon>🏗</NavbarItemIcon>
        <NavbarItemText>My Projects</NavbarItemText>
      </NavbarItem>
      <NavbarItem>
        <NavbarItemIcon>👾</NavbarItemIcon>
        <NavbarItemText>Misc</NavbarItemText>
      </NavbarItem>
    </NavbarItems>
  );
};

export default Navbar;
