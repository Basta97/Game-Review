export class GameDetails{
    constructor(title,category,platform,status,desc,url,img){
        this.name = title;
        this.category = category;
        this.platform = platform;
        this.status=status;
        this.desc = desc;
        this.url = url;
        this.img=img;
    }
    
   

}


export async function getGamesDetails(id){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c8caa47da3msh487d99b36b9a2f3p1bb6d1jsn2aaa6804c3b3',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
        
    } catch (e) {
        console.error(e);
    }
}

export function showDetail(){
    document.getElementById('nav-bar').classList.replace('d-flex','d-none');
    document.getElementById('section-game').classList.replace('d-flex','d-none');
    document.getElementById('pop-gd').classList.replace('d-none','d-block');
    
}
export function ExitDetail(){
    document.getElementById('nav-bar').classList.replace('d-none','d-flex');
    document.getElementById('section-game').classList.replace('d-none','d-flex');
    document.getElementById('pop-gd').classList.replace('d-block','d-none');
    
}

