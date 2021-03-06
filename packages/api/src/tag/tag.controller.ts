import { Get, Controller } from '@nestjs/common';

import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

@ApiBearerAuth()
@ApiUseTags('tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<TagEntity[]> {
    return await this.tagService.findAll();
  }
}
