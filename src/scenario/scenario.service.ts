import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Scenario,
  ScenarioDocument,
  SCENARIO_SCHEMA_NAME,
} from './scenario.type';

@Injectable()
export class ScenarioService {
  constructor(
    @InjectModel(SCENARIO_SCHEMA_NAME)
    private readonly scenarioSchema: Model<ScenarioDocument>,
  ) {}

  findAll() {
    return this.scenarioSchema.find({}).exec();
  }

  create(scenario: Scenario) {
    const newScenario = new this.scenarioSchema(scenario);

    return newScenario.save();
  }

  update(scenarioId: string, scenario: Scenario) {
    return this.scenarioSchema
      .findByIdAndUpdate(
        scenarioId,
        {
          $set: {
            title: scenario.title,
            tags: scenario.tags,
            steps: scenario.steps,
            startUrl: scenario.startUrl,
          },
        },
        {
          new: true,
        },
      )
      .exec();
  }

  delete(scenarioId: string) {
    return this.scenarioSchema.findByIdAndDelete(scenarioId).exec();
  }
}
