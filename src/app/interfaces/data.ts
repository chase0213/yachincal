import { Datapoint } from "./datapoint";

export interface Data {
  label: string;
  color: string;
  datapoints: Datapoint[];
}
