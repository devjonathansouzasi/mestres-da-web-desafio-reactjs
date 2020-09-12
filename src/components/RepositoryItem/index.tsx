import React, { memo } from "react";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Body,
  Infos,
  Info,
  LanguageIcon,
  CreatedIcon,
  UpdatedIcon,
  Stats,
  Stat,
  StarIcon,
  ForkIcon,
  IssueIcon,
  WatcherIcon,
  Actions,
} from "./styles";

interface Props {
  title: string;
  description: string;
  language: string;
  url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  created_at: string;
  updated_at: string;
}

const RepositoryItem: React.FC<Props> = ({
  title,
  description,
  language,
  url,
  stargazers_count,
  forks_count,
  open_issues_count,
  watchers_count,
  created_at,
  updated_at,
}) => {
  return (
    <Container>
      <Body>
        <Header>
          <Title title="Repository name">{title}</Title>
          <Subtitle title="Repository description">{description}</Subtitle>
        </Header>
        <Infos>
          {language && (
            <Info title="Repository Language">
              <LanguageIcon />
              <span>{language}</span>
            </Info>
          )}
          <Info title="Created At">
            <CreatedIcon />
            <span>{`Created ${created_at}`}</span>
          </Info>
          <Info title="Updated At">
            <UpdatedIcon />
            <span>{`Updated ${updated_at}`}</span>
          </Info>
        </Infos>
        <Stats>
          <Stat title="Stars">
            <StarIcon />
            <span>{stargazers_count}</span>
          </Stat>
          <Stat title="Forks">
            <ForkIcon />
            <span>{forks_count}</span>
          </Stat>
          <Stat title="Opened Issues">
            <IssueIcon />
            <span>{open_issues_count}</span>
          </Stat>
          <Stat title="Watchers">
            <WatcherIcon />
            <span>{watchers_count}</span>
          </Stat>
        </Stats>
      </Body>
      <Actions>
        <a title="Open in Github" href={url}>
          <WatcherIcon />
        </a>
      </Actions>
    </Container>
  );
};

export default memo(RepositoryItem);
