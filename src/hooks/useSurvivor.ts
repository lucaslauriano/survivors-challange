import { useQuery } from "react-query";
import { Survivors } from "../types/survivors";
import { api } from "../utils/axios";

export const getSurvivors = async (): Promise<Survivors[]> => {
  const { data } = await api.get("survivors");

  const survivors = data.survivors.map((item) => {
    return {
      id: item.id,
      email: item.email,
      name: item.name,
      infected: item.infected,
      createdAt: item.createdAt,
    };
  });
  return survivors;
};

export const useSurvivors = () => {
  return useQuery("survivors", getSurvivors);
};
