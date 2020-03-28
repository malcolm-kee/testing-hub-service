import { Schema } from 'mongoose';
import { ScenarioDocument } from './scenario.type';

export const ScenarioSchema = new Schema<ScenarioDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    tags: [String],
    steps: [
      {
        action: String,
        result: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);
