// there are 4 properties to transform objects in our scene
// 1.position(to move to object)
// 2.scale(to resize to object)
// 3.rotation (to rotate the object)


import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.7;
mesh.position.y = -.6;
mesh.position.z=1;

// length from scene center to object is position length
// console.log(mesh.position.length());
// // the idea for length between two object or camera and scene
// console.log(mesh.position.distanceTo(camera.position))

// scale

// mesh.scale.set(2,0,0.25);

// rotation

mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.z = Math.PI * 0.25;
mesh.rotation.x = Math.PI * 0.25;

scene.add(mesh);

// const axesHelper = new THREE.AxesHelper( 2 );
// scene.add( axesHelper );

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
