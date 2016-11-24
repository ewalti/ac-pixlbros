const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const texture = THREE.ImageUtils.loadTexture('/img/AnimusPanorama.jpg');
const material = new THREE.MeshBasicMaterial({map: texture});
const field = new THREE.Mesh(geometry, material);

render();

function render() {
  renderer.render(scene, camera);
}