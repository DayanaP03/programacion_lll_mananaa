import { Body, Controller, Get, Post } from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) { }


  @Get()
  getMyFirsGet(): object {
    return this.basicsService.getMyFirsGet();
  }

  @Get(':parametro')
  getConParametros(@Param('parametro') parametro: string) {
    return this.basicsService.getConParametros(parametro);


  }
  @Post()
  create(@Body() BodyPost: object) {
    return this.basicsService.postFunction(BodyPost);

  }

  @Put(':id')
  update(@Param('id')  object) {
    return this.basicsService.updateFunction(id, bodyPost);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.basicsService.deleteFunction(id);
  }


