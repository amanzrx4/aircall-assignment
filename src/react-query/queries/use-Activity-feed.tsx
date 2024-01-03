import { QueryOptions, useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../utils/constants/api";
import { Activity } from "../types";

const REQUEST_URL = API_BASE_URL + "/activities";

export const useActivityFeed = (
  options: QueryOptions<Activity[], Error> = {}
) =>
  useQuery({
    ...options,
    queryKey: ["activity-feed"],
    queryFn: () => fetch("REQUEST_URL").then((res) => res.json()),
  });
