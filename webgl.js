var renderer = initRenderer();
var scene = initScene();
var camera = initCamera();

var dx = 5;

initLights();
initObjects();

function runAnimations() {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    cube.rotation.z += 0.1;

    if (sphere.position.x > 50 ||  sphere.position.x < -50) {
        dx *= -1;
    }
    sphere.position.x += dx;
}

function initLights() {
    var ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // set its position
    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set(10, 50, 130);
    scene.add(light);
}

function initObjects() {
    cube = new THREE.Mesh(
    new THREE.BoxGeometry(50,50,50),
    new THREE.MeshLambertMaterial( { color: 0x00ff00 } ));
    cube.position.x = 100;
    scene.add(cube);

    sphere = new THREE.Mesh(
    new THREE.SphereGeometry(30, 16, 16),
    new THREE.MeshLambertMaterial( { color: 0xCC0000 } ));
    scene.add(sphere);
}

function render() {
    requestAnimationFrame(render);
    runAnimations();

    renderer.render(scene, camera);
}
render();
