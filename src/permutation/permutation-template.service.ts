import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PermutationTemplate,
  PermutationTemplateDocument,
  PERMUTATION_TEMPLATE_SCHEMA_NAME,
} from './permutation.type';

@Injectable()
export class PermutationTemplateService {
  constructor(
    @InjectModel(PERMUTATION_TEMPLATE_SCHEMA_NAME)
    private readonly templateSchema: Model<PermutationTemplateDocument>,
  ) {}

  findAll() {
    return this.templateSchema.find({}).exec();
  }

  create(template: PermutationTemplate) {
    const newTemplate = new this.templateSchema(template);

    return newTemplate.save();
  }

  update(templateId: string, template: PermutationTemplate) {
    return this.templateSchema
      .findByIdAndUpdate(
        templateId,
        {
          $set: {
            name: template.name,
            fields: template.fields,
          },
        },
        {
          new: true,
        },
      )
      .exec();
  }

  delete(templateId: string) {
    return this.templateSchema.findByIdAndDelete(templateId).exec();
  }
}
