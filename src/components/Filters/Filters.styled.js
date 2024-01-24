import Select from 'react-select';
import styled, { keyframes } from 'styled-components';

const moveLight = keyframes`
    from {
        transform: translateX(-150px) skewX(-45deg);
    }
    to {
        transform: translateX(150px) skewX(-45deg);
    }
`;

export const StyledForm = styled.form`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  gap: 18px;

  @media only screen and (max-width: 1430px) {
    flex-wrap: wrap;
  }

  & label {
    display: block;
    margin-bottom: 5px;
  }

  & input {
    background-color: #f7f7fb;
    border: none;
    padding: 14px 20px;
    border-radius: 10px;
    &::placeholder {
      color: black;
    }
  }

  & button {
    position: relative;
    overflow: hidden;
     &:hover:before {
    animation: ${moveLight} 0.2s;
}
  }

  & button:before{
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-150px) skewX(-45deg);
`;

export const StyledSelect = styled(Select)`
  width: 125px;
  height: 48px;
  border-radius: 10px;

  & .css-13cymwt-control {
    height: 48px;
    border-radius: 10px;
  }
  & .css-1fdsijx-ValueContainer {
    height: 48px;
    border-radius: 15px;
  }

  & .css-1nmdiq5-menu {
    border-radius: 14px;
    padding: 14px 8px 14px 18px;
  }
`;

export const StyledButton = styled.button`
  align-self: flex-end;
  height: 48px;
  padding: 10px 44px;
  background-color: var(--accent-color);
  color: var(--description-text);
  border: none;
  border-radius: 15px;
`;
