import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring} from 'remotion';

// Conceptual terrain and routes only: NOT georeferenced troop positions.
const chapters = [
 {at:0,heading:'四渡赤水',sub:'战略的主动权',body:'1935 · 长征途中 · 历史军事地图纪录片',route:0},
 {at:420,heading:'困局与选择',sub:'遵义会议后 · 1935年1月',body:'强敌围追堵截。中央红军在运动中寻找突破口。',route:0},
 {at:1260,heading:'一渡赤水',sub:'1935年1月29日 · 土城战斗后',body:'由土城、元厚一带西渡赤水，摆脱不利态势。',route:1},
 {at:2280,heading:'二渡赤水',sub:'1935年2月18日至21日',body:'从太平渡、二郎滩一带东渡，回师黔北，随后取得娄山关、遵义战斗胜利。',route:2},
 {at:3300,heading:'三渡赤水',sub:'1935年3月16日至17日',body:'由茅台附近再次西渡，诱使敌军向川南方向集结。',route:3},
 {at:4320,heading:'四渡赤水',sub:'1935年3月21日至22日',body:'从二郎滩、太平渡等地再度东渡，继续机动作战。',route:4},
 {at:5340,heading:'跳出合围',sub:'南渡乌江 · 威逼贵阳 · 西进云南',body:'以灵活机动调动敌军，最终渡过金沙江，摆脱围追堵截。',route:5},
 {at:6360,heading:'战略的主动权',sub:'实事求是 · 避实击虚 · 调动敌人',body:'不拘泥于既定路线，根据敌我态势不断改变行动方向。',route:5},
];
const red='#d74940', gold='#e4c38c', ink='#0b1118';
const river='M 1050 0 C 990 150 1110 240 1020 340 S 870 580 1010 700 S 1110 900 1000 1080';
const routes=[
 'M 1110 520 Q 930 450 760 360',
 'M 760 360 Q 900 520 1100 650 Q 1300 710 1460 760',
 'M 1460 760 Q 1290 540 1060 430 Q 880 330 760 360',
 'M 760 360 Q 890 470 1060 560 Q 1250 650 1430 690',
 'M 1430 690 Q 1280 850 1050 910 Q 870 960 740 860'
];
const points=[{x:1110,y:520,n:'土城'},{x:760,y:360,n:'川南'},{x:1460,y:760,n:'遵义'},{x:1060,y:430,n:'茅台'},{x:1430,y:690,n:'黔北'},{x:740,y:860,n:'乌江方向'}];
export const ChishuiFilm:React.FC=()=>{
 const f=useCurrentFrame(); const {fps}=useVideoConfig();
 const index=Math.max(0,chapters.findIndex((c,i)=>f>=c.at && (i===chapters.length-1 || f<chapters[i+1].at)));
 const c=chapters[index]; const local=f-c.at;
 const fade=interpolate(local,[0,32,65],[0,1,1],{extrapolateRight:'clamp'});
 const pan=interpolate(f,[0,7200],[0,-120]);
 const draw=interpolate(local,[30,220],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const pulse=0.7+0.3*Math.sin(f/22);
 return <AbsoluteFill style={{backgroundColor:ink,color:'#f4e9d5',fontFamily:'Georgia, serif',overflow:'hidden'}}>
  <AbsoluteFill style={{background:'radial-gradient(ellipse at 70% 35%,#303c38 0%,#151e23 45%,#090e14 100%)'}}/>
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{position:'absolute',transform:`translateX(${pan}px) scale(1.08)`,opacity:.92}}>
   <defs>
    <pattern id="grid" width="90" height="90" patternUnits="userSpaceOnUse"><path d="M90 0H0V90" fill="none" stroke="#e4c38c" strokeWidth="1" opacity=".09"/></pattern>
    <filter id="glow"><feGaussianBlur stdDeviation="7"/></filter>
   </defs>
   <rect width="1920" height="1080" fill="url(#grid)"/>
   {Array.from({length:22},(_,i)=><path key={i} d={`M ${230+i*38} -100 Q ${100+i*43} 360 ${390+i*31} 550 T ${200+i*48} 1180`} fill="none" stroke="#829b85" strokeWidth={i%4===0?4:2} opacity={.10+(i%3)*.035}/>)}
   <path d={river} stroke="#4c9da5" strokeWidth="44" fill="none" opacity=".13" filter="url(#glow)"/>
   <path d={river} stroke="#5f9fa4" strokeWidth="11" fill="none" opacity=".85"/>
   <path d={river} stroke="#b4dad2" strokeWidth="2" fill="none" opacity=".8"/>
   <text x="1010" y="235" fontSize="26" fill="#8fc5ca" transform="rotate(75 1010 235)" letterSpacing="8">赤 水 河</text>
   {points.map((p,i)=><g key={i}><circle cx={p.x} cy={p.y} r="7" fill={gold}/><text x={p.x+15} y={p.y-14} fill="#d5d0bd" fontSize="24">{p.n}</text></g>)}
   {routes.slice(0,c.route).map((r,i)=><path key={i} d={r} stroke={red} strokeWidth="7" fill="none" strokeDasharray="15 13" opacity={i===c.route-1?.96:.30} strokeLinecap="round"/>)}
   {c.route>0&&<path d={routes[c.route-1]} stroke="#ff7463" strokeWidth="8" fill="none" pathLength="1" strokeDasharray={`${draw} 1`} opacity={pulse}/>}
   {Array.from({length:7},(_,i)=><g key={i} opacity=".53" transform={`translate(${1220+(i%3)*115} ${280+Math.floor(i/3)*120})`}><rect width="64" height="30" fill="#567ba2" stroke="#9bb9d7"/><text x="32" y="22" textAnchor="middle" fill="white" fontSize="18">敌军</text></g>)}
  </svg>
  <AbsoluteFill style={{background:'linear-gradient(90deg,rgba(6,10,16,.94) 0%,rgba(6,10,16,.78) 34%,transparent 78%)'}}/>
  <div style={{position:'absolute',left:110,top:100,fontSize:22,color:gold,letterSpacing:8}}>1935 / 中国工农红军长征</div>
  <div style={{position:'absolute',left:110,top:305,width:740,opacity:fade,transform:`translateY(${(1-fade)*30}px)`}}>
   <div style={{height:6,width:115,background:red,marginBottom:45}}/>
   <div style={{fontSize:94,fontWeight:800,letterSpacing:7,lineHeight:1.2,textShadow:'0 5px 20px #000'}}>{c.heading}</div>
   <div style={{fontSize:34,color:gold,marginTop:28,letterSpacing:3}}>{c.sub}</div>
   <div style={{fontSize:30,lineHeight:1.75,marginTop:50,color:'#ddd9cc',fontFamily:'sans-serif'}}>{c.body}</div>
  </div>
  <div style={{position:'absolute',left:110,bottom:78,fontSize:19,color:'#b3ad9d',letterSpacing:3}}>战役路线示意 · 非精确兵力部署图</div>
  <div style={{position:'absolute',right:90,bottom:78,fontSize:23,color:gold}}>{String(index+1).padStart(2,'0')} / {String(chapters.length).padStart(2,'0')}</div>
  <div style={{position:'absolute',bottom:0,left:0,width:`${f/7200*100}%`,height:5,background:red}}/>
 </AbsoluteFill>;
};
