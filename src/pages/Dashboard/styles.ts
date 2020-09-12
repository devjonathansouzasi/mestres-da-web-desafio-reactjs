import { shade } from "polished";
import styled, { css, keyframes } from "styled-components";
import { FavoriteBorder } from "styled-icons/material-rounded";

interface FormProps {
  hasError: boolean;
  focused: boolean;
}

const shake = keyframes`
  0% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const fadeScale = keyframes`
  from {
    opacity: 0.8;
    transform: scale(0.95) translateY(-10px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export const Container = styled.div``;

export const Body = styled.div`
  margin-top: 80px;
  width: min(700px, 100%);
`;

export const Title = styled.h1`
  max-width: 450px;
  font-size: 48px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  border-radius: 5px;
  border-left: 5px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: border-color 0.2s ease-in-out;

  ${({ focused, theme }) =>
    focused &&
    css`
      border-color: ${theme.colors.hint};
    `};

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.colors.error};
      animation: ${shake} 0.2s;
    `};

  > input {
    min-width: 100px;
    width: 100%;
    height: 62px;
    padding: 0 30px;
    &::placeholder {
      color: ${({ theme }) => theme.colors.subtitle};
    }
    @media (min-width: 414px) {
      height: 72px;
    }
  }

  > button {
    flex-shrink: 0;
    width: min(210px, 30vw);
    height: 62px;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.hint};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.hint)};
    }

    > span {
      display: none;
    }

    @media (min-width: 414px) {
      height: 72px;
      > span {
        display: block;
      }
      > svg {
        display: none;
      }
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.secondary};
      cursor: progress;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  display: flex;
  width: min(700px, calc(100% - 45px));
  margin-top: 8px;
  padding: 15px 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.error};
  border-radius: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.secondary};
  animation: ${fadeScale} 0.2s;
`;

export const Profiles = styled.div`
  width: calc(100% + 24px);
  margin-top: 80px;
  padding-right: 20px;
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.white};
`;
