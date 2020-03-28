import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PermutationTemplateService } from './permutation-template.service';
import { PermutationDto, PermutationTemplateDto } from './permutation.dto';
import { PermutationService } from './permutation.service';

@Controller('permutation')
export class PermutationController {
  constructor(
    private readonly permutationService: PermutationService,
    private readonly templateService: PermutationTemplateService,
  ) {}

  @Get('record')
  getAllPermutations() {
    return this.permutationService.findAll();
  }

  @Get('record/template/:templateId')
  getAllPermutationForTemplate(@Param('templateId') templateId: string) {
    return this.permutationService.findAllByTemplateId(templateId);
  }

  @Post('record')
  createPermutation(@Body() createDto: PermutationDto) {
    return this.permutationService.create(createDto);
  }

  @Put('record/:id')
  updatePermutation(
    @Param('id') id: string,
    @Body() updateDto: PermutationDto,
  ) {
    return this.permutationService.update(id, updateDto);
  }

  @Delete('record/:id')
  deletePermutation(@Param('id') id: string) {
    return this.permutationService.delete(id);
  }

  @Get('template')
  getAllTemplates() {
    return this.templateService.findAll();
  }

  @Post('template')
  createTemplate(@Body() createTemplateDto: PermutationTemplateDto) {
    return this.templateService.create(createTemplateDto);
  }

  @Put('template/:id')
  updateTemplate(
    @Param('id') id: string,
    @Body() updateDto: PermutationTemplateDto,
  ) {
    return this.templateService.update(id, updateDto);
  }

  @Delete('template/:id')
  async deleteTemplate(@Param('id') id: string) {
    const records = await this.getAllPermutationForTemplate(id);

    if (records.length > 0) {
      throw new ForbiddenException(
        'Template cannot be deleted when there are permutation using it',
      );
    }

    return this.templateService.delete(id);
  }
}
