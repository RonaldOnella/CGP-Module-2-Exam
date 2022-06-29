import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, //FOV
    window.innerWidth / innerHeight, //aspect Ratio
    0.1, //near
    2000 //far
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-4.092,2.333,-3.212);

const light = new THREE.PointLight( 0xffffff, 2, 100 );
light.position.set( 0, 9.119, 0 );
light.shadow.mapSize.width = 2048; 
light.shadow.mapSize.height = 2048; 
light.shadow.camera.near = 0.5; 
light.shadow.camera.far = 500; 
light.shadow.focus = 1

light.castShadow = true;
scene.add( light );



camera.position.set(10.267,8.340,5.866);
  
scene.add(camera);

let box =new THREE.BoxGeometry(1,1,1)
let cylinder = new THREE.CylinderGeometry(1,1,1)
let sphere = new THREE.SphereGeometry(1,32,16);
let plane = new THREE.PlaneGeometry(1,1,1);


//room

let floorMat = new THREE.MeshStandardMaterial( {color: 0xD2691E} );
let floor = new THREE.Mesh( box, floorMat );
floor.scale.set(21.426, 0.345, 12.474);
floor.recieveShadow = true;
floor.position.set(-0, -0.013, 0);
scene.add(floor);

let wallMesh = new THREE.MeshStandardMaterial ( {color: 0x9ba9ff} );
let wall1 = new THREE.Mesh(box, wallMesh);
wall1.scale.set(0.345, 7.943, 12.474);
wall1.position.set(-10.539, 3.816, 0);
wall1.castShadow = true;
wall1.recieveShadow = true;

let wall2 = new THREE.Mesh(box, wallMesh);
wall2.position.set(10.539, 3.816, 0);
wall2.scale.set(0.345, 7.943, 12.474);


let wall3 = new THREE.Mesh(box, wallMesh);
wall3.position.set( 0, 6.952, -6.085);
wall3.scale.set(21.426, 1.658, 0.345);
wall3.castShadow = true;

let wall4 = new THREE.Mesh(box, wallMesh);
wall4.position.set( 0, 5.307, -6.085);
wall4.scale.set(-3.082, 4.887, 0.345);
wall4.castShadow = true;

let wall5 = new THREE.Mesh(box, wallMesh);
wall5.position.set( -10.06, 5.307, -6.085);
wall5.scale.set(-1.305, 4.887, 0.345);
wall5.castShadow = true;

let wall6 = new THREE.Mesh(box, wallMesh);
wall6.position.set( 10.06, 5.307, -6.085);
wall6.scale.set(-1.305, 4.887, 0.345);
wall6.castShadow = true;

let wall7 = new THREE.Mesh(box, wallMesh);
wall7.position.set( -3.535, 3.845, 6.078);
wall7.scale.set(14.41, 7.943, 0.345);
wall7.castShadow = true;

let wall8 = new THREE.Mesh(box, wallMesh);
wall8.position.set( 9.021, 3.845, 6.078);
wall8.scale.set(3.376, 7.943, 0.345);
wall8.castShadow = true;

let wall9 = new THREE.Mesh(box, wallMesh);
wall9.position.set( 0, 7.006, 6.078);
wall9.scale.set(21.426, 1.658, 0.345);
wall9.castShadow = true;

let wall10 = new THREE.Mesh(box, wallMesh);
wall10.position.set( 0, 1.492, -6.085);
wall10.scale.set(21.426, 3.344, 0.345);
wall10.castShadow = true;

wall2.castShadow = true;
wall2.receiveShadow = true;
wall3.receiveShadow = true;
wall4.receiveShadow = true;
wall5.receiveShadow = true;
wall6.receiveShadow = true;
wall7.receiveShadow = true;
wall8.receiveShadow = true;
wall9.receiveShadow = true;
wall10.receiveShadow = true;

scene.add(wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10);


let windowMesh = new THREE.MeshPhysicalMaterial({color: 0xd1f1f5, transmission: 0.5, opacity: 0.5, transparent: true});
let window1 = new THREE.Mesh(box,windowMesh);
window1.scale.set(21.426, 7.943, 0.074);
window1.position.set (0, 3.836, -6.085);

