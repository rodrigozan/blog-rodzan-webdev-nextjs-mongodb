import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #f1f1f1;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Este é o rodapé do blog.</p>
    </StyledFooter>
  );
};

export default Footer;
