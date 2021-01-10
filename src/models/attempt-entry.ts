import { Park } from "@/models/park";

export interface AttemptEntry {
  id: string;
  park: Partial<Park>;
  attraction: string;
  completed: Date;
}
