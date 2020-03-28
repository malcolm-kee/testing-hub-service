import { Document } from 'mongoose';

export type PermutationTemplateField = {
  name: string;
  fieldType: 'text' | 'textarea' | 'checkbox' | 'select' | 'multiselect';
  options: Array<{
    label: string;
    value: string;
  }>;
};

export type PermutationTemplate = {
  name: string;
  fields: PermutationTemplateField[];
};

export type PermutationTemplateDocument = PermutationTemplate & Document;

export const PERMUTATION_TEMPLATE_SCHEMA_NAME = 'PermutationTemplate';

export type Permutation = {
  name: string;
  templateId: string;
  tags: string[];
  fieldValues: Record<string, string>;
};

export type PermutationDocument = Permutation & Document;

export const PERMUTATION_SCHEMA_NAME = 'Permutation';
