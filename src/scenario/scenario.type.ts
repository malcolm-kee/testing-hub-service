import { Document } from 'mongoose';

export type ScenarioStep = {
  action: string;
  result: string;
};

export type Scenario = {
  title: string;
  tags: string[];
  steps: ScenarioStep[];
};

export type ScenarioDocument = Scenario & Document;

export const SCENARIO_SCHEMA_NAME = 'Scenario';
