import { useQuery } from "react-query";
import { Survivors } from "../types/survivors";
import { api } from "../utils/axios";

type GetUsersResponseProps = {
  totalCount: number;
  survivors: Survivors[];
};

export const getSurvivors = async (
  _page: number,
  _limit: number,
  infecteds?: boolean,
  search?: string
): Promise<GetUsersResponseProps> => {
  const infected_like = true;
  const { data, headers } = await api.get("survivors", {
    params: {
      _page,
      _limit,
      ...(!!infecteds ? { infected_like } : {}),
      search,
    },
  });

  const totalCount = Number(headers["x-total-count"]);
  const survivors = data.map((item) => {
    return {
      id: item.id,
      email: item.email,
      name: item.name,
      infected: item.infected,
    };
  });
  return {
    totalCount,
    survivors,
  };
};

export const useSurvivors = (
  _page: number,
  _limit: number,

  infecteds?: boolean,
  search?: string
) => {
  return useQuery(["survivors", { _page, _limit, infecteds, search }], () =>
    getSurvivors(_page, _limit, infecteds, search)
  );
};
