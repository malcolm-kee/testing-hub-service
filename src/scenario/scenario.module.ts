import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScenarioController } from './scenario.controller';
import { ScenarioSchema } from './scenario.schema';
import { ScenarioService } from './scenario.service';
import { SCENARIO_SCHEMA_NAME } from './scenario.type';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SCENARIO_SCHEMA_NAME,
        schema: ScenarioSchema,
      },
    ]),
  ],
  providers: [ScenarioService],
  controllers: [ScenarioController],
})
export class ScenarioModule {}
