import axios from "axios";
import useSWR, { ConfigInterface } from "swr";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export default function useFetch<Data = any, Error = any>(
  url: string | null = null,
  options?: ConfigInterface<Data, Error>
) {
  const { data, error } = useSWR<Data, Error>(
    url,
    async (path) => {
      return api.get(path).then((response) => response.data);
    },
    { ...options }
  );
  return { data, error };
}
