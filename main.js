
:root{--bg:#08011a;--bg2:#0f0228;--purple:#7c3aed;--teal:#14b8a6;--teal-light:#2dd4bf;--white:#fff;--gray:#94a3b8;}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Montserrat',sans-serif;background:var(--bg);color:var(--white);overflow-x:hidden;}
nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:.8rem 2rem;display:flex;align-items:center;justify-content:space-between;transition:background .3s,padding .3s;}
nav.scrolled{background:rgba(8,1,26,.97);padding:.5rem 2rem;}nav.scrolled .nav-logo img{height:56px;}
.nav-logo img{height:86px;display:block;transition:height .3s;width:auto;}
.nav-links{display:flex;align-items:center;gap:2rem;list-style:none;}
.nav-links a{color:rgba(255,255,255,.78);text-decoration:none;font-size:.85rem;font-weight:600;transition:color .2s;}
.nav-links a:hover{color:var(--teal-light);}
.nav-cta{background:linear-gradient(135deg,var(--purple),var(--teal));color:white!important;padding:.5rem 1.3rem;border-radius:50px;font-weight:700!important;position:relative;overflow:hidden;transition:transform .2s;}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;z-index:1001;}
.hamburger span{width:24px;height:2px;background:white;border-radius:2px;transition:all .3s;}
.hamburger.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px);}
.hamburger.open span:nth-child(2){opacity:0;}
.hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px);}
#hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;cursor:crosshair;}
#hero-canvas{position:absolute;inset:0;width:100%;height:100%;}
.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 50%,rgba(124,58,237,.32),transparent 58%),radial-gradient(ellipse at 78% 25%,rgba(20,184,166,.18),transparent 52%),linear-gradient(180deg,#08011a 0%,#0f0228 100%);}
.hero-content{position:relative;z-index:2;text-align:center;padding:2rem;max-width:940px;}
.hero-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(124,58,237,.18);border:1px solid rgba(124,58,237,.42);color:var(--teal-light);padding:.38rem 1.1rem;border-radius:50px;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:1.8rem;animation:fadeUp .8s ease both;}
.hero-title{font-size:clamp(3rem,9vw,6.5rem);font-weight:900;line-height:.92;margin-bottom:.7rem;animation:fadeUp .8s ease .1s both;letter-spacing:-.03em;}
.hero-title .grad{background:linear-gradient(135deg,#c084fc,var(--teal-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-sub{font-size:clamp(.9rem,2.2vw,1.3rem);font-weight:600;color:rgba(255,255,255,.58);margin-bottom:2.8rem;letter-spacing:.06em;animation:fadeUp .8s ease .2s both;}
.hero-sub em{color:var(--teal-light);font-style:normal;}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;animation:fadeUp .8s ease .3s both;}
.btn-call,.btn-wa,.btn-ghost{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:.5rem;padding:.95rem 2rem;border-radius:50px;font-weight:800;font-size:.95rem;text-decoration:none;transition:transform .3s,box-shadow .3s;}
.btn-call::before,.btn-wa::before,.btn-ghost::before{content:'';position:absolute;top:0;left:-80%;width:55%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transform:skewX(-15deg);pointer-events:none;}
.btn-call:hover::before,.btn-wa:hover::before,.btn-ghost:hover::before{animation:btnShine .6s ease forwards;}
@keyframes btnShine{from{left:-80%}to{left:150%}}
.btn-call{background:linear-gradient(135deg,var(--purple),#9333ea);color:white;}
.btn-call:hover{transform:translateY(-3px);}

.btn-wa{background:linear-gradient(135deg,#25d366,#128c7e);color:white;}
.btn-wa:hover{transform:translateY(-3px);}

.btn-ghost{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.18);color:white;}
.btn-ghost:hover{background:rgba(255,255,255,.14);transform:translateY(-3px);}
.scroll-hint{position:absolute;bottom:1.8rem;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.3);font-size:.72rem;display:flex;flex-direction:column;align-items:center;gap:.4rem;animation:bounce 2s infinite;letter-spacing:.08em;}
.stats-bar{background:rgba(124,58,237,.12);border-top:1px solid rgba(124,58,237,.26);border-bottom:1px solid rgba(124,58,237,.26);padding:1.4rem 2rem;display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;}
.stat-item{display:flex;align-items:center;gap:.7rem;font-size:.88rem;font-weight:500;color:rgba(255,255,255,.82);}
.stat-icon{font-size:1.45rem;}
.stat-label strong{display:block;font-size:1rem;font-weight:800;color:var(--teal-light);}
section{padding:6rem 2rem;}
.container{max-width:1200px;margin:0 auto;}
.sec-label{display:inline-flex;align-items:center;gap:.5rem;color:var(--teal);font-size:.72rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin-bottom:.9rem;}
.sec-label::before{content:'';display:block;width:22px;height:2px;background:var(--teal);flex-shrink:0;}
.sec-title{font-size:clamp(1.8rem,4vw,3rem);font-weight:900;line-height:1.12;margin-bottom:.9rem;letter-spacing:-.02em;}
.sec-sub{color:rgba(255,255,255,.55);font-size:1rem;max-width:600px;line-height:1.78;margin-bottom:3rem;font-weight:500;}
#leistungen{background:linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%);}
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(275px,1fr));gap:1.4rem;}
.svc-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;transition:all .3s;position:relative;overflow:hidden;}
.svc-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(124,58,237,.1),rgba(20,184,166,.05));opacity:0;transition:opacity .3s;pointer-events:none;}
.svc-card:hover{border-color:rgba(124,58,237,.4);transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,.35);}
.svc-card:hover::after{opacity:1;}
.svc-card.featured{border-color:rgba(124,58,237,.5);background:rgba(124,58,237,.1);}
.svc-badge{display:inline-block;background:linear-gradient(135deg,var(--purple),var(--teal));color:white;font-size:.65rem;font-weight:700;padding:.2rem .75rem;border-radius:50px;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.9rem;}
.svc-icon{font-size:2.3rem;display:block;margin-bottom:.85rem;}
.svc-card h3{font-size:1rem;font-weight:800;margin-bottom:.5rem;}
.svc-card p{color:rgba(255,255,255,.55);font-size:.86rem;line-height:1.65;font-weight:500;}
#warum{background:var(--bg2);position:relative;overflow:hidden;}
#warum::before,#warum::after{content:'';position:absolute;left:0;right:0;height:1px;}
#warum::before{top:0;background:linear-gradient(90deg,transparent,var(--purple),var(--teal),transparent);}
#warum::after{bottom:0;background:linear-gradient(90deg,transparent,var(--teal),var(--purple),transparent);}
.usp-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.8rem;}
.usp-card{text-align:center;padding:2.5rem 1.5rem;border-radius:20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);transition:border-color .3s,transform .3s,box-shadow .3s;position:relative;overflow:hidden;cursor:default;isolation:isolate;}
.usp-card:hover{border-color:rgba(124,58,237,.35);transform:translateY(-5px);box-shadow:0 20px 40px rgba(124,58,237,.12);}
.usp-icon{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,rgba(124,58,237,.75),rgba(20,184,166,.55));display:flex;align-items:center;justify-content:center;font-size:1.9rem;margin:0 auto 1.4rem;border:2px solid rgba(124,58,237,.9);position:relative;z-index:10;box-shadow:0 0 18px rgba(124,58,237,.4);}
.usp-card h3{font-size:1rem;font-weight:800;margin-bottom:.7rem;position:relative;z-index:1;}
.usp-card p{color:rgba(255,255,255,.55);font-size:.86rem;line-height:1.65;font-weight:500;position:relative;z-index:1;}
#team{background:var(--bg);} .team-wrap{position:relative;}
.team-wrap{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
.team-img-wrap{position:relative;}
.team-img{border-radius:24px;overflow:hidden;border:1px solid rgba(124,58,237,.3);}
.team-img img{width:100%;display:block;object-fit:cover;object-position:center 15%;border-radius:18px;}
.team-glow{position:absolute;inset:-2px;border-radius:22px;background:linear-gradient(135deg,rgba(124,58,237,.5),rgba(20,184,166,.3));filter:blur(16px);z-index:-1;opacity:.55;transition:opacity .4s,filter .4s;}
.team-img-wrap{transition:transform .45s cubic-bezier(.34,1.56,.64,1),filter .4s;cursor:pointer;}
.team-img-wrap:hover{transform:scale(1.06) translateY(-12px);filter:drop-shadow(0 40px 60px rgba(124,58,237,.7)) drop-shadow(0 10px 30px rgba(20,184,166,.4));z-index:10;}
.team-img-wrap:hover .team-glow{opacity:.9;filter:blur(22px);}
.team-img{transition:transform .45s cubic-bezier(.34,1.56,.64,1);overflow:hidden;}
.team-img img{transition:transform .45s cubic-bezier(.34,1.56,.64,1),filter .4s;}
.team-img-wrap:hover .team-img img{transform:scale(1.04);filter:brightness(1.08) contrast(1.05);}
.team-text h2{font-size:clamp(1.6rem,3vw,2.5rem);font-weight:900;margin-bottom:1rem;line-height:1.15;letter-spacing:-.02em;}
.team-text p{color:rgba(255,255,255,.65);line-height:1.82;margin-bottom:1.4rem;font-size:.95rem;font-weight:500;}
.team-quote{background:rgba(20,184,166,.1);border-left:3px solid var(--teal);padding:1rem 1.5rem;border-radius:0 12px 12px 0;color:rgba(255,255,255,.82);font-size:.92rem;font-style:italic;line-height:1.65;font-weight:500;}
#kontakt{background:linear-gradient(180deg,var(--bg2) 0%,var(--bg) 100%);position:relative;overflow:hidden;}
#kontakt-canvas{position:absolute;inset:0;width:100%;height:100%;opacity:.5;pointer-events:none;}
.contact-inner{position:relative;z-index:2;}
.contact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.4rem;margin-bottom:2.5rem;}
.ccard{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:2.5rem;text-align:center;transition:transform .3s,box-shadow .3s,border-color .3s;text-decoration:none;color:inherit;display:block;backdrop-filter:blur(4px);position:relative;overflow:hidden;}
.ccard:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,.3);}
.ccard.phone:hover{border-color:rgba(124,58,237,.45);}
.ccard.wa:hover{border-color:rgba(37,211,102,.4);}
.ccard.mail:hover{border-color:rgba(20,184,166,.4);}
.ccard .icon{font-size:2.3rem;display:block;margin-bottom:.9rem;position:relative;z-index:2;}
.ccard h3{font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--gray);margin-bottom:.5rem;position:relative;z-index:1;}
.ccard .val{font-size:1.1rem;font-weight:800;color:white;margin-bottom:.25rem;position:relative;z-index:1;}
.ccard .hint{font-size:.8rem;color:var(--gray);font-weight:500;position:relative;z-index:1;}
.contact-addr{text-align:center;color:rgba(255,255,255,.4);font-size:.85rem;font-weight:500;}
footer{background:rgba(0,0,0,.5);border-top:1px solid rgba(255,255,255,.06);padding:2.5rem 2rem;}
.footer-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
.f-logo img{height:78px;display:block;}
.f-links{display:flex;gap:2rem;list-style:none;}
.f-links a{color:rgba(255,255,255,.42);text-decoration:none;font-size:.82rem;font-weight:600;transition:color .2s;cursor:pointer;}
.f-links a:hover{color:var(--teal-light);}
.f-copy{color:rgba(255,255,255,.25);font-size:.76rem;font-weight:500;}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:2000;display:flex;align-items:flex-start;justify-content:center;padding:2rem;overflow-y:auto;opacity:0;pointer-events:none;transition:opacity .3s;}
.modal-overlay.active{opacity:1;pointer-events:all;}
.modal{background:#0f0228;border:1px solid rgba(124,58,237,.35);border-radius:20px;padding:3rem;max-width:800px;width:100%;position:relative;margin:auto;transform:translateY(20px);transition:transform .3s;}
.modal-overlay.active .modal{transform:translateY(0);}
.modal-x{position:absolute;top:1.4rem;right:1.4rem;background:rgba(255,255,255,.1);border:none;color:white;width:34px;height:34px;border-radius:50%;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;}
.modal h2{font-size:1.7rem;font-weight:900;margin-bottom:2rem;color:var(--teal-light);letter-spacing:-.02em;}
.modal h3{font-size:.95rem;font-weight:800;margin:1.4rem 0 .5rem;color:white;}
.modal p,.modal li{color:rgba(255,255,255,.65);font-size:.86rem;line-height:1.78;margin-bottom:.4rem;font-weight:500;}
.modal ul{padding-left:1.4rem;margin-bottom:.8rem;}
.modal a{color:var(--teal-light);}
.wa-float{position:fixed;bottom:2rem;right:2rem;z-index:999;background:#25d366;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .3s;animation:pulse-wa 2.5s infinite;box-shadow:0 4px 22px rgba(37,211,102,.55);}
.wa-float:hover{transform:scale(1.12);box-shadow:0 8px 35px rgba(37,211,102,.65);}
.wa-float svg{width:30px;height:30px;fill:white;}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}
@keyframes pulse-wa{0%,100%{opacity:.85}50%{opacity:1}}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}
.d1{transition-delay:.1s;}.d2{transition-delay:.2s;}.d3{transition-delay:.3s;}
@media(max-width:768px){
  .nav-links{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(8,1,26,.97);flex-direction:column;align-items:center;justify-content:center;gap:2rem;z-index:999;}
  .nav-links.open{display:flex;}
  .nav-links a{font-size:1.25rem;}
  .hamburger{display:flex;}
  .team-wrap{grid-template-columns:1fr;}
  .stats-bar{gap:1.5rem;}
  .modal{padding:2rem 1.4rem;}
  section{padding:4rem 1.5rem;}
  .nav-logo img{height:70px !important;}
  nav{padding:.3rem 1.2rem !important;}
  nav.scrolled .nav-logo img{height:80px !important;}
  nav.scrolled{padding:.2rem 1.2rem !important;}
}

