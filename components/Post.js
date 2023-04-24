import styled from "styled-components";

const StyledPost = styled.article`
  margin-bottom: 2rem;
`;

const Post = ({ title, content }) => {
  return (
    <StyledPost>
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledPost>
  );
};

export default Post;
