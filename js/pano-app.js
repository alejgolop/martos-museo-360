function initView() {


  changeLang(language.code);
  if(availableLanguages.length>1)
  {
    $("#chooseLang-btn").removeClass("invisible");
    openChooseLangModal();
  }


  //console.log(isAMobileDevice);
  if (isAMobileDevice) {
    $("#normal-mode-btn").click(() => {
      setOrbitControl();
      updateView();
    });
    $("#sensor-mode-btn").click(() => {
      setDeviceOrientationControl();
      updateView();
    });

    updateView();
  } else {
    $("#normal-mode-btn").addClass("invisible");
    $("#sensor-mode-btn").addClass("invisible");
  }
}
function updateView() {
  if (control == PANOLENS.CONTROLS.ORBIT) {
    $("#normal-mode-btn").addClass("invisible");
    if (hasPermToSensors) {
      $("#sensor-mode-btn").removeClass("invisible");
    } else {
      $("#sensor-mode-btn").addClass("invisible");
    }
  } else {
    $("#normal-mode-btn").removeClass("invisible");
    $("#sensor-mode-btn").addClass("invisible");
  }
}
initView();


function openInfoModal() {
  //console.log("Opening Info Modal");

  $(".swiper-wrapper").empty();
  swiper?.destroy();

  $("#poi-title-img").attr("src", "assets/info-btn.svg");
  $("#poi-title").text(langStrings[language.code]["info"]);

  $("#poi-body").empty();
  $("#poi-body").append(`<h3 class="text-center slogan">${langStrings[language.code]["attrib"]}</h3>`);
  $("#poi-body").append(`<div class="row text-center">
  <div class="col"><a title="${langStrings[language.code]["goToDipu"]}" target="_blank" href="https://www.dipujaen.es/"><img class="attrib-img" src="data/media/images/dipu-jaen.jpg" /></a></div>
  <div class="col"><a title="${langStrings[language.code]["goToParaiso"]}" target="_blank" href="https://www.jaenparaisointerior.es/"><img class="attrib-img" src="data/media/images/paraiso-jaen.jpg" /></a></div>
  </div>`);



  $("#modal-poi").modal("show");
}

/*
var loader = new THREE.TextureLoader();

// Load an image file into a custom material
var material = new THREE.MeshLambertMaterial({
  map: loader.load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg')
});

material.side = THREE.DoubleSide;
material.transparent = true;
material.opacity = 1;

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var geometry = new THREE.PlaneGeometry(100, 100);


// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(geometry, material);

// set the position of the image mesh in the x,y,z dimensions

mesh.scale.set(10,  10, 1)

mesh.lookAt(viewer.camera.position);
mesh.frustumCulled=false;
mesh.renderOrder = 0;

// add the image to the scene
//viewer.scene.add(mesh);

viewer.panorama.add(mesh);
mesh.position.set(-4466.25*0.9, 668.75*0.9, -2126.97*0.9);
mesh.lookAt(viewer.camera.position);


var light = new THREE.PointLight( 0xffffff, 1, 0 );

// Specify the light's position
light.position.set(1, 1, 10 );

viewer.scene.add(light)
*/

/*
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

material.side = THREE.DoubleSide;
material.transparent = true;
material.opacity = 1;

// create a plane geometry for the image with a width of 10
// and a height that preserves the image's aspect ratio
var geometry = new THREE.PlaneGeometry(100, 100);


// combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(geometry, material);

// set the position of the image mesh in the x,y,z dimensions

mesh.scale.set(10,  10, 1)

mesh.lookAt(viewer.camera.position);
mesh.frustumCulled=false;
mesh.renderOrder = 0;

// add the image to the scene
//viewer.scene.add(mesh);

viewer.panorama.add(mesh);
mesh.position.set(4466.25*-0.9, 668.75*0.9, -2126.97*0.9);
mesh.lookAt(viewer.camera.position);

*/