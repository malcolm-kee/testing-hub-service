import { Schema } from 'mongoose';
import { ScenarioDocument } from './scenario.type';

export const ScenarioSchema = new Schema<ScenarioDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    steps: [
      {
        action: String,
        result: String,
      },
    ],
    tags: [String],
    startUrl: String,
  },
  {
    timestamps: true,
  },
);
