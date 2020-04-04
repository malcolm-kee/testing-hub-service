import {
  IsMongoId,
  IsNotEmpty,
  IsObject,
  IsString,
  IsIn,
  IsArray,
  ValidateNested,
} from 'class-validator';
import {
  Permutation,
  PermutationTemplate,
  PermutationTemplateField,
} from './permutation.type';
import { Type } from 'class-transformer';

export class PermutationDto implements Permutation {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsMongoId()
  readonly templateId: string;

  @IsString({
    each: true,
  })
  readonly tags: string[];

  @IsObject()
  readonly fieldValues: Record<string, string>;
}

class PermutationTemplateFieldOptionDto {
  @IsString()
  @IsNotEmpty()
  readonly label: string;

  @IsString()
  @IsNotEmpty()
  readonly value: string;
}

class PermutationTemplateFieldDto implements PermutationTemplateField {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsIn(['text', 'textarea', 'checkbox', 'select', 'multiselect'])
  readonly fieldType: PermutationTemplateField['fieldType'];

  @IsString()
  @IsNotEmpty()
  readonly fieldKey: string;

  @IsArray()
  @ValidateNested()
  @Type(() => PermutationTemplateFieldOptionDto)
  readonly options: PermutationTemplateFieldOptionDto[];
}

export class PermutationTemplateDto implements PermutationTemplate {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsArray()
  @ValidateNested()
  @Type(() => PermutationTemplateFieldDto)
  readonly fields: PermutationTemplateFieldDto[];
}
