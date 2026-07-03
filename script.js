// Custom cursor
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
function animRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a,button,.project-row').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    cur.style.width='20px'; cur.style.height='20px';
    ring.style.width='56px'; ring.style.height='56px';
  });
  el.addEventListener('mouseleave',()=>{
    cur.style.width='10px'; cur.style.height='10px';
    ring.style.width='36px'; ring.style.height='36px';
  });
});

// Scroll reveal
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

// Skill bars trigger on scroll
const barObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.sb-fill').forEach(bar=>{
        bar.style.width = bar.dataset.w + '%';
      });
      barObs.unobserve(e.target);
    }
  });
},{threshold:.3});
document.querySelectorAll('.skill-group').forEach(g=>barObs.observe(g));

// Parallax subtle on hero bg
document.addEventListener('scroll',()=>{
  const bg = document.querySelector('.hero-bg');
  if(bg) bg.style.transform = `translateY(${window.scrollY*.2}px)`;
});
