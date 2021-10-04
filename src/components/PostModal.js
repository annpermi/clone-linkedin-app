import React from "react";
import styled from "styled-components";

const PostModal = () => {
  return <Container>PostModal</Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default PostModal;