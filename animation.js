var camera, scene, renderer;
var geometry, material, mesh;

var container, aspectRatio,
		HEIGHT, WIDTH, fieldOfView,
		nearPlane, farPlane,
		mouseX, mouseY, windowHalfX,
		windowHalfY, stats, geometry,
		starMaterial, materialOptions, stars;

init();
animate();

//Animations
function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 300;

    scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000)
    geometry = new THREE.BoxGeometry(200, 200, 200);
	material = new THREE.MeshBasicMaterial( { color: 0xFFFB5E, wireframe: true } );
	mesh = new THREE.Mesh(geometry, material);
	//mesh.position.y = 500;
	scene.add(mesh);

	starCreator();

	renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
	
}

function animate() {

    requestAnimationFrame(animate);

    scene.rotation.x += 0.00001;
    scene.rotation.y += 0.00001;
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;
	
    renderer.render(scene, camera);

}

function starCreator() {

	var starQuantity = 45000;
	geometry = new THREE.SphereGeometry(1000, 100, 50);

	materialOptions = {
		size: 1.0,
		opacity: 0.7
	};

	starMaterial = new THREE.PointsMaterial(materialOptions);

	for (var i = 0; i < starQuantity; i++) {

		var starVertex = new THREE.Vector3();
		starVertex.x = Math.random() * 2000 - 1000;
		starVertex.y = Math.random() * 2000 - 1000;
		starVertex.z = Math.random() * 2000 - 1000;

		
		geometry.vertices.push(starVertex);

	}

	stars = new THREE.Points(geometry, starMaterial);
	scene.add(stars);
}

window.addEventListener( 'resize', resize, false );

function resize(){
	location.reload() 
}

/*
//Resizing the screen
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

	// Everything should resize nicely if it needs to!
  	var WIDTH = window.innerWidth,
  		HEIGHT = window.innerHeight;

  	camera.aspect = aspectRatio;
  	camera.updateProjectionMatrix();
  	renderer.setSize(WIDTH, HEIGHT);

}
*/