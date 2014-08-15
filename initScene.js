// set the scene size
var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 1000;

function initCamera() {
    var camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
    scene.add(camera);

    camera.position.z = 500;
    return camera;
}

function initScene() {
    var scene = new THREE.Scene();
    return scene;
}

function initRenderer() {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    return renderer;
}
