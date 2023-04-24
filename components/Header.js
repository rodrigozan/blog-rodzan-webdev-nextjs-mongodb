import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Meu Blog</h1>
    </StyledHeader>
  );
};

export default Header;
