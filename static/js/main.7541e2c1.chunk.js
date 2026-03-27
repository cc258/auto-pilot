(this["webpackJsonpspace-pilot"]=this["webpackJsonpspace-pilot"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"zap",function(){return z}),n.d(o,"engine",function(){return P}),n.d(o,"engine2",function(){return C}),n.d(o,"bg",function(){return G}),n.d(o,"warp",function(){return E}),n.d(o,"click",function(){return V}),n.d(o,"explosion",function(){return I}),n.d(o,"hit",function(){return F}),n.d(o,"mp3",function(){return B});var r=n(2),s=n.n(r),a=n(16),i=n.n(a),c=(n(31),n(0)),l=n(3),d=n(1);function h(e){let{count:t=2e3}=e;const n=Object(r.useMemo)(()=>{let e=[];for(let n=0;n<t;n++){const t=4e3,n=2*Math.PI*Math.random(),o=Math.acos(2*Math.random()-1),r=t*Math.cos(n)*Math.sin(o)+(4e3*Math.random()-2e3),s=t*Math.sin(n)*Math.sin(o)+(4e3*Math.random()-2e3),a=t*Math.cos(o)+(2e3*Math.random()-1e3);e.push(r),e.push(s),e.push(a)}return new Float32Array(e)},[t]);return Object(d.jsxs)("points",{children:[Object(d.jsx)("bufferGeometry",{children:Object(d.jsx)("bufferAttribute",{attachObject:["attributes","position"],count:n.length/3,array:n,itemSize:3})}),Object(d.jsx)("pointsMaterial",{size:15,sizeAttenuation:!0,color:"white",fog:!1})]})}var u=n.p+"static/media/earth.45ed3b77.jpg",m=n.p+"static/media/moon.27019542.png";function p(){const e=Object(r.useRef)(),[t,n]=Object(l.e)(c.TextureLoader,[u,m]);return Object(d.jsxs)("group",{ref:e,scale:[100,100,100],position:[-500,-500,1e3],children:[Object(d.jsxs)("mesh",{children:[Object(d.jsx)("sphereGeometry",{args:[5,32,32]}),Object(d.jsx)("meshStandardMaterial",{map:t,roughness:1,fog:!1})]}),Object(d.jsxs)("mesh",{position:[5,-5,-5],children:[Object(d.jsx)("sphereGeometry",{args:[.75,32,32]}),Object(d.jsx)("meshStandardMaterial",{roughness:1,map:n,fog:!1})]}),Object(d.jsx)("pointLight",{position:[-5,-5,-5],distance:1e3,intensity:6}),Object(d.jsxs)("mesh",{position:[-30,-10,-60],children:[Object(d.jsx)("sphereGeometry",{args:[4,32,32]}),Object(d.jsx)("meshBasicMaterial",{color:"#FFFF99",fog:!1}),Object(d.jsx)("pointLight",{distance:6100,intensity:50,color:"white"})]})]})}var j=n(25),f=n(9),b=n(19),g=n(26),x=n(27);function O(){const e=Object(r.useRef)(),{scene:t,gl:n,size:o,camera:s}=Object(l.f)();return Object(r.useEffect)(()=>{e.current.setSize(o.width,o.height)},[o]),Object(l.d)(()=>e.current.render(),2),Object(d.jsxs)("effectComposer",{ref:e,args:[n],children:[Object(d.jsx)("renderPass",{attachArray:"passes",scene:t,camera:s}),Object(d.jsx)("unrealBloomPass",{attachArray:"passes",args:[void 0,1.8,1,0]})]})}Object(l.c)({EffectComposer:j.a,ShaderPass:f.a,RenderPass:b.a,UnrealBloomPass:g.a,FilmPass:x.a});var y=n(20),w=n(12),M=n.p+"static/media/laser.373d639d.mp3",v=n.p+"static/media/engine.75bbe12e.mp3",S=n.p+"static/media/engine2.87c3c40a.mp3",k=n.p+"static/media/bg.898c3fe7.mp3",_=n.p+"static/media/warp.1f9bec85.mp3",R=n.p+"static/media/click.db461987.mp3",T=n.p+"static/media/explosion.615cfd43.mp3",A=n.p+"static/media/hit.bdaef842.wav";const B={explosion:T},z=new Audio(M),P=new Audio(v),C=new Audio(S),G=new Audio(k),E=new Audio(_),V=new Audio(R),I=new Audio(T),F=new Audio(A);let D=1;const L=Object(w.a)((e,t)=>{let n,o,r,s=new y.a.GrannyKnot,a=new c.TubeBufferGeometry(s,250,.2,10,!0);const i=new c.Box3;return{sound:!1,camera:void 0,type:"free",points:0,health:100,lasers:[],explosions:[],rocks:U(100,a,150,8,()=>1+2.5*Math.random()),enemies:U(10,a,20,15,1),gridInfo:void 0,mutation:{t:0,position:new c.Vector3,startTime:Date.now(),track:a,scale:15,fov:70,hits:!1,rings:W(30,a),particles:U(150,a,100,1,()=>.5+.8*Math.random()),looptime:4e4,binormal:new c.Vector3,normal:new c.Vector3,clock:new c.Clock(!1),mouse:new c.Vector2(-250,50),dummy:new c.Object3D,ray:new c.Ray,box:new c.Box3},actions:{init(n){const{mutation:s,actions:i}=t(),d=function(e){const t=[],n=200,o=Math.round(window.innerHeight/n),r=Math.round(window.innerWidth/n),s=n/2,a=[];let i=Math.round(o/2)-1,l=Math.round(r/2)-1,d=1;i<0&&(i=0);l<0&&(l=0);for(let h=0;h<o;h++){t[h]=[];for(let o=0;o<r;o++){const r={id:d++,x:o*n+s,y:h*n+s,index:[h,o],hits:[]};r.mouseX=r.x-window.innerWidth/2,r.mouseY=r.y-window.innerHeight/2;const i=r.x/window.innerWidth*2-1,l=-r.y/window.innerHeight*2+1;new c.Vector3(i,l,.5).unproject(e),r.ray=new c.Ray,r.box=new c.Box3,t[h][o]=r,a.push(r)}}return{grid:t,center:t[i][l],centerRowIndex:i,centerColIndex:l,rowLength:o,colLength:r,range:a}}(n);e({camera:n,gridInfo:d}),s.clock.start(),i.toggleSound(t().sound);Object(l.b)(()=>{const{rocks:n,enemies:c,health:l}=t();if(l<=0)return;const d=Date.now(),h=s.t=(d-s.startTime)%s.looptime/s.looptime;s.position=a.parameters.path.getPointAt(h),s.position.multiplyScalar(s.scale);let u=!1;h>.3&&h<.4?u||(u=!0,H(E)):h>.5&&(u=!1);const m=n.filter(i.test),p=c.filter(i.test),j=m.concat(p),f=s.hits;s.hits=j.length,0===f&&s.hits&&H(V);const b=t().lasers;if(s.hits&&b.length&&d-b[b.length-1]<100){const t=j.map(e=>({time:Date.now(),...e}));e(e=>({explosions:[...e.explosions,...t]})),clearTimeout(o),o=setTimeout(()=>{e(e=>({explosions:e.explosions.filter(e=>{let{time:t}=e;return Date.now()-t<=1e3})}))},1e3),e(e=>({points:e.points+100*m.length+200*p.length,rocks:e.rocks.filter(e=>!m.find(t=>t.guid===e.guid)),enemies:e.enemies.filter(e=>!p.find(t=>t.guid===e.guid))}))}if(t().type&&j.some(e=>e.distance<30)){const e={clientX:Math.round(1300*Math.random())+100,clientY:Math.round(400*Math.random())+100};i.updateMouse(e),clearTimeout(r),r=setTimeout(()=>{i.updateMouse({clientX:window.innerWidth/2,clientY:.8*window.innerHeight})},3e3)}j.some(e=>e.distance<15)&&(H(I),e(e=>({health:e.health-1})))})},shoot(){e(e=>({lasers:[...e.lasers,Date.now()]})),clearTimeout(n),n=setTimeout(()=>{e(e=>({lasers:e.lasers.filter(e=>Date.now()-e<=1e3)}))},1e3),H(z,.5)},toggleSound(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!t().sound;e({sound:n}),H(P,1,!0),H(C,.3,!0),H(G,1,!0)},updateMouse(e){let{clientX:n,clientY:o}=e;t().mutation.mouse.set(n-window.innerWidth/2,o-window.innerHeight/2)},test(e){i.min.copy(e.offset),i.max.copy(e.offset),i.expandByScalar(e.size*e.scale),e.hit.set(1e4,1e4,1e4);const n=t().mutation.ray.intersectBox(i,e.hit);return e.distance=t().mutation.ray.origin.distanceTo(e.hit),n},changeType(){e({type:t().type?void 0:"free"})},restart(){e({health:100,points:0,lasers:[],explosions:[],type:"free",rocks:U(100,a,150,8,()=>1+2.5*Math.random()),enemies:U(10,a,20,15,1)})}}}});function U(e,t,n,o,r){return new Array(e).fill().map(()=>{const e=Math.random(),s=t.parameters.path.getPointAt(e);s.multiplyScalar(15);const a=s.clone().add(new c.Vector3(-n+Math.random()*n*2,-n+Math.random()*n*2,-n+Math.random()*n*2)),i=.1+Math.random();return{guid:D++,scale:"function"===typeof r?r():r,size:o,offset:a,pos:s,speed:i,radius:n,t:e,hit:new c.Vector3,distance:1e3}})}function W(e,t){let n=[],o=.4;for(let r=0;r<e;r++){o+=.003;const e=t.parameters.path.getPointAt(o);e.multiplyScalar(15);const r=o*t.tangents.length,s=Math.floor(r),a=t.parameters.path.getPointAt((o+1/t.parameters.path.getLength())%1).multiplyScalar(15),i=(new c.Matrix4).lookAt(e,a,t.binormals[s]);n.push([e.toArray(),i])}return n}function H(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];L.getState().sound?(e.currentTime=0,e.volume=t,e.loop=n,e.play()):e.pause()}var X=L;function Y(){const e=Object(r.useRef)(),{particles:t,dummy:n}=X(e=>e.mutation);return Object(r.useEffect)(()=>{t.forEach((t,o)=>{const{offset:r,scale:s}=t;n.position.copy(r),n.scale.set(s,s,s),n.rotation.set(Math.sin(Math.random())*Math.PI,Math.sin(Math.random())*Math.PI,Math.cos(Math.random())*Math.PI),n.updateMatrix(),e.current.setMatrixAt(o,n.matrix)}),e.current.instanceMatrix.needsUpdate=!0},[]),Object(d.jsxs)("instancedMesh",{ref:e,args:[null,null,t.length],frustumCulled:!1,children:[Object(d.jsx)("coneGeometry",{args:[2,2,3]}),Object(d.jsx)("meshStandardMaterial",{color:"#606060"})]})}var $=n(5);(new c.Box3).setFromCenterAndSize(new c.Vector3(0,0,1),new c.Vector3(3,3,3));new c.MeshBasicMaterial({color:new c.Color("lightblue")}),new c.MeshPhongMaterial({color:new c.Color("black")});var q=n(21);const J=new c.Color("hotpink");function K(){const e=Object(l.e)($.a,"/rock.gltf"),t=(new c.FontLoader).parse(q);return X(e=>e.rocks).map(n=>Object(r.createElement)(N,{...e,key:n.guid,data:n,font:t}))}new c.MeshBasicMaterial({color:J,fog:!1}).color=J;const N=s.a.memo(e=>{let{nodes:t,materials:n,data:o,font:s}=e;const a=Object(r.useRef)(),{clock:i}=X(e=>e.mutation);return Object(l.d)(()=>{const e=Math.cos(i.getElapsedTime()/2*o.speed)*Math.PI;a.current&&a.current.rotation.set(e,e,e)}),Object(d.jsx)("group",{ref:a,position:o.offset,scale:[o.scale,o.scale,o.scale],children:Object(d.jsx)("group",{position:[-.016298329457640648,-.012838120572268963,.24073271453380585],rotation:[3.0093872578726644,.27444228385461117,-.22745113653772078],scale:[20,20,20],children:Object(d.jsx)("mesh",{geometry:t.node_id4_Material_52_0.geometry,material:n.Material_52,"material-roughness":1,"material-metalness":1})})})});function Q(e,t){return{ref:s.a.createRef(),color:e,data:new Array(20).fill().map(()=>[new c.Vector3,new c.Vector3(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1).normalize().multiplyScalar(.75*t)])}}function Z(){return X(e=>e.explosions).map(e=>{let{guid:t,offset:n,scale:o}=e;return Object(d.jsx)(ee,{position:n,scale:.75*o},t)})}function ee(e){let{position:t,scale:n}=e;const s=Object(r.useRef)(),{dummy:a}=X(e=>e.mutation),i=Object(r.useMemo)(()=>[Q("white",.8),Q("orange",.6)],[]);return Object(r.useEffect)(()=>{H(new Audio(o.mp3.explosion),.5)},[]),Object(l.d)(()=>{i.forEach((e,t)=>{let{data:n}=e;if(s.current&&s.current.children){const e=s.current.children[t];n.forEach((t,n)=>{let[o,r]=t;o.add(r),a.position.copy(o),a.updateMatrix(),e.setMatrixAt(n,a.matrix)}),e.material.opacity-=.025,e.instanceMatrix.needsUpdate=!0}})}),Object(d.jsx)("group",{ref:s,position:t,scale:[n,n,n],children:i.map((e,t)=>{let{color:n,data:o}=e;return Object(d.jsxs)("instancedMesh",{args:[null,null,o.length],frustumCulled:!1,children:[Object(d.jsx)("dodecahedronGeometry",{args:[10,0]}),Object(d.jsx)("meshBasicMaterial",{color:n,transparent:!0,opacity:1,fog:!1})]},t)})})}const te=new c.RingBufferGeometry(1,1.01,64),ne=new c.MeshBasicMaterial({color:new c.Color("lightgreen"),side:c.DoubleSide});function oe(){const{rings:e}=X(e=>e.mutation);return e.map((e,t)=>{let[n,o]=e;const r=Math.sin(t/10)*Math.PI/2;return Object(d.jsx)("mesh",{position:n,scale:[30+5*t*r,30+5*t*r,30+5*t*r],onUpdate:e=>e.quaternion.setFromRotationMatrix(o),geometry:te,material:ne},t)})}function re(){const{scale:e,track:t}=X(e=>e.mutation);return Object(d.jsx)("mesh",{scale:[e,e,e],geometry:t,children:Object(d.jsx)("meshBasicMaterial",{color:"indianred"})})}const se=new c.BoxBufferGeometry(1,1,40),ae=new c.Color("lightgreen"),ie=new c.Color("hotpink"),ce=new c.MeshBasicMaterial({color:ae}),le=new c.MeshBasicMaterial({color:ie,fog:!1}),de=new c.Vector3,he=new c.Vector3;function ue(){const{nodes:e}=Object(l.e)($.a,"/ship.gltf"),t=X(e=>e.mutation),n=X(e=>e.health),{clock:o,mouse:s,ray:a}=(X(e=>e.type),t),i=X(e=>e.lasers),h=Object(r.useRef)(),u=Object(r.useRef)(),m=Object(r.useRef)(),p=Object(r.useRef)(),j=Object(r.useRef)(),f=Object(r.useRef)();return Object(l.d)(()=>{if(n<=0)return;h.current.position.z=Math.sin(40*o.getElapsedTime())*Math.PI*.2;const e=.15;h.current.rotation.z=c.MathUtils.lerp(h.current.rotation.z,s.x/500,e),h.current.rotation.x=c.MathUtils.lerp(h.current.rotation.x,-s.y/1200,e),h.current.rotation.y=c.MathUtils.lerp(h.current.rotation.y,-s.x/1200,e),h.current.position.x=c.MathUtils.lerp(h.current.position.x,s.x/10,e),h.current.position.y=c.MathUtils.lerp(h.current.position.y,25+-s.y/10,e),p.current.scale.x=1+Math.sin(200*o.getElapsedTime()),p.current.scale.y=1+Math.sin(200*o.getElapsedTime());for(let t=0;t<i.length;t++){u.current.children[t].position.z-=20}m.current.intensity+=.3*((i.length&&Date.now()-i[i.length-1]<100?20:0)-m.current.intensity),h.current.getWorldPosition(de),h.current.getWorldDirection(he),a.origin.copy(de),a.direction.copy(he.negate()),le.color=t.hits?ae:ie,j.current.visible=!t.hits,f.current.visible=!!t.hits}),n>0&&Object(d.jsxs)("group",{ref:h,children:[Object(d.jsxs)("group",{scale:[3.5,3.5,3.5],children:[Object(d.jsxs)("group",{ref:j,position:[0,0,-300],name:"cross",children:[Object(d.jsx)("mesh",{renderOrder:1e3,material:le,children:Object(d.jsx)("boxGeometry",{args:[20,2,2]})}),Object(d.jsx)("mesh",{renderOrder:1e3,material:le,children:Object(d.jsx)("boxGeometry",{args:[2,20,2]})})]}),Object(d.jsxs)("group",{ref:f,position:[0,0,-300],name:"target",children:[Object(d.jsx)("mesh",{position:[0,20,0],renderOrder:1e3,material:le,children:Object(d.jsx)("boxGeometry",{args:[40,2,2]})}),Object(d.jsx)("mesh",{position:[0,-20,0],renderOrder:1e3,material:le,children:Object(d.jsx)("boxGeometry",{args:[40,2,2]})}),Object(d.jsx)("mesh",{position:[20,0,0],renderOrder:1e3,material:le,children:Object(d.jsx)("boxGeometry",{args:[2,40,2]})}),Object(d.jsx)("mesh",{position:[-20,0,0],renderOrder:1e3,material:le,children:Object(d.jsx)("boxGeometry",{args:[2,40,2]})})]}),Object(d.jsx)("pointLight",{ref:m,position:[0,0,-20],distance:100,intensity:0,color:"lightgreen"}),Object(d.jsx)("group",{ref:u,children:i.map((e,t)=>Object(d.jsxs)("group",{children:[Object(d.jsx)("mesh",{position:[-2.8,0,-.8],geometry:se,material:ce}),Object(d.jsx)("mesh",{position:[2.8,0,-.8],geometry:se,material:ce})]},t))}),Object(d.jsxs)("group",{rotation:[Math.PI/2,Math.PI,0],children:[Object(d.jsx)("mesh",{name:"Renault_(S,_T1)_0",geometry:e["Renault_(S,_T1)_0"].geometry,children:Object(d.jsx)("meshStandardMaterial",{color:"red"})}),Object(d.jsx)("mesh",{name:"Renault_(S,_T1)_1",geometry:e["Renault_(S,_T1)_1"].geometry,children:Object(d.jsx)("meshStandardMaterial",{color:"blue"})}),Object(d.jsx)("mesh",{name:"Renault_(S,_T1)_2",geometry:e["Renault_(S,_T1)_2"].geometry,children:Object(d.jsx)("meshStandardMaterial",{color:"red"})}),Object(d.jsx)("mesh",{name:"Renault_(S,_T1)_3",geometry:e["Renault_(S,_T1)_3"].geometry,children:Object(d.jsx)("meshBasicMaterial",{color:"deepskyblue"})}),Object(d.jsx)("mesh",{name:"Renault_(S,_T1)_4",geometry:e["Renault_(S,_T1)_4"].geometry,children:Object(d.jsx)("meshBasicMaterial",{color:"gray"})}),Object(d.jsx)("mesh",{name:"Renault_(S,_T1)_5",geometry:e["Renault_(S,_T1)_5"].geometry,children:Object(d.jsx)("meshBasicMaterial",{color:"deepskyblue"})})]})]}),Object(d.jsxs)("mesh",{ref:p,scale:[1,1,30],position:[0,1,30],children:[Object(d.jsx)("dodecahedronBufferGeometry",{args:[1.5,0]}),Object(d.jsx)("meshBasicMaterial",{color:"orange"})]})]})}new c.BoxBufferGeometry(1,1,40);const me=new c.Color("lightgreen"),pe=new c.Color("hotpink");new c.MeshBasicMaterial({color:me}),new c.MeshBasicMaterial({color:pe,fog:!1}),new c.Vector3,new c.Vector3;let je=0;function fe(e){let{children:t}=e;const n=Object(r.useRef)(),o=Object(r.useRef)(),s=X(e=>e.mutation),{fov:a,scale:i,binormal:c,normal:h,track:u,mouse:m}=s,{camera:p}=Object(l.f)();return Object(l.d)(()=>{const e=s.t,t=s.position.clone(),o=u.tangents.length,r=e*o,l=Math.floor(r),d=(l+1)%o;c.subVectors(u.binormals[d],u.binormals[l]),c.multiplyScalar(r-l).add(u.binormals[l]);const j=u.parameters.path.getTangentAt(e);je+=.05*(Math.max(15,15+-m.y/20)-je),h.copy(c).cross(j),t.add(h.clone().multiplyScalar(je)),p.position.copy(t);const f=u.parameters.path.getPointAt((e+30/u.parameters.path.getLength())%1).multiplyScalar(i);p.matrix.lookAt(p.position,f,h),p.quaternion.setFromRotationMatrix(p.matrix),p.fov+=.05*((e>.4&&e<.45?120:a)-p.fov),p.updateProjectionMatrix();const b=u.parameters.path.getPointAt((e+1/u.parameters.path.getLength())%1).multiplyScalar(i);n.current.position.copy(b),n.current.quaternion.setFromRotationMatrix(p.matrix)}),Object(d.jsxs)("group",{ref:n,children:[Object(d.jsx)("pointLight",{distance:400,position:[0,100,-420],intensity:5,color:"indianred"}),Object(d.jsx)("group",{ref:o,position:[0,0,-50],children:t})]})}var be=n(6);function ge(){const e=X(e=>e.points),t=X(e=>e.health),n=X(e=>e.sound),o=X(e=>e.type),s=X(e=>e.actions.toggleSound),a=X(e=>e.actions.changeType),i=X(e=>e.actions),c=Object(r.useRef)(t),l=Object(r.useRef)();Object(r.useEffect)(()=>{c.current=t},[t]),Object(r.useEffect)(()=>{let e=Date.now();const t=setInterval(()=>{if(!c.current)return e=Date.now(),void(l.current.innerText="0.0");l.current.innerText=((Date.now()-e)/1e3).toFixed(1)},100);return()=>clearInterval(t)},[]);Object(r.useMemo)(()=>e>=1e3?(e/1e3).toFixed(1)+"K":e,[e]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(Oe,{onClick:()=>s(),children:["sound",Object(d.jsx)("br",{}),n?"off":"on"]}),Object(d.jsxs)(we,{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("span",{ref:l,children:"0.0"}),Object(d.jsx)("span",{style:{fontSize:28,marginLeft:10},children:"s"})]}),Object(d.jsxs)("div",{className:"health",style:{width:t+"%"},children:[t,"%\xa0"]})]}),t<=0&&Object(d.jsxs)(Me,{children:[Object(d.jsx)("h1",{style:{marginBottom:10},children:"GAME OVER"}),Object(d.jsx)("span",{style:{cursor:"pointer"},onClick:()=>{i.restart()},children:"RESTART"})]}),t&&Object(d.jsx)(ye,{onClick:e=>{e.preventDefault(),e.stopPropagation(),a()},children:o?"> Stop Auto pilot":"> Start Auto pilot"}),Object(d.jsx)(ve,{})]})}const xe=be.b`
  font-family: 'Teko', sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  pointer-events: none;
  color: indianred;
`,Oe=be.c.div`
  ${xe}
  top: 40px;
  left: 50px;
  font-size: 2em;
  transform: skew(5deg, 5deg);
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`,ye=be.c.div`
  ${xe}
  bottom: 40px;
  left: 50px;
  font-size: 2em;
  // transform: skew(5deg, 5deg);
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`,we=be.c.div`
  ${xe}
  top: 40px;
  right: 50px;
  text-align: right;
  transform: skew(-5deg, -5deg);
  width: 200px;
  .health {
    color: #fff;
    font-size: 40px;
    line-height: 40px;
    height: 40px;
  }
  & > h2 {
    margin: 0;
    font-size: 4em;
    line-height: 1em;
  }
  & > div {
    height: 2em;
    width: 100%;
    background: indianred;
  }
  @media only screen and (max-width: 900px) {
    bottom: 30px;
    & > h1 {
      font-size: 6em !important;
    }
    & > h2 {
      font-size: 3em !important;
    }
  }
`,Me=be.c.div`
  ${xe}
  top: 50%;
  left: 50%;
  font-size: 8em;
  transform: translate(-50%, -50%);
  pointer-events: all;
  white-space: nowrap;
  text-align: center;
  span {
    font-size: 0.6em;
  }

  @media only screen and (max-width: 900px) {
    font-size: 4em;
  }
`,ve=be.a`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }

  #root {
    overflow: auto;
    padding: 0px;
  }

  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: black;
    background: white;
  }
`;function Se(){const{fov:e}=X(e=>e.mutation),t=X(e=>e.actions),n=X(e=>e.health);X(e=>e.type);return Object(d.jsxs)("div",{onPointerMove:t.updateMouse,onClick:n?t.shoot:void 0,children:[Object(d.jsxs)(l.a,{linear:!0,mode:"concurrent",dpr:[1,1.5],gl:{antialias:!1},camera:{position:[0,0,2e3],near:.01,far:1e4,fov:e},onCreated:e=>{let{gl:n,camera:o}=e;t.init(o),n.setClearColor(new c.Color("#020209"))},children:[Object(d.jsx)("fog",{attach:"fog",args:["#070710",100,700]}),Object(d.jsx)("ambientLight",{intensity:.25}),Object(d.jsx)(h,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(re,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(oe,{}),Object(d.jsxs)(r.Suspense,{fallback:null,children:[Object(d.jsx)(K,{}),Object(d.jsx)(p,{}),Object(d.jsx)(fe,{children:Object(d.jsx)(ue,{})})]}),Object(d.jsx)(O,{})]}),Object(d.jsx)(ge,{})]})}i.a.render(Object(d.jsx)(Se,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7541e2c1.chunk.js.map