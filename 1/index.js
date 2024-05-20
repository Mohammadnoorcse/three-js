// three are 4part of code
// 1.scene
// 2.camera
// 3.code
// 4.render

// scene
const scene = new THREE.Scene();

// camera
const size = {
    width:700,
    height:500
}
const camera = new THREE.PerspectiveCamera( 45, size.width / size.height, 1, 1000 );
camera.position.z=4;
camera.position.x= 2;
scene.add( camera );

// code
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00} );
const box = new THREE.Mesh(geometry,material);

scene.add(box);


//rendering
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({canvas:target});

renderer.setSize(size.width,size.height)
renderer.render(scene,camera);