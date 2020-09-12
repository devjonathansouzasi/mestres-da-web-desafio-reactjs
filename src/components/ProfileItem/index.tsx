import React from "react";
import { useHistory } from "react-router-dom";

import routeNames from "constants/routeNames";

import {
  Container,
  Avatar,
  Infos,
  Title,
  Subtitle,
  Actions,
  TrashIcon,
  EyeIcon,
} from "./styles";

interface Props {
  name: string;
  login: string;
  avatarUrl: string;
  handleRemove: () => void;
}

const ProfileItem: React.FC<Props> = ({
  name,
  login,
  avatarUrl,
  handleRemove,
}) => {
  const history = useHistory();
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Infos>
        <Title>{name}</Title>
        <Subtitle>{`@${login}`}</Subtitle>
      </Infos>
      <Actions>
        <button
          className="primary"
          title="Profile details"
          type="button"
          onClick={() => history.push(`${routeNames.PROFILES}/${login}`)}
        >
          <EyeIcon />
        </button>
        <button
          className="secondary"
          title="Remove favorited profile"
          type="button"
          onClick={handleRemove}
        >
          <TrashIcon />
        </button>
      </Actions>
    </Container>
  );
};

export default ProfileItem;
