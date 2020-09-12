import React, { useState, FormEvent, useEffect, lazy, Suspense } from "react";

import Header from "components/Header";
import ListSekeleton from "components/Skeletons/ListSekeleton";
import { APP_STORAGE_NAME } from "constants/common";
import { api } from "hooks/useFetch";
import usePersistedState from "hooks/usePersistedState";

import {
  Container,
  Body,
  Title,
  Form,
  ErrorMessage,
  Profiles,
  FavoriteIcon,
} from "./styles";

const ProfileItem = lazy(() => import("components/ProfileItem"));

interface ProfileProps {
  name: string;
  login: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [profiles, setProfiles] = usePersistedState<ProfileProps[]>(
    APP_STORAGE_NAME,
    []
  );

  const handleRemoveFavorite = (login: string) => {
    const profilesWithoutItem = profiles.filter(
      (profile) => profile.login !== login
    );
    setProfiles(profilesWithoutItem);
  };

  const handleSearchRepository = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (search.trim().length === 0) {
      setSearchError("Search is not valid. Try search by username!");
      return;
    }
    const profileExists =
      profiles.findIndex((profile) => profile.login === search) >= 0;

    if (profileExists) {
      setSearchError("Profile already favorited!");
      return;
    }
    setIsFetching(true);
    try {
      const response = await api.get<ProfileProps>(`users/${search}`);
      const newProfile = {
        name: response.data.name,
        login: response.data.login,
        avatar_url: response.data.avatar_url,
      };
      setProfiles([newProfile, ...profiles]);
      setSearch("");
      setSearchError("");
    } catch {
      setSearchError("Profile not found!");
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Container>
      <Header />
      <Body>
        <Title>Explore profiles on Github.</Title>
        <Form
          onBlur={() => setSearchError("")}
          hasError={!!searchError}
          focused={searchFocused}
          onSubmit={handleSearchRepository}
          noValidate
        >
          <input
            value={search}
            onBlur={() => setSearchFocused(false)}
            onFocus={() => setSearchFocused(true)}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by username"
          />
          <button type="submit" disabled={isFetching}>
            <span>Favoritar</span>
            <FavoriteIcon />
          </button>
        </Form>
        {searchError && <ErrorMessage>{searchError}</ErrorMessage>}
        <Profiles>
          <Suspense fallback={<ListSekeleton />}>
            {profiles.map((profile) => (
              <ProfileItem
                key={profile.login}
                login={profile.login}
                name={profile.name}
                avatarUrl={profile.avatar_url}
                handleRemove={() => handleRemoveFavorite(profile.login)}
              />
            ))}
          </Suspense>
        </Profiles>
      </Body>
    </Container>
  );
};

export default Dashboard;
