var camera, scene, renderer;
var geometry, material, mesh;

var container, aspectRatio,
		HEIGHT, WIDTH, fieldOfView,
		nearPlane, farPlane,
		mouseX, mouseY, windowHalfX,
		windowHalfY, stats, geometry,
		starStuff, materialOptions, stars;

init();
animate();

//Animations
function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    starForge();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

}

function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);

}


function starForge() {

	var starQty = 45000;
		geometry = new THREE.SphereGeometry(1000, 100, 50);

		materialOptions = {
			size: 1.0,
			transparency: true,
			opacity: 0.7
		};

		starStuff = new THREE.PointCloudMaterial(materialOptions);

	for (var i = 0; i < starQty; i++) {

		var starVertex = new THREE.Vector3();
		starVertex.x = Math.random() * 2000 - 1000;
		starVertex.y = Math.random() * 2000 - 1000;
		starVertex.z = Math.random() * 2000 - 1000;

		geometry.vertices.push(starVertex);

	}

	stars = new THREE.PointCloud(geometry, starStuff);
	scene.add(stars);
}

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
