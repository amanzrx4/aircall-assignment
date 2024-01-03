import { QueryOptions, useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../utils/constants/api";
import { CallDetails } from "../types";

const REQUEST_URL = API_BASE_URL + "/activities";

const requestUrl = "";

export const useCallDetails = (
  options: QueryOptions<CallDetails, Error> = {}
) =>
  useQuery({
    ...options,
    queryKey: ["call-details"],
    queryFn: () => fetch("REQUEST_URL").then((res) => res.json()),
  });
