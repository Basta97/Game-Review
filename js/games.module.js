export class Games {

  constructor(gName,gImage, gCategory, gPlatform, gId, gDesc,gDetail) {
      this.gameName = gName;
      this.gameImage=gImage;
      this.gameCategory = gCategory;
      this.gamePlatform = gPlatform;
      this.gameId = gId;
      this.gameDesc = gDesc;
      this.gameDetail =gDetail
      
     
  }
}

export async function getGames(genre) {
  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': 'c8caa47da3msh487d99b36b9a2f3p1bb6d1jsn2aaa6804c3b3',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`, options);
      const games = await response.json();
      return games;
  } catch (e) {
      console.log(e);
      return [];
  }
}