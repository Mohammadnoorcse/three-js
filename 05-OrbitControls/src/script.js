import * as THREE from "three";
// orbitcontrol using moving item follow the cursor
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};
// custom mouse
const cursor = {
  x:0,
  y:0
}
window.addEventListener("mousemove",(event)=>{
  // console.log(event.clientY)
  cursor.x = event.clientX /sizes.width-0.5;
  cursor.y = -(event.clientY/sizes.height -0.5);
  console.log(cursor.x,cursor.y);
})

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

const control = new OrbitControls(camera,canvas);
control.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime;
//  camera.position.x = cursor.x;
//  camera.position.y = cursor.y;
//  camera.lookAt(mesh.position);
  // Render

  control.update();
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