scene.add(window1);


//bed
let bed = new THREE.Group()

let mMesh = new THREE.MeshPhysicalMaterial ( {color: 0xfcfbf7});
let mattressBase = new THREE.Mesh(box,mMesh);
mattressBase.scale.set(9.013,0.953,4.743);
mattressBase.position.set(-5.854,1.811,-3.199);
mattressBase.receiveShadow = true;
mattressBase.castShadow = true;

let mSide1 = new THREE.Mesh(cylinder,mMesh)
let mSide2 = new THREE.Mesh(cylinder,mMesh)
let mSide3 = new THREE.Mesh(cylinder,mMesh)
let mSide4 = new THREE.Mesh(cylinder,mMesh)

mSide1.position.set(-5.843, 1.807, -0.843);
mSide2.position.set(-1.353,1.807,-3.185)
mSide3.position.set(-5.843, 1.807, -5.548);
mSide4.position.set(-10.340,1.805,-3.185);

mSide1.rotation.set(0,0,90*Math.PI/180);
mSide2.rotation.set(90*Math.PI/180,90*Math.PI/180,0)
mSide3.rotation.set(0,0,90*Math.PI/180);
mSide4.rotation.set(90*Math.PI/180,90*Math.PI/180,0);

mSide1.scale.set(0.483,9.013,0.193);
mSide2.scale.set(0.483,4.743,0.193);
mSide3.scale.set(0.483,9.013,0.193)
mSide4.scale.set(0.483,4.743,0.193);

mSide1.castShadow = true;
mSide1.receiveShadow = true;
mSide2.castShadow = true;
mSide2.receiveShadow = true;
mSide3.castShadow = true;
mSide3.receiveShadow = true;
mSide4.castShadow = true;
mSide4.receiveShadow = true;

let bFrameMesh = new THREE.MeshPhysicalMaterial( {color: 0x4d190e});
let f1 = new THREE.Mesh(box,bFrameMesh);
let f2 = new THREE.Mesh(box,bFrameMesh);
let f3 = new THREE.Mesh(box,bFrameMesh);
let f4 = new THREE.Mesh(box,bFrameMesh);
let f5 = new THREE.Mesh(box,bFrameMesh);
let f6 = new THREE.Mesh(box,bFrameMesh);
let f7 = new THREE.Mesh(box,bFrameMesh);

f1.scale.set(0.528,2.744,0.605);
f2.scale.set(0.528,2.744,0.605);
f3.scale.set(0.528,2.744,0.605);
f4.scale.set(0.528,2.744,0.605);
f5.scale.set(9.537,0.277,5.111);
f6.scale.set(0.123,2.313,5.028);
f7.scale.set(0.123,1.26,5.028);

f1.position.set(-10.711,1.425,-0.769);
f2.position.set(-10.711,1.425,-5.554);
f3.position.set(-0.959,1.425,-0.769);
f4.position.set(-0.959,1.425,-5.554);
f5.position.set(-5.854,1.441,-3.199);
f6.position.set(-10.541,1.446,-3.199);
f7.position.set(-1.137,1.097,-3.199);

f1.castShadow = true;
f1.receiveShadow = true;
f2.castShadow = true;
f2.receiveShadow = true;
f3.castShadow = true;
f3.receiveShadow = true;
f4.castShadow = true;
f4.receiveShadow = true;
f5.castShadow = true;
f5.receiveShadow = true;
f6.castShadow = true;
f6.receiveShadow = true;
f7.castShadow = true;
f7.receiveShadow = true;

