import { Schema } from 'mongoose';
import {
  PermutationDocument,
  PermutationTemplateDocument,
  PERMUTATION_TEMPLATE_SCHEMA_NAME,
} from './permutation.type';

export const PermutationSchema = new Schema<PermutationDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    templateId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: PERMUTATION_TEMPLATE_SCHEMA_NAME,
    },
    tags: [String],
    fieldValues: Schema.Types.Mixed,
  },
  {
    timestamps: true,
  },
);

export const PermutationTemplateSchema = new Schema<
  PermutationTemplateDocument
>(
  {
    name: {
      type: String,
      required: true,
    },
    fields: [
      {
        name: {
          type: String,
          required: true,
        },
        fieldType: {
          type: String,
          enum: ['text', 'textarea', 'checkbox', 'select', 'multiselect'],
          required: true,
        },
        options: [
          {
            label: {
              type: String,
              required: true,
            },
            value: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  },
);
