import React, { useEffect, lazy, Suspense, useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";

import Header from "components/Header";
import ListSekeleton from "components/Skeletons/ListSekeleton";
import ProfileInfosSekeleton from "components/Skeletons/ProfileInfosSekeleton";
import { APP_STORAGE_NAME } from "constants/common";
import RouteNames from "constants/routeNames";
import { formatDistance } from "date-fns";
import useFetch from "hooks/useFetch";
import usePersistedState from "hooks/usePersistedState";

import {
  Container,
  Body,
  InfosWrapper,
  Avatar,
  Infos,
  AdittionalInfos,
  Info,
  StatsWrapper,
  Stat,
  CompanyIcon,
  LocationIcon,
  BlogIcon,
  FollowersIcon,
  FollowingIcon,
  ReposIcon,
  RepositoriesList,
} from "./styles";

const RepositoryItem = lazy(() => import("components/RepositoryItem"));

interface Params {
  username?: string;
}

interface ProfileProps {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  created_at: string;
  updated_at: string;
}

const ProfileDetails: React.FC = () => {
  const history = useHistory();
  const { username } = useParams<Params>();
  const [profiles] = usePersistedState<ProfileProps[]>(APP_STORAGE_NAME, []);

  useEffect(() => {
    if (
      !username ||
      profiles.findIndex((profile) => profile.login === username) < 0
    ) {
      history.replace(RouteNames.DASHBOARD);
    }
  }, [history, username, profiles]);

  const handleGoBack = () => {
    history.go(-1);
  };

  const { data: profile } = useFetch<ProfileProps | null>(
    !username ? null : `users/${username}`
  );
  const { data: repositories } = useFetch<Repository[]>(
    !username ? null : `users/${username}/repos?sort=created&direction=desc`
  );

  const repositoriesWithFOrmattedDate = useMemo(() => {
    console.log("aqui");

    if (repositories) {
      return repositories.map((repository) => ({
        ...repository,
        created_at: formatDistance(
          new Date(repository.created_at),
          new Date(),
          {
            addSuffix: true,
          }
        ),
        updated_at: formatDistance(
          new Date(repository.updated_at),
          new Date(),
          {
            addSuffix: true,
          }
        ),
      }));
    }
    return [];
  }, [repositories]);

  return (
    <Container>
      <Header goBack={handleGoBack} />
      <Body>
        <Suspense fallback={<ProfileInfosSekeleton />}>
          {!profile ? (
            <ProfileInfosSekeleton />
          ) : (
            <>
              <InfosWrapper>
                <Avatar src={profile.avatar_url} />
                <Infos>
                  <strong>{profile.name}</strong>
                  <span>{profile.bio}</span>
                  <AdittionalInfos>
                    {profile.location && (
                      <Info>
                        <LocationIcon />
                        <span>{profile.location}</span>
                      </Info>
                    )}
                    {profile.company && (
                      <Info>
                        <CompanyIcon />
                        <span>{profile.company}</span>
                      </Info>
                    )}
                    {profile.blog && (
                      <Info>
                        <BlogIcon />
                        <span>{profile.blog}</span>
                      </Info>
                    )}
                  </AdittionalInfos>
                </Infos>
              </InfosWrapper>
              <StatsWrapper>
                <Stat>
                  <ReposIcon />
                  <span>Repositories</span>
                  <strong>{profile.public_repos}</strong>
                </Stat>
                <Stat>
                  <FollowersIcon />
                  <span>Followers</span>
                  <strong>{profile.followers}</strong>
                </Stat>
                <Stat>
                  <FollowingIcon />
                  <span>Following</span>
                  <strong>{profile.following}</strong>
                </Stat>
              </StatsWrapper>
            </>
          )}
        </Suspense>
        <Suspense fallback={<ListSekeleton />}>
          {!repositories ? (
            <ListSekeleton />
          ) : (
            <RepositoriesList>
              {repositoriesWithFOrmattedDate?.map((repository) => (
                <RepositoryItem
                  key={repository.html_url}
                  title={repository.name}
                  description={repository.description}
                  language={repository.language}
                  url={repository.html_url}
                  stargazers_count={repository.stargazers_count}
                  forks_count={repository.forks_count}
                  open_issues_count={repository.open_issues_count}
                  watchers_count={repository.watchers_count}
                  created_at={repository.created_at}
                  updated_at={repository.updated_at}
                />
              ))}
            </RepositoriesList>
          )}
        </Suspense>
      </Body>
    </Container>
  );
};

export default ProfileDetails;
