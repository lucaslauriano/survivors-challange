export interface Survivors {
  id: number;
  name: string;
  email: string;
  infected: boolean;
  createdAt: string;
}

export type Survivor = Omit<Survivors, "id">;
