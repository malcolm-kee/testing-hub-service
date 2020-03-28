import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermutationTemplateService } from './permutation-template.service';
import { PermutationController } from './permutation.controller';
import {
  PermutationSchema,
  PermutationTemplateSchema,
} from './permutation.schema';
import { PermutationService } from './permutation.service';
import {
  PERMUTATION_SCHEMA_NAME,
  PERMUTATION_TEMPLATE_SCHEMA_NAME,
} from './permutation.type';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PERMUTATION_SCHEMA_NAME,
        schema: PermutationSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: PERMUTATION_TEMPLATE_SCHEMA_NAME,
        schema: PermutationTemplateSchema,
      },
    ]),
  ],
  providers: [PermutationService, PermutationTemplateService],
  controllers: [PermutationController],
})
export class PermutationModule {}
