import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Scenario, ScenarioStep } from './scenario.type';

class ScenarioStepDto implements ScenarioStep {
  @IsString()
  @IsNotEmpty()
  readonly action: string;

  @IsString()
  @IsNotEmpty()
  readonly result: string;
}

export class CreateScenarioDto implements Scenario {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString({
    each: true,
  })
  readonly tags: string[];

  @IsArray()
  @ValidateNested()
  readonly steps: ScenarioStepDto[];
}

export class UpdateScenarioDto implements Scenario {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString({
    each: true,
  })
  readonly tags: string[];

  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => ScenarioStepDto)
  readonly steps: ScenarioStepDto[];
}
