import styled, { css } from "styled-components";
import { Trashcan, Eye } from "styled-icons/octicons";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-bottom: 3px solid transparent;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.hint};
    transform: translateY(-5px);
  }

  & + div {
    margin-top: 16px;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 32px;
    border-bottom: none;
    border-left: 5px solid transparent;
    font-size: 18px;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Avatar = styled.img`
  flex-shrink: 0;
  width: max(45px, min(80px, 20vw));
  height: max(45px, min(80px, 20vw));
  border-radius: 50%;
`;

export const Infos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 16px 0 24px;
  text-align: center;
  @media (min-width: 500px) {
    justify-content: space-between;
    margin: 0 16px;
    text-align: unset;
  }

  > span {
    margin-top: 5px;
  }
`;

export const Title = styled.strong`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
    > button {
      & + button {
        margin-left: 8px;
      }
    }
  }

  > button {
    width: 48px;
    height: 48px;
    border-radius: 8px;

    &,
    > svg {
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      &.primary {
        > svg {
          color: ${({ theme }) => theme.colors.hint};
        }
      }
      &.secondary {
        > svg {
          color: ${({ theme }) => theme.colors.error};
        }
      }
    }
  }
`;

const iconsCSS = css`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const TrashIcon = styled(Trashcan)`
  ${iconsCSS};
`;
export const EyeIcon = styled(Eye)`
  ${iconsCSS};
`;
