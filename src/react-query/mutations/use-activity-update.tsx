import { MutateOptions, useMutation } from "@tanstack/react-query";
import { API_BASE_URL } from "../../utils/constants/api";

const REQUEST_URL = API_BASE_URL + "/activities";

export const useActivityFeed = () =>
  useMutation({
    mutationKey: ["activity-update"],
    mutationFn: async (activityId: string) => {
      const REQUEST_URL = API_BASE_URL + "/activities/" + activityId;
      return fetch("REQUEST_URL").then((res) => res.json());
    },
  });

// const s = useActivityFeed();

// s.mutate();
