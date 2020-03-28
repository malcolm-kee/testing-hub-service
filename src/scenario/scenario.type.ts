import { Document } from 'mongoose';

export type ScenarioStep = {
  action: string;
  result: string;
};

export type Scenario = {
  title: string;
  steps: ScenarioStep[];
  tags: string[];
  startUrl: string;
  permutationIds: string[];
};

export type ScenarioDocument = Scenario & Document;

export const SCENARIO_SCHEMA_NAME = 'Scenario';
