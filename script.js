var listaDeFilmes = ["https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg", 
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMO8GOZ_nPw7mInfcuC_1xZ6K4E9i_vsZHQ&usqp=CAU", 
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlD4uZrCDkW6KLe9ogapOT4JLTklL_gSgn2w&usqp=CAU", 
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFVt4sihOWpIzG9cHDkIPjBJRz3Cd2Z9E9w&usqp=CAU", 
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxu2mqwgwDdONREgacYghDjq2Z1lFuLrRXw&usqp=CAU", 
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadzCV99fwo0sSNdIB01ufEWn1OIWHWzX_TQ&usqp=CAU",]

listaDeFilmes.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCADlbQD4LwQF9Q2ubxi_xfRkg-jYNf7TbvQ&usqp=CAU")
listaDeFilmes.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXWlteODuTxEILzW5cDc5mHAw96Z4eGIt5A&usqp=CAU")



var linksFilmes = ["https://animesonline.club/filme/a-viagem-de-chihiro-online", 
"https://www.listadeanimes.com/3746.html", 
"https://animefire.net/animes/tonari-no-totoro-dublado/1", 
"https://animesonline.club/filme/princesa-mononoke-online", 
"https://animesonline.club/filme/sussuros-do-coracao-mimi-wo-sumaseba-online", 
"https://animesonline.club/filme/o-castelo-animado-online", 
"https://animesonehd.xyz/4747/", 
"https://animesonehd.xyz/34626/"
]




for (var indice = 0; indice < listaDeFilmes.length; indice++) {
  document.write("<a target=_blank href=" + linksFilmes[indice] + 
  "><img src=" + listaDeFilmes[indice] + ">" + "</a>"); }




                   



let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
  });

  searchBtn.addEventListener("click", ()=>{ 
    sidebar.classList.toggle("open");
    menuBtnChange(); 
  });

  
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
   }
  }








                 

//for (var indice = 0; indice < listaDeFilmes.length; indice++) {
 // document.write ("<a href=><img src=" + listaDeFilmes[indice] + "></a>" +
 //linksFilmes[i] + "><img src=" + listaDeFilmes[indice] + "></a>"); 





//for (var indiceL2 = 0; indiceL2 < linksFilmes.length; indiceL2++) {
  
//}





//var listaDeFilmes = ["Aviagem de Shihiro", "Meu amigo totoro", "Sussurros do coração"]


//para adiconar novos itens a lista 

//listaDeFilmes.push("Interestelar")
//listaDeFilmes.push("A voz do silêncio")
//listaDeFilmes.push("Fullmetal Alchimest")
//listaDeFilmes.push("BunnyGilrs - Senpai")
//listaDeFilmes.push("Ynuiasha")
                        //console.log(listaDeFilmes.length)

//indice a ser adicionado na lista
//for (var indice = 0; indice < listaDeFilmes.length; indice++) 
  //document.write ("<p>" + listaDeFilmes[indice] + "</p>");
