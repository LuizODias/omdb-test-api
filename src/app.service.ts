import { Injectable } from '@nestjs/common';
import { Params } from './interfaces/movie.interface';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

const omdbAPI = "https://www.omdbapi.com"
const key = "f5ca66d6"

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getMovieSerie(params: Params): Observable<AxiosResponse<any, any>> {
    const resp = this.httpService.get(`${omdbAPI}/?apikey=${key}&type=${params.type}&t=${params.title}`).pipe(map((resp) => resp.data))
    console.log(resp)
    return resp
  }
}
