import { Games, getGames } from "./games.module.js";
import { getGamesDetails,GameDetails } from "./gameDetails.module.js";
let gameList = [];




export async function createObj(genre) {
  const gameData = await getGames(genre);
  
  gameList = []; 

  for (let i = 0; i < gameData.length; i++) {

    let game = new Games(
      gameData[i].title,
      gameData[i].thumbnail,
      gameData[i].genre,
      gameData[i].platform,
      gameData[i].id,
      gameData[i].short_description,
      
    );
    
    gameList.push(game);
    
    
    
  }
  console.log(gameList);

  
}



export async function displayG(genre) {
 
  createObj(genre);
  let posts = "";
  for (let i = 0; i < gameList.length; i++) {
    posts += `<div class="col-lg-4 position-relative  col-xl-3 col-md-6">
                <div id="${gameList[i].gameId}" class="position-absolute top-0 layer bottom-0 start-0 end-0 z-3">
                </div>
                <div  class="card shadow  d-flex flex-column gap-2 justify-content-between">
                    <img class="p-3" src="${gameList[i].gameImage}" alt="image">
                    <div class="d-flex justify-content-between p-2 ">
                       <span class="text-white">
                        ${gameList[i].gameName.substring(0,10)}
                       </span>
                       <span class="fr-btn">
                           Free
                       </span>
                       

                    </div>
                    <p class="game-dtl ">
                        ${gameList[i].gameDesc.substring(0,50)}
                    </p>
                    <div class="card-footer d-flex justify-content-between align-items-center p-3">
                         <span class="text-white" id="game-type">
                            ${gameList[i].gameCategory}
                         </span>
                         <span class="text-white" id="plateform">
                             ${gameList[i].gamePlatform}
                         </span>
                    </div>
                       
                </div>
            </div>`;
  }
  
  
  document.getElementById("show-game").innerHTML = posts;
     
}

export function clearActive(){
    let node =document.querySelectorAll(".active");

    for(let i =0 ; i < node.length; i++){
        node[i].classList.remove("active");
    }
}

export async function displaygameDetail(id){
    let detail = await getGamesDetails(id);
    let gameDetail = new GameDetails(detail.title, detail.genre,detail.platform, detail.status, detail.description,detail.game_url,detail.thumbnail);
    document.getElementById('gd-title').innerHTML=detail.title;
    document.getElementById('game-cat').innerHTML=detail.genre;
    document.getElementById('game-plat').innerHTML=detail.platform;
    document.getElementById('game-stat').innerHTML=detail.status;
    document.getElementById('game-detail').innerHTML=detail.description;
    document.getElementById('image-det').setAttribute('src', detail.thumbnail);
    document.getElementById('game-url').setAttribute('href', detail.game_url);
    
    
}
