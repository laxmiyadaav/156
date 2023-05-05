AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() *50  + (-30));      
        var posY = (Math.random() * 3 + (-3));
        var posZ = (Math.random() * 50 + -20);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFish(id, position);
      }
    } ,
  
    createFish: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var   FishEl = document.createElement("a-entity");
  
      FishEl.setAttribute("id",id);
      FishEl.setAttribute("position",position);
      FishEl.setAttribute("scale",{x:2000,y:2000,z:2000})

      FishEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
      FishEl.setAttribute("animation-mixer",{})
      
      
  
      terrainEl.appendChild(FishEl);
    }
  });
  