let extrMesh = new THREE.MeshPhysicalMaterial( {color: 0x89baf3})
let extrMesh2 = new THREE.MeshPhysicalMaterial( {color: 0x0a6ad9})
let ex1 = new THREE.Mesh(box,extrMesh);
let ex2 = new THREE.Mesh(box,extrMesh);
let ex3 = new THREE.Mesh(box,extrMesh);
let ex4 = new THREE.Mesh(box,extrMesh);
let ex5 = new THREE.Mesh(box,extrMesh);
let ex6 = new THREE.Mesh(box,extrMesh);
let ex7 = new THREE.Mesh(box,extrMesh);
let ex8 = new THREE.Mesh(box,extrMesh);
let ex9 = new THREE.Mesh(box,extrMesh2)
let ex10 = new THREE.Mesh(box,extrMesh2)
let ex11 = new THREE.Mesh(box,extrMesh2)
let ex12 = new THREE.Mesh(box,extrMesh2)
let ex13 = new THREE.Mesh(box,extrMesh2)
let ex14 = new THREE.Mesh(box,extrMesh2)
let ex15 = new THREE.Mesh(box,extrMesh2)
let ex16 = new THREE.Mesh(box,extrMesh2)

ex1.position.set(-7.935,2.313,-4.126);
ex2.position.set(-7.719,2.313,-2.344);
ex3.position.set(-7.294,2.313,-1.589);
ex4.position.set(-7.074,2.345,-1.011);
ex5.position.set(-7.069,2.243,-0.698);
ex6.position.set(-7.0769,1.459,-0.618);
ex7.position.set(-7.933,2.249,-5.690);
ex8.position.set(-7.941,1.459,-5.771);
ex9.position.set(-4.092,2.207,-0.730);
ex10.position.set(-4.092,2.333,-3.212);
ex11.position.set(-4.183,1.484,-5.760);
ex12.position.set(-4.135,2.215,-5.680);
ex13.position.set(-4.692,2.333,-3.726);
ex14.position.set(-4.092,1.484,-0.650);
ex15.position.set(-1.132,2.226,-3.067);
ex16.position.set(-1.052,1.922,-3.164);

ex2.rotation.set(0,28.49*Math.PI/180,0);
ex3.rotation.set(0,28.49*Math.PI/180,0);
ex5.rotation.set(56.74*Math.PI/180,0,0);
ex6.rotation.set(90*Math.PI/180,0,0);
ex7.rotation.set(-56.74*Math.PI/180,0,0);
ex8.rotation.set(90**Math.PI/180,0,0);
ex9.rotation.set(56.74*Math.PI/180,0,0);
ex11.rotation.set(90*Math.PI/180,0,0);
ex12.rotation.set(-56.74*Math.PI/180,0,0);
ex14.rotation.set(90*Math.PI/180,0,0);
ex15.rotation.set(89.92*Math.PI/180,33.26*Math.PI/180,-89.85*Math.PI/180);
ex16.rotation.set(90*Math.PI/180,0,90*Math.PI/180);

ex1.scale.set(1,0.16,3.006);
ex2.scale.set(1,0.16,1.182);
ex3.scale.set(1,0.16,1.182);
ex4.scale.set(1,0.088, 0.535);
ex5.scale.set(1,0.079,0.3);
ex6.scale.set(1,0.066,1.356);
ex7.scale.set(1,0.079,0.3);
ex8.scale.set(1,0.066,1.356);
ex9.scale.set(5.894,0.03,0.3);
ex10.scale.set(5.791,0.03,4.796);
ex11.scale.set(6.612,0.03,1.217);
ex12.scale.set(6.640,0.03,0.3);
ex13.scale.set(5.791,0.03,3.708);
ex14.scale.set(5.753,0.03,1.217);
ex15.scale.set(4.856,0.03,0.3);
ex16.scale.set(4.856,0.03,0.367);

let pillow = new THREE.Mesh(cylinder,extrMesh2);
pillow.scale.set(0.256,3.861,1);
pillow.position.set(-9.626,2.6,-3.199);
pillow.rotation.set(90*Math.PI/180,76.29*Math.PI/180,0);

pillow.castShadow = true;
pillow.castShadow = true;
bed.add(mattressBase,mSide1,mSide2,mSide3,mSide4,f1,f2,f3,f4,f5,f6,f7,ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,ex11,ex12,ex13,ex14,ex15,ex16,pillow)
bed.position.set(0.639,0,0)

scene.add(bed);


