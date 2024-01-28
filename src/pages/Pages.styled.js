import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${props => props.$url || 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    padding: 0px 128px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 100%;
  border-radius: 20px;
  height: 100%;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: transparent;
  text-transform: uppercase;
  color: #3470ff;
  @media only screen and (min-width: 768px) {
    font-size: 60px;
    font-weight: 900;
  }
`;
export const NameTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    font-weight: 700;
  }
`;
export const Paragraph = styled.h3`
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const StyledBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 180px;
  height: 48px;
  outline: none;
  text-decoration: none;
  padding: 10px;
  background: #3470ff;
  border: none;
  border-radius: 22px;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
  max-width: 100%;
  @media only screen and (min-width: 768px) {
    font-weight: 800;
    font-size: 18px;
  }
`;

export const selectStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: 'var(--border-filter)',
    width: '224px',
    height: '48px',
    border: 'none',
    paddingLeft: '18px',
    paddingRight: '18px',
    paddingTop: '8px',
    paddingBottom: '8px',
    display: 'flex',
    cursor: 'pointer',
    outline: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
    color: '#121417',
    fontWeight: ' 500',
  }),
  singleValue: styles => ({
    ...styles,

    color: 'var(--black-filter)',
    fontSize: '18px',
  }),
  placeholder: styles => ({
    ...styles,

    color: 'var(--black-filter)',
    fontSize: '18px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '14px',
    backgroundColor: 'var(--white)',
    overflow: 'hidden',
    color: 'var(--no-choice-filter)',

    fontSize: '16px',

    '&::before': {
      background: 'var(--white)',
      content: '""',
      filter: 'blur(50px)',
      position: 'absolute',
      inset: '0%',
      zIndex: '-1',
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    if (isFocused) {
      return {
        ...styles,
        color: 'var(--black-filter)',
      };
    } else if (isSelected) {
      return {
        ...styles,
        color: 'var(--black-filter)',
      };
    } else {
      return {
        ...styles,
      };
    }
  },
};

export const StyledFormFilters = styled.form`
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 50px;

  width: 100%;

  button {
    width: 136px;
    height: 48px;
    padding: 14px 44px;
    border-radius: 12px;
    background: var(--general-blue);
    border: none;
    outline: transparent;
    margin-left: 18px;
    color: var(--white);

    color: var(--white);
    font-size: 14px;
    line-height: 1.43;
    &:hover,
    &:focus {
      background-color: var(--general-blue-active);
    }
  }
  label {
    color: var(--color-filter);
    font-size: 14px;
    line-height: 1.29;
    font-weight: 500;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 50px;

  @media only screen and (max-width: 1430px) {
    flex-wrap: wrap;
  }

  & label {
    display: block;
    margin-bottom: 5px;
    color: #8a8a89;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  & input {
    width: 224px;
    height: 48px;
    border: none;
    padding: 8px 18px;
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 14px;
    box-shadow: none;
    color: #121417;
    font-weight: 500;

    &::placeholder {
      color: var(--black-filter);
      font-size: 18px;
      line-height: 1.11;
    }

    /* @media only screen and (min-width: 768px) {
      padding: 8px 18px;
    } */
  }

  & button {
    position: relative;
    overflow: hidden;
  }

  & button:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-150px) skewX(-45deg);
  }
`;

export const StyledButton = styled.button`
  align-self: flex-end;
  height: 48px;
  padding: 10px 44px;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  border: none;
`;
