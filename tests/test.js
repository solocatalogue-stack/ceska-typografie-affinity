const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(require("path").join(__dirname,"..","CeskaTypografie.js"),'utf8');
const ctx={__CZTYPO_TEST__:true}; ctx.globalThis=ctx; vm.createContext(ctx); vm.runInContext(src,ctx);
const {fixText,computeEdits}=ctx.__CZTYPO__;
const show=s=>s.replace(/ /g,'␣');
const cases=[
 ['Byl jsem v Praze a pak i v Brně s kamarádem.', 'Byl jsem v␣Praze a␣pak i␣v␣Brně s␣kamarádem.'],
 ['Cena je 1500 Kč, sleva 10 % a 25 kg.', 'Cena je 1500␣Kč, sleva 10␣% a␣25␣kg.'],
 ['Má 1 000 000 obyvatel.', 'Má 1␣000␣000 obyvatel.'],
 ['Dne 1.1.2025 a 5. ledna.', 'Dne 1.␣1. 2025 a␣5.␣ledna.'],
 ['Řekl: "Ahoj" a odešel.', 'Řekl: „Ahoj“ a␣odešel.'],
 ['Řekl: “Ahoj” a ‘ty’ taky.', 'Řekl: „Ahoj“ a␣‚ty‘ taky.'],
 ['To je ono - řekl.', 'To je ono␣– řekl.'],
 ['V letech 1999-2001 a str. 10 - 15.', 'V␣letech 1999–2001 a␣str.␣10–15.'],
 ['Firma ABC s.r.o. a XY a.s.', 'Firma ABC s.␣r.␣o. a␣XY a.␣s.'],
 ['Ing. Jan Novák, Ph. D. a prof. Ing. arch. Petr Malý', 'Ing.␣Jan Novák,␣Ph.D. a␣prof.␣Ing.␣arch.␣Petr Malý'],
 ['J. R. R. Tolkien napsal', 'J.␣R.␣R.␣Tolkien napsal'],
 ['Text  s   mezerami , a ( závorka ) .', 'Text s␣mezerami, a␣(závorka).'],
 ['Čekej...', 'Čekej…'],
 ['Skóre 2 : 1 bylo', 'Skóre 2 : 1 bylo'],
 ['Viz § 5 a č. 12.', 'Viz §␣5 a␣č.␣12.'],
 ['Pište na info@example.cz nebo www.example.cz.', 'Pište na info@example.cz nebo www.example.cz.'],
 ["It's Peter's.", "It's Peter's."],
 ['Rozměr 1920 x 1080 px', 'Rozměr 1920␣×␣1080␣px'],
 ['Tel. 777 123 456', 'Tel.␣777␣123␣456'],
 ['5 s nimi', '5 s␣nimi'],
 ['- odrážka na začátku', '- odrážka na začátku'],
 ['Byl 1 st.', 'Byl 1st.'],
 ['K domu a k lesu', 'K␣domu a␣k␣lesu'],
];
let fail=0;
for(let [i,e] of cases){const o=fixText(i);e=e.replace(/␣/g,'\u00A0');const ok=o===e; if(!ok)fail++; console.log((ok?'OK  ':'FAIL')+' '+show(o)+(ok?'':'\n     want '+show(e)));}
// multi paragraph + object chars



console.log(fail ? fail + " failed" : "All tests passed"); process.exit(fail ? 1 : 0);
