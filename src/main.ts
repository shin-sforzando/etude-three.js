import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 0.9);
scene.add(pointLight);
const geometry = new THREE.TorusKnotGeometry(2, 0.5, 64, 16, 2, 3);
const material = new THREE.MeshPhongMaterial({ color: 0xa22041 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 10;

function animate() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}
