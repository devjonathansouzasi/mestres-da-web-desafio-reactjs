import styled, { css } from "styled-components";
import { Buildings, LinkAlt, UserPin } from "styled-icons/boxicons-regular";
import { UserGroup } from "styled-icons/heroicons-outline";
import { Location } from "styled-icons/octicons";
import { GitRepository } from "styled-icons/remix-line";

export const Container = styled.div``;

export const Body = styled.div`
  margin-top: 80px;
  width: 100%;
`;

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.hint};
`;

export const Infos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
  text-align: center;

  @media (min-width: 500px) {
    margin-top: 0;
    margin-left: 32px;
    text-align: unset;
  }

  > strong {
    font-size: 26px;
    margin-top: 4px;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;

export const AdittionalInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const Info = styled.div`
  & + div {
    margin-top: 4px;
  }
  > span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  max-width: min(500px, 100%);
  margin: 32px auto;
`;

export const Stat = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  > span {
    margin-top: 4px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }
  > strong {
    font-size: 16px;
    margin-top: 8px;
  }
`;

const infoIconsCSS = css`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CompanyIcon = styled(Buildings)`
  ${infoIconsCSS}
`;

export const LocationIcon = styled(Location)`
  ${infoIconsCSS}
`;

export const BlogIcon = styled(LinkAlt)`
  ${infoIconsCSS}
`;

const statIconsCSS = css`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ReposIcon = styled(GitRepository)`
  ${statIconsCSS}
`;

export const FollowersIcon = styled(UserGroup)`
  ${statIconsCSS}
`;

export const FollowingIcon = styled(UserPin)`
  ${statIconsCSS}
`;

export const RepositoriesList = styled.div``;
