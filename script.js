// Always start the standalone site at the top when opened directly.
// Preserve intentional anchor links such as #contact.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!window.location.hash) {
  window.addEventListener('load', () => window.scrollTo(0, 0));
  window.addEventListener('pageshow', () => window.scrollTo(0, 0));
}

const toggle=document.querySelector('.menu-toggle');const menu=document.querySelector('.mobile-menu');const links=document.querySelectorAll('.mobile-menu a');toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open);menu.setAttribute('aria-hidden',!open);document.body.style.overflow=open?'hidden':''});links.forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');menu.setAttribute('aria-hidden','true');document.body.style.overflow=''}));const revealTargets=document.querySelectorAll('.intro,.services,.split-copy,.gallery,.visit-copy,.booking');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(el=>{el.classList.add('reveal');observer.observe(el)});