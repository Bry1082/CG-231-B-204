var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
var r=15;
var h=r*3; //para que la relacion del cono sea 1:3

var geometry = new THREE.ConeGeometry(r, h, 10);
var material = new THREE.MeshPhongMaterial({ color: 0xCC99FF });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)

			
//Transformaciones  de cono 

cone.position.set(0,0,r+r/2); // Se pone el cono en z
geometry.rotateX(Math.PI/2);  //rota en x 45 grados
geometry.rotateY(Math.PI/2); //rota en y 45 grados

geometry.translate(r+r/2,r,-(r+r/2)); //lo transalada en el eje x 
geometry.rotateZ(-Math.atan(r/h)); //calculo el angulo en radianes para rotarolo



//Transformaciones

//Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();