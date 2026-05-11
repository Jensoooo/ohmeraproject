

const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>60));
const hbg=document.getElementById('hamburger'),navLinks=document.getElementById('nav-links');
hbg.addEventListener('click',()=>{hbg.classList.toggle('open');navLinks.classList.toggle('open');});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{hbg.classList.remove('open');navLinks.classList.remove('open');}));
function openModal(id){document.getElementById('modal-'+id).classList.add('active');document.body.style.overflow='hidden';}
function closeModal(id){document.getElementById('modal-'+id).classList.remove('active');document.body.style.overflow='';}
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o){o.classList.remove('active');document.body.style.overflow=''}}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-overlay.active').forEach(o=>{o.classList.remove('active');document.body.style.overflow='';});});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));


// ── SHARED BOLT ──
function bolt(x1,y1,x2,y2,d){
  if(d===0)return[[x1,y1],[x2,y2]];
  const mx=(x1+x2)/2+(Math.random()-.5)*62,my=(y1+y2)/2+(Math.random()-.5)*32;
  return[...bolt(x1,y1,mx,my,d-1),...bolt(mx,my,x2,y2,d-1)];
}
function drawBolt(ctx,pts,op,w,col){
  if(!pts||pts.length<2)return;
  ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);
  pts.forEach(([x,y])=>ctx.lineTo(x,y));
  ctx.strokeStyle=`rgba(${col},${op})`;ctx.lineWidth=w;
  ctx.shadowColor=`rgba(${col},1)`;ctx.shadowBlur=13;ctx.stroke();ctx.shadowBlur=0;
}

// ── SCROLL LIGHTNING (fixed overlay) ──
;(function(){
  const cv=document.createElement('canvas');
  cv.style.cssText='position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;';
  document.body.appendChild(cv);
  const ctx=cv.getContext('2d');
  function sz(){cv.width=window.innerWidth;cv.height=window.innerHeight;}sz();
  window.addEventListener('resize',sz);
  let bolts=[],lastY=window.scrollY,cd=0;
  window.addEventListener('scroll',()=>{
    const ny=window.scrollY,vel=Math.abs(ny-lastY);lastY=ny;cd--;
    const heroRect=document.getElementById('hero').getBoundingClientRect();
    if(heroRect.bottom<=0){bolts=[];ctx.clearRect(0,0,cv.width,cv.height);ticking=false;return;}
  const heroVisible=heroRect.bottom>120;
    if(!heroVisible){bolts=[];return;}
    if(vel>4&&cd<=0){
      const sx=Math.random()*cv.width;
      bolts.push({pts:bolt(sx,0,sx+(Math.random()-.5)*180,Math.random()*cv.height*.65,4),life:22,max:22});
      if(Math.random()<.55)bolts.push({pts:bolt(Math.random()*cv.width,0,Math.random()*cv.width,Math.random()*cv.height*.55,3),life:14,max:14});
      if(vel>18&&Math.random()<.4)bolts.push({pts:bolt(Math.random()*cv.width,0,Math.random()*cv.width,Math.random()*cv.height*.7,4),life:18,max:18});
      cd=Math.max(2,10-vel*.25);
    }
  },{passive:true});
  (function tick(){
    ctx.clearRect(0,0,cv.width,cv.height);
    bolts=bolts.filter(b=>b.life>0);
    bolts.forEach(b=>{drawBolt(ctx,b.pts,(b.life/b.max)*.82,(b.life/b.max)*2.2,'45,212,191');b.life--;});
    requestAnimationFrame(tick);
  })();
})();

