AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + (-50));      
        var posY = (Math.random() * 5 + (5));
        var posZ = (Math.random() * 60 + -40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var CoinsEl = document.createElement("a-entity");
  
      CoinsEl.setAttribute("id",id);
      CoinsEl.setAttribute("position",position);
      CoinsEl.setAttribute("material","color","#ff9100")

      CoinsEl.setAttribute("geometry",{primitive:"circle",radius:1})

      
      CoinsEl.setAttribute("animation",{
        property:"rotation",
        to:"0 360 0 ",
        loop:"true",
        dur:1000


      })
      
      
  
      terrainEl.appendChild(CoinsEl);
    }
  });
  