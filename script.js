const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);m.classList.toggle('open',!o);});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open');}));
document.querySelectorAll('.acc').forEach(x=>x.addEventListener('click',()=>{const o=x.getAttribute('aria-expanded')==='true';x.setAttribute('aria-expanded',!o);document.getElementById(x.getAttribute('aria-controls')).hidden=o;}));
document.getElementById('yr').textContent=new Date().getFullYear();
const f=document.querySelector('.card-form');
f.addEventListener('submit',async e=>{e.preventDefault();const msg=f.querySelector('.form-msg'),d=new FormData(f);
 if(f.action.includes('YOUR_FORM_ID')){const body=[...d].map(([k,v])=>k+': '+v).join('\n');location.href='mailto:'+f.dataset.mailto+'?subject='+encodeURIComponent('Landscaping enquiry')+'&body='+encodeURIComponent(body);return;}
 try{const r=await fetch(f.action,{method:'POST',body:d,headers:{Accept:'application/json'}});msg.textContent=r.ok?'Thanks for submitting! Peter will be in touch.':'Sorry, something went wrong. Please call 905-689-1667.';if(r.ok)f.reset();}catch{msg.textContent='Sorry, something went wrong. Please call 905-689-1667.';}});
