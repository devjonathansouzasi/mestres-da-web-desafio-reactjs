import styled, { css } from "styled-components";
import { DevTo } from "styled-icons/boxicons-logos";
import { Create } from "styled-icons/ionicons-outline";
import { Update } from "styled-icons/material-rounded";
import { StarFill, RepoForked, IssueOpened, Eye } from "styled-icons/octicons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 420px);
  margin: 0 auto;
  padding: 24px;
  border-bottom: 3px solid transparent;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: border-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.hint};
    transform: translateY(-5px);
  }

  & + div {
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: unset;
    border-bottom: none;
    border-left: 5px solid transparent;
    font-size: 18px;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Title = styled.strong`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 4px;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const Body = styled.div``;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Info = styled.div`
  & + div {
    margin-top: 4px;
  }

  @media (min-width: 1024px) {
    & + div {
      margin-top: 0;
      margin-left: 24px;
    }
  }
  > span {
    margin-left: 8px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;

const infoIconsCSS = css`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.title};
`;

export const LanguageIcon = styled(DevTo)`
  ${infoIconsCSS};
  color: ${({ theme }) => theme.colors.hint};
`;
export const CreatedIcon = styled(Create)`
  ${infoIconsCSS};
`;
export const UpdatedIcon = styled(Update)`
  ${infoIconsCSS};
`;

export const Stats = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-left: 24px;
  }

  > span {
    margin-left: 8px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;

const statIconsCSS = css`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.subtitle};
`;

export const StarIcon = styled(StarFill)`
  ${statIconsCSS};
`;

export const ForkIcon = styled(RepoForked)`
  ${statIconsCSS};
`;

export const IssueIcon = styled(IssueOpened)`
  ${statIconsCSS};
`;

export const WatcherIcon = styled(Eye)`
  ${statIconsCSS};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;

    &,
    > svg {
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};

      > svg {
        color: ${({ theme }) => theme.colors.hint};
      }
    }
  }
`;
