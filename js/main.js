import { showDetail ,ExitDetail} from "./gameDetails.module.js";
import { displayG, clearActive ,displaygameDetail} from "./ui.module.js";


let genre = "mmorpg";





const genres = ["mmorpg", "shooter", "sailing", "permadeath", "superhero", "pixel"];

genres.forEach(g => {
  document.getElementById(g).addEventListener("click", () => {
    genre = g;
    displayG(g);
    clearActive();
    document.getElementById(genre).classList.add('active');
   
    
    
  });
});
document.getElementById('show-game').addEventListener("click", (e) => {
    displaygameDetail(e.target.id);
    showDetail();
});

document.getElementById('exit').addEventListener('click', ()=>{
    ExitDetail();
});

