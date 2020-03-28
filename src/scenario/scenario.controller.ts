import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ScenarioDto } from './scenario.dto';
import { ScenarioService } from './scenario.service';

@Controller('scenario')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Get()
  getAllScenarios() {
    return this.scenarioService.findAll();
  }

  @Post()
  createScenario(@Body() createDto: ScenarioDto) {
    return this.scenarioService.create(createDto);
  }

  @Put(':id')
  updateScenario(@Param('id') id: string, @Body() updateDto: ScenarioDto) {
    return this.scenarioService.update(id, updateDto);
  }

  @Delete(':id')
  deleteScenario(@Param('id') id: string) {
    return this.scenarioService.delete(id);
  }
}
