import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Permutation,
  PermutationDocument,
  PERMUTATION_SCHEMA_NAME,
} from './permutation.type';

@Injectable()
export class PermutationService {
  constructor(
    @InjectModel(PERMUTATION_SCHEMA_NAME)
    private readonly permutationSchema: Model<PermutationDocument>,
  ) {}

  findAll() {
    return this.permutationSchema.find({}).exec();
  }

  findAllByTemplateId(templateId: string) {
    return this.permutationSchema
      .find({
        templateId,
      })
      .exec();
  }

  create(permutation: Permutation) {
    const newPermutation = new this.permutationSchema(permutation);

    return newPermutation.save();
  }

  update(permutationId: string, permutation: Permutation) {
    return this.permutationSchema
      .findByIdAndUpdate(
        permutationId,
        {
          $set: {
            name: permutation.name,
            templateId: permutation.templateId,
            tags: permutation.tags,
            fieldValues: permutation.fieldValues,
          },
        },
        {
          new: true,
        },
      )
      .exec();
  }

  delete(permutationId: string) {
    return this.permutationSchema.findByIdAndDelete(permutationId).exec();
  }
}
