import styled from 'styled-components';

export const ImageInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 14vh;
  height: 18vh;
  overflow: hidden;
  background-color: rgba(34, 36, 38, 0.1);
  text-align: center;
  border-radius: 3px;
  margin: 0 auto 3px auto;

  &:after {
    content: 'Upload Photo';
    color: rgba(0, 0, 0, 0.6);
    padding: 0 8px;
  }

  input[type='file'] {
    z-index: 1;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(34, 36, 38, 0.1);
  }

  input[type='file'],
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