//Computer Table

let table = new THREE.MeshPhysicalMaterial( {color: 0x435162})
let table2 = new THREE.MeshPhysicalMaterial( {color: 0x91a4bb})
let ttop = new THREE.Mesh(box,table2);
ttop.position.set(5.594,2.806,-4.465);
ttop.scale.set(6.732,0.161,2.567);
let l1 = new THREE.Mesh(box,table);
let l2 = new THREE.Mesh(box,table);
let l3 = new THREE.Mesh(box,table);
let l4 = new THREE.Mesh(box,table);
let l5 = new THREE.Mesh(box,table);
let l6 = new THREE.Mesh(box,table);
let l7 = new THREE.Mesh(box,table);
let l8 = new THREE.Mesh(box,table);
let l9 = new THREE.Mesh(box,table);
let l10 = new THREE.Mesh(box,table);

l1.position.set(2.510,2.308,-5.355);
l2.position.set(2.510,1.785,-4.619);
l3.position.set(2.510,0.958,-4.480);
l4.position.set(2.510,0.559, -4.651);
l5.position.set(2.510, 0.397,-4.636);
l6.position.set(2.510,2.308,-5.355);
l7.position.set(2.510,1.785,-4.619);
l8.position.set(2.510,0.958,-4.480);
l9.position.set(2.510,0.559, -4.651);
l10.position.set(2.510, 0.397,-4.636);

l2.rotation.set(-65.10*Math.PI/180,0,0);
l3.rotation.set(50.36*Math.PI/180,0,0);
l7.rotation.set(-65.10*Math.PI/180,0,0);
l8.rotation.set(50.36*Math.PI/180,0,0);

l1.scale.set(0.161,1,1);
l2.scale.set(0.161,2.245,1);
l3.scale.set(0.161,0.922,1);
l4.scale.set(0.161,1,1);
l5.scale.set(0.161,0.494,2.306);
l6.scale.set(0.161,1,1);
l7.scale.set(0.161,2.245,1);
l8.scale.set(0.161,0.922,1);
l9.scale.set(0.161,1,1);
l10.scale.set(0.161,0.494,2.306);

let rlegs = new THREE.Group();
rlegs.add(l6,l7,l8,l9,l10);
let legs = new THREE.Group();
legs.add(rlegs,l1,l2,l3,l4,l5);

rlegs.position.set(6.186,0,0);
legs.position.set(0,0,0.168);

l1.castShadow = true;
l1.receiveShadow = true;
l2.castShadow = true;
l2.receiveShadow = true;
l3.castShadow = true;
l3.receiveShadow = true;
l4.castShadow = true;
l4.receiveShadow = true;
l5.castShadow = true;
l5.receiveShadow = true;
l6.castShadow = true;
l6.receiveShadow = true;
l7.castShadow = true;
l7.receiveShadow = true;
l8.castShadow = true;
l8.receiveShadow = true;
l9.castShadow = true;
l9.receiveShadow = true;
l10.castShadow = true;
l10.receiveShadow = true;

ttop.castShadow = true;
ttop.recieveShadow = true;
scene.add(legs,ttop);

//computer
let comp = new THREE.MeshPhysicalMaterial({color: 0xd9eafe});
let col = new THREE.MeshPhysicalMaterial({color: 0x0a0047});
let mp = new THREE.MeshPhysicalMaterial ({color: 0x00b008});
let screen = new THREE.MeshPhysicalMaterial({color: 0xb8fffb});
let c1 = new THREE.Mesh(box,comp);
let c2 = new THREE.Mesh(box,comp);
let c3 = new THREE.Mesh(cylinder,comp);
let c4 = new THREE.Mesh(box,col);
let c5 = new THREE.Mesh(sphere,col);
let c6 = new THREE.Mesh(box,col);
let c7 = new THREE.Mesh(box, mp);
let c8 = new THREE.Mesh(plane,screen);