@media(min-width:1400px){.nav-logo img{height:50px !important;}}
.usp-card canvas{z-index:-1 !important;}
.usp-card .usp-icon{z-index:10 !important;}
.usp-card h3{position:relative;z-index:10 !important;}
.usp-card p{position:relative;z-index:10 !important;}

.svc-card{isolation:isolate;}
.svc-card canvas{z-index:-1 !important;}
.svc-card .svc-icon,.svc-card h3,.svc-card p,.svc-badge{position:relative;z-index:10 !important;}

.nav-cta::before{content:'';position:absolute;top:0;left:-80%;width:55%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transform:skewX(-15deg);pointer-events:none;}
.nav-cta:hover::before{animation:btnShine .6s ease forwards;}
.nav-cta:hover{transform:translateY(-2px);}


nav::after{content:'';position:absolute;bottom:-28px;left:0;right:0;height:28px;background:linear-gradient(180deg,rgba(8,1,26,.65) 0%,transparent 100%);pointer-events:none;opacity:0;transition:opacity .3s;z-index:-1;}
nav.scrolled::after{opacity:1;}

.nav-cta::before{content:'';position:absolute;top:0;left:-80%;width:55%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);transform:skewX(-15deg);pointer-events:none;}
.nav-cta:hover::before{animation:btnShine .6s ease forwards;}
.nav-cta:hover{transform:translateY(-2px);}


