'use strict';

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var texture = THREE.ImageUtils.loadTexture('/img/AnimusPanorama.jpg');
var material = new THREE.MeshBasicMaterial({ map: texture });
var field = new THREE.Mesh(geometry, material);

render();

function render() {
  renderer.render(scene, camera);
}
//# sourceMappingURL=app.js.map