c1.position.set(4.174,4.422,-5.009);
c1.scale.set(3.031,1.796,0.096);
c1.rotation.set(0,16.85*Math.PI/180,0);
c2.position.set(4.143,3.293,-5.113);
c2.scale.set(0.530,0.833,0.164);
c2.rotation.set(0,16.85*Math.PI/180,0);
c3.position.set(4.202,2.896,-4.918);
c3.scale.set(1.114,0.049,0.410);
c3.rotation.set(0,16.85*Math.PI/180,0);
c4.position.set(4.527,2.918,-3.844);
c4.scale.set(2.467,0.072,0.967);
c4.rotation.set(0,16.85*Math.PI/180,0);
c5.position.set(6.266,2.910,-4.186);
c5.scale.set(0.176,0.109,0.284);
c6.position.set(3.090, 1.003, -4.210);
c7.scale.set(1,0.023,1);
c7.position.set(6.289, 2.881, -4.115);
c6.scale.set(0.744,1.749,1.203);
c8.position.set(4.174,4.422,-4.958);
c8.rotation.set(0,16.85*Math.PI/180,0);
c8.scale.set(2.782,1.688,1.0);

let on = new THREE.MeshPhysicalMaterial({color: 0x8fff48})
let s1 = new THREE.Mesh (sphere,on)
let s2 = new THREE.Mesh (sphere,on)
let s3 = new THREE.Mesh (sphere,on)
let s4 = new THREE.Mesh (sphere,on)
let s5 = new THREE.Mesh (sphere,on)
let s6 = new THREE.Mesh (sphere,on)

s1.position.set(3.370,1.504,-3.618);
s2.position.set(3.290,1.504,-3.616);
s3.position.set(3.290,1.427,-3.616);
s4.position.set(3.372,1.426,-3.616);
s5.position.set(3.372,1.333,-3.616);
s6.position.set(3.372,1.1237,-3.616);

s2.scale.set(0.02,0.02,0.02)
s3.scale.set(0.02,0.02,0.02)
s4.scale.set(0.02,0.02,0.02)
s1.scale.set(0.02,0.02,0.02)
s5.scale.set(0.02,0.02,0.02)
s6.scale.set(0.02,0.02,0.02)

s1.castShadow=true;
s1.receiveShadow = true;
s2.castShadow=true;
s2.receiveShadow = true;
s3.castShadow=true;
s3.receiveShadow = true;
s4.castShadow=true;
s4.receiveShadow = true;
s5.castShadow=true;
s5.receiveShadow = true;
s6.castShadow=true;
s6.receiveShadow = true;
c1.castShadow=true;
c1.receiveShadow = true;
c2.castShadow=true;
c2.receiveShadow = true;
c3.castShadow=true;
c3.receiveShadow = true;
c4.castShadow=true;
c4.receiveShadow = true;
c5.castShadow=true;
c5.receiveShadow = true;
c6.castShadow=true;
c6.receiveShadow = true;
c7.castShadow=true;
c7.receiveShadow = true;
c8.castShadow=true;
c8.receiveShadow = true;

scene.add(s1,s2,s3,s4,s5,s6,c1,c2,c3,c4,c5,c6,c7,c8);

let b1 = new THREE.Mesh(box,extrMesh2)
let b2 = new THREE.Mesh(box,on)

b1.scale.set(0.682, 0.168, 0.913);
b2.scale.set(0.682, 0.168, 0.913);
b1.rotation.set(11.26*Math.PI/180, -10.86*Math.PI/180, 6.26*Math.PI/180);
b1.position.set(8.045,3.034,-4.040);
b2.rotation.set(0,36.19*Math.PI/180,0);
b2.position.set(8.219,2.945,-4.941);

b1.castShadow=true;
b1.receiveShadow = true;
b2.castShadow=true;
b2.receiveShadow = true;
scene.add(b1,b2);

//chair

let chairMat = new THREE.MeshPhysicalMaterial({color: 0xe5e5e5});
let chairBod = new THREE.MeshPhysicalMaterial({color: 0x3a373e});
let chairA = new THREE.Mesh(cylinder,chairMat);
let chairB = new THREE.Mesh(cylinder, chairMat);
let chairC= new THREE.Mesh(cylinder,table2);
let chairD = new THREE.Mesh(cylinder,chairBod);
let chairE = new THREE.Mesh(box,chairBod);

