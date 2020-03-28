import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { CreateScenarioDto, UpdateScenarioDto } from './scenario.dto';
import { ScenarioService } from './scenario.service';

@Controller('scenario')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Get()
  getAllScenarios() {
    return this.scenarioService.findAll();
  }

  @Post()
  createScenario(@Body() createDto: CreateScenarioDto) {
    return this.scenarioService.create(createDto);
  }

  @Put(':id')
  updateScenario(
    @Param('id') id: string,
    @Body() updateDto: UpdateScenarioDto,
  ) {
    return this.scenarioService.update(id, updateDto);
  }
}
