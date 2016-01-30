document.addEventListener('copy', function() {
  var s = window.getSelection(),
      troll = [
        "Faut qu'on parle.",
        "Il faut que je t'avoue un truc...",
        "Je t'ai trompé avec Camille",
        "J'ai acheté un kit sado-maso pour 450 € hier",
        "JE T'EMMERDE PUTAIN, TU ME FAIS CHIER.",
        "hier, j'ai changé de sexe",
        "je fais caca",
        "http://www.youporn.com/",
        "j'ai toujours été fan de Justin Bieber <3"
      ],
      trollDiv = document.createElement('div');
      
  trollDiv.innerHTML = troll[Math.floor(Math.random()*troll.length)];
  trollDiv.style.position = 'absolute';
  trollDiv.style.left = '-99999px';
  
  document.body.appendChild(trollDiv);
  s.selectAllChildren(trollDiv);
  
  window.setTimeout(function () {
    document.body.removeChild(trollDiv);
  }, 100);
  
});