chairA.position.set(6.914,1.747,-2.599);
chairA.scale.set(1.205,0.161,1.312);
chairB.position.set(7.825,3.345,-2.020);
chairB.rotation.set(0,-22.64*Math.PI/180,90*Math.PI/180);
chairB.scale.set(0.614,0.161,1.003);
chairC.position.set(6.914,0.473,-2.599);
chairC.scale.set(0.879,0.240,0.914);
chairD.position.set(7.301,1.080,-2.413);
chairD.scale.set(0.15,1.487,0.15);
chairE.position.set(7.955,2.433,-2.099);
chairE.rotation.set(0,-22.64*Math.PI/180,0);
chairE.scale.set(0.101,1.415,0.340);

let cha = new THREE.Mesh();
cha.add(chairA,chairB,chairC,chairD,chairE);
cha.position.set(-0.608,-0.253,-0.323);
cha.castShadow = true;
cha.recieveShadow=true;
scene.add(cha);

//Cabinet

let cabBase = new THREE.MeshPhysicalMaterial({color:0x614b00});
let cabOL = new THREE.MeshPhysicalMaterial({color:0x1b1b1b});

let cA = new THREE.Mesh(box,cabBase);
let cB = new THREE.Mesh(box,cabOL);
let cC = new THREE.Mesh(box,cabOL);
let cD = new THREE.Mesh(box,cabOL);
let cE = new THREE.Mesh(box,cabOL);
let cF = new THREE.Mesh(box,cabOL);
let cG = new THREE.Mesh(sphere,cabOL);
let cH = new THREE.Mesh(sphere,cabOL)

cA.position.set(-9.508,3.903,2.339);
cA.scale.set(1.233,7.540,4.551);
cB.position.set(-8.918,0.855,2.339);
cB.rotation.set(90*Math.PI/180,0,0);
cB.scale.set(0.153,4.202,0.157);
cC.position.set(-8.918,7.469,2.339);
cC.rotation.set(90*Math.PI/180,0,0);
cC.scale.set(0.154,4.202,0.157);
cD.position.set(-8.918,4.162,0.205);
cD.scale.set(0.154,6.789,0.157);
cE.position.set(-8.918,4.162,4.495);
cE.scale.set(0.154,6.789,0.157);
cF.position.set(-8.918,4.162,2.339);
cF.scale.set(0.153,6.789,0.157);
cG.position.set(-8.892,4.772,2.736);
cG.scale.set(0.1,0.1,0.1);
cH.position.set(-8.892,4.772,1.914);
cH.scale.set(0.1,0.1,0.1);

cA.castShadow=true;
cB.receiveShadow = true;
cB.castShadow=true;
cA.receiveShadow = true;
cC.castShadow=true;
cC.receiveShadow = true;
cF.castShadow=true;
cF.receiveShadow = true;
cD.castShadow=true;
cD.receiveShadow = true;
cE.castShadow=true;
cE.receiveShadow = true;
cG.castShadow=true;
cG.receiveShadow = true;
cH.castShadow=true;
cH.receiveShadow = true;

scene.add(cA,cB,cC,cD,cE,cF,cG,cH);

//rug
let rug = new THREE.Group();
let rMat1 = new THREE.MeshPhysicalMaterial({color:0xb15645})
let rMat2 = new THREE.MeshPhysicalMaterial({color:0x4b1b13})
let r1 = new THREE.Mesh(cylinder,rMat1);
let r2 = new THREE.Mesh(cylinder,rMat2);
r1.position.set(0,0,0)
r1.scale.set(6.521,0.086,4.728);
r2.position.set(0,0.05,0);
r2.scale.set(4.386,0.086,2.762);

rug.add(r1,r2);
rug.position.set(0,0.17,0)
r1.recieveShadow = true;
r1.castShadow= true;
r2.recieveShadow = true;
r2.castShadow= true;
scene.add(rug);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}


animate();