import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: #f1f1f1;
  padding: 1rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h3>Sidebar</h3>
      <p>Conteúdo da barra lateral.</p>
    </StyledSidebar>
  );
};

export default Sidebar;