// ── HERO CANVAS (A improved + D) ──
;(function(){
  const c=document.getElementById('hero-canvas'),ctx=c.getContext('2d');
  function sz(){c.width=c.offsetWidth;c.height=c.offsetHeight;}sz();window.addEventListener('resize',sz);
  let mx=-1,my=-1,lx=0,ly=0,bCd=0,iCd=130,sup=0,blues=[],strikes=[];
  let bgPts=[];
  function initBg(){bgPts=Array.from({length:75},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.42,r:Math.random()*1.7+.4,col:Math.random()>.5?'124,58,237':'20,184,166',o:Math.random()*.38+.12,life:Math.random()*200+100,max:300}));}
  initBg();window.addEventListener('resize',initBg);
  const hero=document.getElementById('hero');
  hero.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
  hero.addEventListener('mouseleave',()=>{mx=-1;my=-1;});
  hero.addEventListener('touchmove',e=>{const t=e.touches[0],r=c.getBoundingClientRect();mx=t.clientX-r.left;my=t.clientY-r.top;},{passive:true});
  hero.addEventListener('touchend',()=>{mx=-1;my=-1;});
  hero.addEventListener('click',e=>{
    const r=c.getBoundingClientRect();const cx=e.clientX-r.left,cy=e.clientY-r.top;
    const sx=cx+(Math.random()-.5)*80,sy=Math.random()<.7?0:-(Math.random()*30);
    strikes.push({pts:bolt(sx,sy,cx,cy,5),life:40,max:40,big:true,col:'180,140,255'});
    for(let i=0;i<3;i++)strikes.push({pts:bolt(cx+(Math.random()-.5)*100,Math.random()*15,cx+(Math.random()-.5)*50,cy*(.08+Math.random()*.75),3),life:22,max:22,big:false,col:'45,212,191'});
    strikes.push({flash:true,x:cx,y:cy,life:22,max:22});
    sup=58;
  });
  function spawnBolt(tx,ty){
    const t=Math.random();let sx,sy;
    if(t<.42){sx=Math.random()*c.width;sy=-5;}else if(t<.62){sx=-5;sy=Math.random()*c.height*.75;}else if(t<.82){sx=c.width+5;sy=Math.random()*c.height*.75;}else{sx=Math.random()<.5?-20:c.width+20;sy=Math.random()*c.height*.4;}
    return{pts:bolt(sx,sy,tx+(Math.random()-.5)*38,ty+(Math.random()-.5)*28,t<.82?4:3),life:20+Math.random()*8|0,max:26};
  }
  (function tick(){
    ctx.clearRect(0,0,c.width,c.height);
    for(let i=0;i<bgPts.length;i++)for(let j=i+1;j<bgPts.length;j++){const dx=bgPts[i].x-bgPts[j].x,dy=bgPts[i].y-bgPts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<130){ctx.beginPath();ctx.moveTo(bgPts[i].x,bgPts[i].y);ctx.lineTo(bgPts[j].x,bgPts[j].y);ctx.strokeStyle=`rgba(124,58,237,${(1-d/130)*.11})`;ctx.lineWidth=.5;ctx.stroke();}}
    bgPts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.life--;if(p.life<=0||p.x<0||p.x>c.width||p.y<0||p.y>c.height){p.x=Math.random()*c.width;p.y=Math.random()*c.height;p.life=p.max;}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${p.col},${p.o*(p.life/p.max)})`;ctx.fill();});
    if(sup>0)sup--;
    if(mx<0&&sup<=0){iCd--;if(iCd<=0){blues.push(spawnBolt(c.width*.15+Math.random()*c.width*.7,c.height*.2+Math.random()*c.height*.55));iCd=130+Math.random()*80;}}
    if(mx>=0&&sup<=0){const spd=Math.sqrt((mx-lx)**2+(my-ly)**2);bCd--;if(bCd<=0&&(spd>3||Math.random()<.012)){blues.push(spawnBolt(mx,my));if(Math.random()<.4)blues.push(spawnBolt(mx,my));bCd=Math.max(8,22-spd*.2);}lx=mx;ly=my;const g=ctx.createRadialGradient(mx,my,0,mx,my,38);g.addColorStop(0,'rgba(45,212,191,.12)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);}
    blues=blues.filter(b=>b.life>0);blues.forEach(b=>{const op=(b.life/b.max)*(sup>0?.2:1);drawBolt(ctx,b.pts,op*.85,op*2.4,'45,212,191');b.life--;});
    strikes=strikes.filter(s=>s.life>0);strikes.forEach(s=>{const op=s.life/s.max;if(s.flash){const g=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,65*op);g.addColorStop(0,`rgba(215,185,255,${op*.95})`);g.addColorStop(.5,`rgba(124,58,237,${op*.55})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);}else{drawBolt(ctx,s.pts,op*(s.big?.9:.5),op*(s.big?3.2:1.5),s.col);}s.life--;});
    requestAnimationFrame(tick);
  })();
})();