/* ── PERF: opacity-only glow animations (compositor thread, no repaint) ── */
.btn-call::after,.btn-wa::after{content:'';position:absolute;inset:-2px;border-radius:50px;pointer-events:none;animation:btnGlowOpacity 2.5s ease-in-out infinite;}
.btn-call::after{box-shadow:0 0 22px 4px rgba(124,58,237,.6);}
.btn-wa::after{box-shadow:0 0 22px 4px rgba(37,211,102,.55);animation-duration:2.8s;}
@keyframes btnGlowOpacity{0%,100%{opacity:.4}50%{opacity:1}}
.btn-call:hover::after,.btn-wa:hover::after{opacity:1;animation:none;}
.nav-cta::after{content:'';position:absolute;inset:-2px;border-radius:50px;pointer-events:none;box-shadow:0 0 12px 2px rgba(124,58,237,.55),0 0 12px 2px rgba(20,184,166,.35);animation:btnGlowOpacity 2.4s ease-in-out infinite;}
/* ── PERF: will-change for GPU layers ── */
.hero-content{will-change:transform;}
.btn-call,.btn-wa,.btn-ghost,.nav-cta{will-change:transform;}
/* ── PERF: CSS containment for sections ── */
#leistungen,#warum,#team,#kontakt{contain:layout style;}
/* ── PERF: prefers-reduced-motion ── */
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;}
  .btn-call::after,.btn-wa::after,.nav-cta::after{animation:none!important;opacity:.6;}
}
/* ── PERF: font-display swap (applied to @font-face via link params) ── */
