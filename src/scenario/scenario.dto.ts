import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsUrl,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Scenario, ScenarioStep } from './scenario.type';

class ScenarioStepDto implements ScenarioStep {
  @IsString()
  @IsNotEmpty()
  readonly action: string;

  @IsString()
  @IsNotEmpty()
  readonly result: string;
}

export class ScenarioDto implements Scenario {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsString({
    each: true,
  })
  readonly tags: string[];

  @IsString()
  @IsUrl()
  @ValidateIf(e => e.startUrl !== '')
  readonly startUrl: string;

  @IsArray()
  @ValidateNested()
  @Type(() => ScenarioStepDto)
  readonly steps: ScenarioStepDto[];

  @IsArray()
  @IsString({
    each: true,
  })
  readonly permutationIds: string[];
}
