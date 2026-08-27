$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 650, 400, 20, "purple")
    createPlatform(470, 510, 20, 140, "purple")
    createPlatform(470, 510, 2000, 20, "purple")
    createBadPlatform(0, 720, 2990, 20)
    createPlatform(1200, 370, 20, 20, "purple" )
    createPlatform(500, 370, 700, 20, "purple")
    createPlatform(500, 370, 20, -800, "purple")
    createPlatform(1200, 510, 200, -8, "purple")





    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 170, 1, 0.1);
    createCollectable("max", 1300, 170, 1, 0.1);
    createCollectable("grace", 550, 100 , 1, 0.1)



    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 600)
    createCannon("top", 800, 600)
    createCannon("top", 900, 600)
    createCannon("top", 1000, 600)
    createCannon("top", 1100, 600)
  


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
