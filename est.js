/* Contraportada · contador de visitas de las paginas (18/11/2026, plan de lanzamiento 0.1).
   Sin cookies ni datos del visitante: solo suma totales por dia, tipo de pagina y origen (rpc/suma_visita),
   y la visita de la ficha de disco para el orden «Mas visitados». ?casa=1 deja fuera los navegadores de la casa. */
(function(){try{
if(/bot|crawl|spider|slurp|lighthouse|headless|preview|facebookexternalhit|whatsapp|bingpreview/i.test(navigator.userAgent||""))return;
var S=sessionStorage,L=localStorage,q=new URLSearchParams(location.search);
if(q.get("casa")==="1")L.setItem("carab_casa","1");
if(q.get("casa")==="0")L.removeItem("carab_casa");
if(L.getItem("carab_casa")==="1")return;
var o=q.get("utm_source");
if(!o&&document.referrer){var h=new URL(document.referrer).hostname.replace(/^www\./,"");if(h&&!/(^|\.)contraportada\.(es|pages\.dev)$/.test(h)&&!/github\.io$/.test(h))o=h;}
if(o)S.setItem("carab_origen",o.toLowerCase().replace(/[^a-z0-9._-]/g,"").slice(0,40));
o=(S.getItem("carab_origen")||"directo").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"directo";
var p=location.pathname.split("/").filter(Boolean),t=p[0]||"portada";
if(!/^(disco|artista|ano|decada|indice|ig|conciertos|portada)$/.test(t))t="otra";
var k="carab_pv:"+location.pathname;if(S.getItem(k))return;S.setItem(k,"1");
var d=new Date(),f=""+d.getFullYear()+("0"+(d.getMonth()+1)).slice(-2)+("0"+d.getDate()).slice(-2);
var K="sb_publishable__7v4m71O88ikywOgozWDZA_6d63SZDr",U="https://hwqstbwltmcpdacluewj.supabase.co/rest/v1/rpc/suma_visita";
function v(c){fetch(U,{method:"POST",keepalive:true,headers:{apikey:K,Authorization:"Bearer "+K,"Content-Type":"application/json"},body:JSON.stringify({p_clave:c})}).catch(function(){});}
v("zz-visitas::d"+f+"-"+t+"-"+o);
if(t==="disco"&&p.length>=3)v(p[1]+"::"+p[2]);
}catch(e){}})();
