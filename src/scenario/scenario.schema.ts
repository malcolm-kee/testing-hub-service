import { Schema } from 'mongoose';
import { PERMUTATION_SCHEMA_NAME } from 'src/permutation';
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
    permutationIds: [
      {
        type: Schema.Types.ObjectId,
        ref: PERMUTATION_SCHEMA_NAME,
      },
    ],
    startUrl: String,
  },
  {
    timestamps: true,
  },
);
