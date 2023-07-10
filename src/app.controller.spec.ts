import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Params } from './interfaces/movie.interface';

const response = {
  "Title": "Forrest Gump",
  "Year": "1994",
  "Rated": "PG-13",
  "Released": "06 Jul 1994",
  "Runtime": "142 min",
  "Genre": "Drama, Romance",
  "Director": "Robert Zemeckis",
  "Writer": "Winston Groom, Eric Roth",
  "Actors": "Tom Hanks, Robin Wright, Gary Sinise",
  "Plot": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Won 6 Oscars. 50 wins & 74 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Ratings": [
  {
  "Source": "Internet Movie Database",
  "Value": "8.8/10"
  },
  {
  "Source": "Rotten Tomatoes",
  "Value": "71%"
  },
  {
  "Source": "Metacritic",
  "Value": "82/100"
  }
  ],
  "Metascore": "82",
  "imdbRating": "8.8",
  "imdbVotes": "2,148,029",
  "imdbID": "tt0109830",
  "Type": "movie",
  "DVD": "28 Aug 2001",
  "BoxOffice": "$330,455,270",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}

describe('AppController', () => {
  let appController: AppController;
  let params: Params = {'title': 'forrest'};
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getMovieSerie()).toBe(response);
    });
  });
});