// ── CARD B+D EFFECT ──
function attachBD(card){
  const cv=document.createElement('canvas');
  cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;border-radius:inherit;z-index:0;';
  card.insertBefore(cv,card.firstChild);
  const ctx=cv.getContext('2d');
  let mx=-1,my=-1,strikes=[];
  const RP=20,AR=85,RM=26;
  function resize(){cv.width=card.offsetWidth;cv.height=card.offsetHeight;}resize();
  const pts=Array.from({length:60},()=>({
    x:Math.random()*cv.width,y:Math.random()*cv.height,
    vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,
    r:Math.random()*1.4+.5,
    col:Math.random()>.5?'124,58,237':'20,184,166',
    o:Math.random()*.45+.18,
    wx:(Math.random()-.5)*.22,wy:(Math.random()-.5)*.22,wt:Math.floor(Math.random()*80)
  }));
  function setMouse(e,el){const r=el.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;}
  function setTouch(e,el){const t=e.touches[0],r=el.getBoundingClientRect();mx=t.clientX-r.left;my=t.clientY-r.top;}
  card.addEventListener('mouseenter',()=>resize());
  card.addEventListener('mouseleave',()=>{mx=-1;my=-1;});
  card.addEventListener('mousemove',e=>setMouse(e,card));
  card.addEventListener('touchstart',e=>{resize();setTouch(e,card);},{passive:true});
  card.addEventListener('touchmove',e=>setTouch(e,card),{passive:true});
  card.addEventListener('touchend',()=>{mx=-1;my=-1;});
  card.addEventListener('click',e=>{
    const r=card.getBoundingClientRect();const cx=e.clientX-r.left,cy=e.clientY-r.top;
    strikes.push({pts:bolt(cx+(Math.random()-.5)*cv.width*.65,0,cx,cy,4),life:30,max:30});
    strikes.push({flash:true,x:cx,y:cy,life:16,max:16});
  });
  (function tick(){
    ctx.clearRect(0,0,cv.width,cv.height);
    // inter-particle repulsion
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy)||1;if(d<RP){const f=((RP-d)/RP)*.85,fx=dx/d*f,fy=dy/d*f;pts[i].vx+=fx*.1;pts[i].vy+=fy*.1;pts[j].vx-=fx*.1;pts[j].vy-=fy*.1;}}
    pts.forEach(p=>{
      p.wt--;if(p.wt<=0){p.wx=(Math.random()-.5)*.22;p.wy=(Math.random()-.5)*.22;p.wt=60+Math.random()*80|0;}
      p.vx+=p.wx*.05;p.vy+=p.wy*.05;
      if(mx>=0){const dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy)||1;if(d<RM){const f=((RM-d)/RM)*4.5;p.vx-=(dx/d)*f*.22;p.vy-=(dy/d)*f*.22;p.vx+=(Math.random()-.5)*.8;p.vy+=(Math.random()-.5)*.8;}else if(d<AR){const t=(d-RM)/(AR-RM);p.vx+=(dx/d)*t*3.5*.1;p.vy+=(dy/d)*t*3.5*.1;p.vx+=(Math.random()-.5)*.15;p.vy+=(Math.random()-.5)*.15;}}
      p.vx*=.9;p.vy*=.9;
      const sp=Math.sqrt(p.vx*p.vx+p.vy*p.vy);if(sp>4.5){p.vx=p.vx/sp*4.5;p.vy=p.vy/sp*4.5;}if(sp<.08){p.vx+=p.wx*.3;p.vy+=p.wy*.3;}
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0){p.x=0;p.vx=Math.abs(p.vx)*.7;}if(p.x>cv.width){p.x=cv.width;p.vx=-Math.abs(p.vx)*.7;}
      if(p.y<0){p.y=0;p.vy=Math.abs(p.vy)*.7;}if(p.y>cv.height){p.y=cv.height;p.vy=-Math.abs(p.vy)*.7;}
    });
    // connections
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<130){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(124,58,237,${(1-d/130)*.55})`;ctx.lineWidth=.7;ctx.stroke();}}
    pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${p.col},${p.o})`;ctx.fill();});
    if(mx>=0){const g=ctx.createRadialGradient(mx,my,0,mx,my,32);g.addColorStop(0,'rgba(124,58,237,.18)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,cv.width,cv.height);}
    strikes=strikes.filter(s=>s.life>0);strikes.forEach(s=>{const op=s.life/s.max;if(s.flash){const g=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,44*op);g.addColorStop(0,`rgba(210,175,255,${op*.88})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,cv.width,cv.height);}else{drawBolt(ctx,s.pts,op*.9,op*2.4,'170,130,255');}s.life--;});
    requestAnimationFrame(tick);
  })();
}
document.querySelectorAll('.usp-card,.ccard,.svc-card').forEach(attachBD);

// ── KONTAKT CANVAS (B background) ──
;(function(){
  const c=document.getElementById('kontakt-canvas'),ctx=c.getContext('2d');
  const sec=document.getElementById('kontakt');
  function sz(){c.width=sec.offsetWidth;c.height=sec.offsetHeight;}sz();window.addEventListener('resize',sz);
  let mx=-1,my=-1;
  const ATTRACT_R=130,RM=38,RP=28;
  const pts=Array.from({length:48},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.55,vy:(Math.random()-.5)*.55,r:Math.random()*1.7+.5,col:Math.random()>.5?'124,58,237':'20,184,166',o:Math.random()*.3+.13,wx:(Math.random()-.5)*.25,wy:(Math.random()-.5)*.25,wt:Math.floor(Math.random()*120)}));
  sec.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
  sec.addEventListener('mouseleave',()=>{mx=-1;my=-1;});
  sec.addEventListener('touchmove',e=>{const t=e.touches[0],r=c.getBoundingClientRect();mx=t.clientX-r.left;my=t.clientY-r.top;},{passive:true});
  sec.addEventListener('touchend',()=>{mx=-1;my=-1;});
  (function tick(){
    ctx.clearRect(0,0,c.width,c.height);
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy)||1;if(d<RP){const f=((RP-d)/RP)*.9,fx=dx/d*f,fy=dy/d*f;pts[i].vx+=fx*.12;pts[i].vy+=fy*.12;pts[j].vx-=fx*.12;pts[j].vy-=fy*.12;}}
    pts.forEach(p=>{p.wt--;if(p.wt<=0){p.wx=(Math.random()-.5)*.28;p.wy=(Math.random()-.5)*.28;p.wt=80+Math.random()*100|0;}p.vx+=p.wx*.05;p.vy+=p.wy*.05;if(mx>=0){const dx=mx-p.x,dy=my-p.y,d=Math.sqrt(dx*dx+dy*dy)||1;if(d<RM){const f=((RM-d)/RM)*2.8;p.vx-=(dx/d)*f*.14;p.vy-=(dy/d)*f*.14;}else if(d<ATTRACT_R){const t=(d-RM)/(ATTRACT_R-RM);p.vx+=(dx/d)*t*2*.07;p.vy+=(dy/d)*t*2*.07;}}p.vx*=.91;p.vy*=.91;const sp=Math.sqrt(p.vx*p.vx+p.vy*p.vy);if(sp>3){p.vx=p.vx/sp*3;p.vy=p.vy/sp*3;}if(sp<.08){p.vx+=p.wx*.3;p.vy+=p.wy*.3;}p.x+=p.vx;p.y+=p.vy;if(p.x<0){p.x=0;p.vx=Math.abs(p.vx)*.7;}if(p.x>c.width){p.x=c.width;p.vx=-Math.abs(p.vx)*.7;}if(p.y<0){p.y=0;p.vy=Math.abs(p.vy)*.7;}if(p.y>c.height){p.y=c.height;p.vy=-Math.abs(p.vy)*.7;}});
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<118){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(124,58,237,${(1-d/118)*.3})`;ctx.lineWidth=.8;ctx.stroke();}}
    pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${p.col},${p.o})`;ctx.fill();});
    if(mx>=0){const g=ctx.createRadialGradient(mx,my,0,mx,my,70);g.addColorStop(0,'rgba(124,58,237,.14)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);}
    requestAnimationFrame(tick);
  })();
})();

