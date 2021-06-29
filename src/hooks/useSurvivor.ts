import { useQuery } from "react-query";
import { Survivors } from "../types/survivors";
import { api } from "../utils/axios";

type GetUsersResponseProps = {
  totalCount: number;
  survivors: Survivors[];
};

export const getSurvivors = async (
  page: number,
  infecteds?: boolean,
  search?: string
): Promise<GetUsersResponseProps> => {
  const { data, headers } = await api.get("survivors", {
    params: {
      page,
      search,
      ...(!!infecteds ? { infecteds } : {}),
    },
  });

  const totalCount = Number(headers["x-total-count"]);
  const survivors = data.survivors.map((item) => {
    return {
      id: item.id,
      email: item.email,
      name: item.name,
      infected: item.infected,
      createdAt: item.created_at,
    };
  });
  return {
    totalCount,
    survivors,
  };
};

export const useSurvivors = (
  page: number,
  infecteds?: boolean,
  search?: string
) => {
  return useQuery(["survivors", { page, infecteds, search }], () =>
    getSurvivors(page, infecteds, search)
  );
};
