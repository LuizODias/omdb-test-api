import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Params } from './interfaces/movie.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:title/:type')
  getMovieSerie(@Param() params: Params): Observable<AxiosResponse<any, any>> {
    return this.appService.getMovieSerie({title: params.title, type: params.type});
  }
}
