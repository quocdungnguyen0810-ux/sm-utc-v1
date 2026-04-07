import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { CHAPTERS, getAllSections } from './data.js';

function Quiz({ questions }) {
  const [sel, setSel] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => !submitted ? 0 : questions.reduce((a,q,i)=>a+(sel[i]===q.ans?1:0),0), [submitted,sel,questions]);
  const reset = () => { setSel({}); setSubmitted(false); };
  return (
    <div className="quiz-box">
      <div className="quiz-title"><span>🎯</span> Kiểm tra kiến thức</div>
      {questions.map((q,i)=>(
        <div key={i} className={`quiz-q ${submitted?(sel[i]===q.ans?'q-correct':'q-wrong'):''}`}>
          <p className="q-text">{i+1}. {q.q}</p>
          <div className="q-opts">
            {q.options.map((opt,j)=>(
              <label key={j} className={`q-opt ${sel[i]===j?'opt-sel':''} ${submitted&&j===q.ans?'opt-ans':''}`}>
                <input type="radio" name={`q${i}`} disabled={submitted} checked={sel[i]===j} onChange={()=>!submitted&&setSel(p=>({...p,[i]:j}))} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted&&<p className={`q-exp ${sel[i]===q.ans?'exp-ok':'exp-err'}`}>{sel[i]===q.ans?'✓ Đúng! ':'✗ Sai. '}{q.explain}</p>}
        </div>
      ))}
      {!submitted
        ? <button className="quiz-submit" disabled={Object.keys(sel).length<questions.length} onClick={()=>setSubmitted(true)}>Nộp bài</button>
        : <div className="quiz-result">
            <div className="score-num">{score}<span>/{questions.length}</span></div>
            <div className="score-msg">{score===questions.length?'🎉 Xuất sắc!':score>=Math.ceil(questions.length*.6)?'👍 Khá tốt!':'📖 Ôn lại nhé!'}</div>
            <button className="quiz-retry" onClick={reset}>Làm lại</button>
          </div>
      }
    </div>
  );
}

function Content({ section }) {
  if (!section) return null;
  return (
    <div className="md-body">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{
        h2:({children})=><h2 className="md-h2">{children}</h2>,
        h3:({children})=><h3 className="md-h3">{children}</h3>,
        p:({children})=><p className="md-p">{children}</p>,
        blockquote:({children})=><blockquote className="md-bq">{children}</blockquote>,
        table:({children})=><div className="tbl-wrap"><table className="md-tbl">{children}</table></div>,
        code:({inline,children})=>inline?<code className="md-code">{children}</code>:<pre className="md-pre"><code>{children}</code></pre>,
        ul:({children})=><ul className="md-ul">{children}</ul>,
        ol:({children})=><ol className="md-ol">{children}</ol>,
        li:({children})=><li className="md-li">{children}</li>,
        strong:({children})=><strong className="md-strong">{children}</strong>,
      }}>
        {section.content}
      </ReactMarkdown>
      {section.quiz?.length>0&&<Quiz questions={section.quiz}/>}
    </div>
  );
}

export default function App() {
  const [dark,setDark] = useState(()=>window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [sidebarOpen,setSidebarOpen] = useState(false);
  const [expanded,setExpanded] = useState({1:true});
  const [activeId,setActiveId] = useState('1-1');
  const [search,setSearch] = useState('');
  const [searchOpen,setSearchOpen] = useState(false);
  const contentRef = useRef(null);
  const searchRef = useRef(null);
  const allSections = useMemo(()=>getAllSections(),[]);
  const activeSection = useMemo(()=>allSections.find(s=>s.id===activeId),[activeId,allSections]);
  const activeChapter = useMemo(()=>CHAPTERS.find(ch=>ch.sections.some(s=>s.id===activeId)),[activeId]);
  const currentIndex = useMemo(()=>allSections.findIndex(s=>s.id===activeId),[activeId,allSections]);
  const prev = currentIndex>0?allSections[currentIndex-1]:null;
  const next = currentIndex<allSections.length-1?allSections[currentIndex+1]:null;
  const searchResults = useMemo(()=>{
    if(!search.trim()) return [];
    const q=search.toLowerCase();
    return allSections.filter(s=>s.title.toLowerCase().includes(q)||s.chapterTitle.toLowerCase().includes(q)||s.content.toLowerCase().includes(q)).slice(0,8);
  },[search,allSections]);

  const navigate = useCallback((id)=>{
    setActiveId(id);
    setSidebarOpen(false);
    setSearch('');
    setSearchOpen(false);
    const ch=CHAPTERS.find(c=>c.sections.some(s=>s.id===id));
    if(ch) setExpanded(p=>({...p,[ch.id]:true}));
    contentRef.current?.scrollTo({top:0,behavior:'smooth'});
  },[]);

  useEffect(()=>{
    const h=(e)=>{if(e.key==='Escape'){setSidebarOpen(false);setSearchOpen(false);}};
    window.addEventListener('keydown',h);
    return ()=>window.removeEventListener('keydown',h);
  },[]);
  useEffect(()=>{if(searchOpen)searchRef.current?.focus();},[searchOpen]);

  return (
    <div className={`app ${dark?'dark':'light'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html,body,#root{height:100%}
        .app{--acc:#b5722a;--acc2:#8a5420;--acc-rgb:181,114,42;font-family:'DM Sans',sans-serif;height:100dvh;display:flex;flex-direction:column;overflow:hidden;transition:background .25s,color .25s}
        .light{--bg:#f9f6f1;--bg2:#f0ebe2;--surface:#fff;--sb:#1c1917;--sb2:#221e1a;--sbt:#e8ddd0;--sbm:#8a8078;--sbh:rgba(255,255,255,.06);--sba:rgba(181,114,42,.18);--text:#1c1612;--text2:#5c5046;--border:#e0d6c8;--mathbg:#fdf5e8;--mathb:#e0b96a;--bqbg:#fdf5e8;--tblh:#b5722a;--tbla:#f5ede0;--codebg:#f0ebe2;--shadow:0 1px 8px rgba(60,35,10,.12);--ov:rgba(0,0,0,.45)}
        .dark{--bg:#100e0c;--bg2:#1a1713;--surface:#1e1b17;--sb:#0c0b09;--sb2:#161310;--sbt:#e2d8cc;--sbm:#6b6158;--sbh:rgba(255,255,255,.04);--sba:rgba(181,114,42,.2);--text:#e2d8cc;--text2:#9e9080;--border:#2a2520;--mathbg:#1e1b17;--mathb:#6b4a1e;--bqbg:#1e1b17;--tblh:#8a5420;--tbla:#1a1713;--codebg:#1a1713;--shadow:0 1px 8px rgba(0,0,0,.5);--ov:rgba(0,0,0,.65)}
        .topbar{height:52px;background:var(--sb);display:flex;align-items:center;padding:0 14px;gap:10px;flex-shrink:0;border-bottom:1px solid rgba(255,255,255,.05);position:relative;z-index:200}
        .tb-logo{font-family:'Libre Baskerville',serif;font-size:14px;font-weight:700;color:var(--acc);white-space:nowrap}
        .tb-logo span{color:var(--sbm);font-weight:400;font-size:11px;margin-left:6px}
        .tb-sp{flex:1}
        .tb-btn{width:34px;height:34px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.08);border-radius:8px;cursor:pointer;color:var(--sbt);font-size:15px;display:flex;align-items:center;justify-content:center;transition:background .15s;flex-shrink:0}
        .tb-btn:hover{background:rgba(255,255,255,.13)}
        .menu-btn{display:none}
        .sov{position:fixed;inset:0;z-index:500;background:var(--ov);display:flex;align-items:flex-start;justify-content:center;padding-top:80px;animation:fi .15s ease}
        @keyframes fi{from{opacity:0}to{opacity:1}}
        .smod{width:min(560px,calc(100vw - 32px));background:var(--surface);border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.4);overflow:hidden}
        .siw{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border)}
        .siw svg{color:var(--text2);flex-shrink:0}
        .si{flex:1;background:transparent;border:none;outline:none;font-size:16px;color:var(--text);font-family:inherit}
        .si::placeholder{color:var(--text2)}
        .sesc{font-size:11px;padding:2px 7px;background:var(--bg2);border:1px solid var(--border);border-radius:5px;color:var(--text2);cursor:pointer}
        .sres{max-height:380px;overflow-y:auto}
        .sem{padding:24px;text-align:center;color:var(--text2);font-size:14px}
        .sri{padding:12px 16px;cursor:pointer;border-bottom:1px solid var(--border);transition:background .12s;display:flex;flex-direction:column;gap:3px}
        .sri:hover{background:var(--bg2)}
        .sri-ch{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--acc)}
        .sri-t{font-size:14px;color:var(--text);font-weight:500}
        .sri-x{font-size:12px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .layout{flex:1;display:flex;overflow:hidden;position:relative}
        .mov{display:none;position:absolute;inset:0;background:var(--ov);z-index:90}
        .mov.show{display:block}
        .sidebar{width:270px;flex-shrink:0;background:var(--sb);display:flex;flex-direction:column;border-right:1px solid rgba(255,255,255,.04);overflow:hidden;transition:transform .28s cubic-bezier(.4,0,.2,1);z-index:100}
        .sbh{padding:16px 16px 12px;border-bottom:1px solid rgba(255,255,255,.05);flex-shrink:0}
        .sbl{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sbm);margin-bottom:8px}
        .sbp{height:2px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden}
        .sbpf{height:100%;background:var(--acc);border-radius:2px;transition:width .4s ease}
        .sbpt{font-size:10px;color:var(--sbm);margin-top:5px}
        .sblist{flex:1;overflow-y:auto;padding:6px 0 24px}
        .sblist::-webkit-scrollbar{width:3px}
        .sblist::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:2px}
        .chl{}
        .chlabel{display:flex;align-items:center;gap:8px;padding:9px 16px;cursor:pointer;transition:background .12s;user-select:none;border-left:3px solid transparent}
        .chlabel:hover{background:var(--sbh)}
        .chlabel.chact{background:var(--sba);border-left-color:var(--acc)}
        .chico{font-size:15px;flex-shrink:0}
        .chnum{font-size:9px;color:var(--sbm);font-weight:700;letter-spacing:.1em;min-width:18px}
        .chname{flex:1;font-size:12.5px;color:var(--sbt);line-height:1.35;font-weight:500}
        .charr{font-size:10px;color:var(--sbm);transition:transform .2s;flex-shrink:0}
        .charr.open{transform:rotate(90deg)}
        .seclist{}
        .secitem{display:flex;align-items:center;gap:6px;padding:7px 16px 7px 44px;cursor:pointer;font-size:12px;color:var(--sbm);transition:all .12s;border-left:3px solid transparent}
        .secitem:hover{color:var(--sbt);background:var(--sbh)}
        .secitem.secact{color:var(--acc);background:var(--sba);border-left-color:var(--acc);font-weight:500}
        .secdot{width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.5;flex-shrink:0}
        .secact .secdot{opacity:1}
        .content-area{flex:1;overflow-y:auto;background:var(--bg);scroll-behavior:smooth}
        .content-area::-webkit-scrollbar{width:5px}
        .content-area::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
        .ci{max-width:740px;margin:0 auto;padding:0 20px 80px}
        .hero{padding:28px 0 20px;border-bottom:1px solid var(--border);margin-bottom:28px}
        .hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px}
        .hero-badge{display:inline-flex;align-items:center;gap:6px;background:var(--acc);color:#fff;border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
        .hero-title{font-family:'Libre Baskerville',serif;font-size:26px;font-weight:700;color:var(--text);line-height:1.3;margin-bottom:6px}
        .hero-sub{font-size:13px;color:var(--text2)}
        .hero-sub strong{color:var(--acc)}
        .pnav{display:flex;gap:10px;margin-bottom:28px}
        .nbtn{flex:1;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 14px;cursor:pointer;transition:all .15s;font-family:inherit;color:var(--text2);display:flex;flex-direction:column;gap:2px}
        .nbtn:hover:not(:disabled){border-color:var(--acc);color:var(--acc);background:var(--bg2)}
        .nbtn:disabled{opacity:.3;cursor:default}
        .nbtn.next{text-align:right;align-items:flex-end}
        .ndir{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;opacity:.6}
        .ntitle{font-size:13px;font-weight:500}
        .md-body{line-height:1.85}
        .md-h2{font-family:'Libre Baskerville',serif;font-size:22px;font-weight:700;color:var(--text);margin:32px 0 14px;padding-bottom:10px;border-bottom:2px solid var(--border)}
        .md-h2:first-child{margin-top:0}
        .md-h3{font-family:'Libre Baskerville',serif;font-size:16px;font-weight:700;color:var(--acc);margin:24px 0 10px}
        .md-p{font-size:15px;color:var(--text2);margin-bottom:14px;line-height:1.85}
        .md-strong{color:var(--text);font-weight:600}
        .md-bq{border-left:3px solid var(--acc);background:var(--bqbg);padding:12px 16px;margin:16px 0;border-radius:0 8px 8px 0;font-size:14px;color:var(--text2)}
        .md-code{background:var(--codebg);border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-family:'Courier New',monospace;font-size:13px;color:var(--acc)}
        .md-pre{background:var(--codebg);border:1px solid var(--border);border-radius:8px;padding:14px;overflow-x:auto;margin:14px 0}
        .md-ul,.md-ol{padding-left:22px;margin:10px 0}
        .md-li{font-size:15px;color:var(--text2);margin-bottom:6px;line-height:1.75}
        .tbl-wrap{overflow-x:auto;margin:16px 0;border-radius:8px;border:1px solid var(--border)}
        .md-tbl{width:100%;border-collapse:collapse;font-size:13.5px}
        .md-tbl th{background:var(--tblh);color:#fff;padding:9px 12px;text-align:left;font-weight:600}
        .md-tbl td{padding:8px 12px;border-bottom:1px solid var(--border);color:var(--text2)}
        .md-tbl tr:nth-child(even) td{background:var(--tbla)}
        .md-tbl tr:last-child td{border-bottom:none}
        .katex-display{padding:14px 16px;background:var(--mathbg);border-left:3px solid var(--mathb);border-radius:0 8px 8px 0;margin:16px 0;overflow-x:auto}
        .katex{font-size:1em}
        .light .katex{color:#1c1612}
        .dark .katex{color:#e2d8cc}
        .quiz-box{margin-top:36px;border:1.5px solid var(--acc);border-radius:12px;overflow:hidden;background:var(--surface)}
        .quiz-title{background:var(--acc);color:#fff;padding:12px 16px;font-weight:700;font-size:14px;display:flex;align-items:center;gap:8px;font-family:'Libre Baskerville',serif}
        .quiz-q{padding:14px 16px;border-bottom:1px solid var(--border);transition:background .15s}
        .q-correct{background:rgba(34,139,72,.07)}
        .q-wrong{background:rgba(192,57,43,.07)}
        .q-text{font-weight:600;font-size:14px;color:var(--text);margin-bottom:10px;line-height:1.5}
        .q-opts{display:flex;flex-direction:column;gap:6px}
        .q-opt{display:flex;align-items:flex-start;gap:9px;padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;cursor:pointer;font-size:13.5px;color:var(--text2);background:var(--bg);transition:all .12s;line-height:1.5}
        .q-opt input{margin-top:2px;accent-color:var(--acc);flex-shrink:0}
        .opt-sel{border-color:var(--acc);color:var(--text);background:rgba(var(--acc-rgb),.07)}
        .opt-ans{border-color:#2e8b57;color:#2e8b57;background:rgba(46,139,87,.08)}
        .dark .opt-ans{color:#52c788;border-color:#52c788}
        .q-exp{margin-top:10px;font-size:13px;padding:8px 12px;border-radius:6px;line-height:1.55}
        .exp-ok{background:rgba(46,139,87,.1);color:#1a7a42}
        .exp-err{background:rgba(192,57,43,.1);color:#a93226}
        .dark .exp-ok{color:#52c788}
        .dark .exp-err{color:#e57b72}
        .quiz-submit{display:block;width:calc(100% - 32px);margin:14px 16px;background:var(--acc);color:#fff;border:none;border-radius:8px;padding:11px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s}
        .quiz-submit:hover:not(:disabled){background:var(--acc2)}
        .quiz-submit:disabled{opacity:.35;cursor:default}
        .quiz-result{padding:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
        .score-num{font-family:'Libre Baskerville',serif;font-size:32px;font-weight:700;color:var(--acc)}
        .score-num span{font-size:18px;color:var(--text2)}
        .score-msg{flex:1;font-size:14px;color:var(--text2)}
        .quiz-retry{background:transparent;border:1.5px solid var(--acc);border-radius:8px;padding:7px 18px;color:var(--acc);font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;transition:all .15s}
        .quiz-retry:hover{background:rgba(var(--acc-rgb),.1)}
        @media(max-width:768px){
          .menu-btn{display:flex!important}
          .sidebar{position:absolute;top:0;bottom:0;left:0;width:min(280px,82vw);transform:translateX(-100%);box-shadow:4px 0 24px rgba(0,0,0,.35)}
          .sidebar.open{transform:translateX(0)}
          .ci{padding:0 16px 80px}
          .hero-title{font-size:20px}
          .pnav{flex-direction:column}
          .nbtn.next{align-items:flex-start;text-align:left}
          .md-h2{font-size:18px}
        }
        @media(min-width:769px){.mov{display:none!important}}
      `}</style>

      <header className="topbar">
        <button className="tb-btn menu-btn" onClick={()=>setSidebarOpen(o=>!o)}>☰</button>
        <span className="tb-logo">Cơ Học Đất<span>UTC · Project-Based Learning</span></span>
        <div className="tb-sp"/>
        <button className="tb-btn" onClick={()=>setSearchOpen(true)} title="Tìm kiếm">🔍</button>
        <button className="tb-btn" onClick={()=>setDark(d=>!d)} title="Đổi giao diện">{dark?'☀️':'🌙'}</button>
      </header>

      {searchOpen&&(
        <div className="sov" onClick={e=>e.target===e.currentTarget&&setSearchOpen(false)}>
          <div className="smod">
            <div className="siw">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input ref={searchRef} className="si" placeholder="Tìm kiếm bài học, công thức..." value={search} onChange={e=>setSearch(e.target.value)}/>
              <span className="sesc" onClick={()=>setSearchOpen(false)}>ESC</span>
            </div>
            <div className="sres">
              {!search.trim()?<div className="sem">Nhập từ khóa để tìm kiếm...</div>
              :searchResults.length===0?<div className="sem">Không tìm thấy "<strong>{search}</strong>"</div>
              :searchResults.map(r=>(
                <div key={r.id} className="sri" onClick={()=>navigate(r.id)}>
                  <div className="sri-ch">{r.chapterIcon} Ch.{r.chapterId} — {r.chapterTitle}</div>
                  <div className="sri-t">{r.title}</div>
                  <div className="sri-x">{r.content.replace(/[#*$`\\]/g,'').slice(0,80)}...</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="layout">
        <div className={`mov ${sidebarOpen?'show':''}`} onClick={()=>setSidebarOpen(false)}/>
        <nav className={`sidebar ${sidebarOpen?'open':''}`}>
          <div className="sbh">
            <div className="sbl">Mục lục</div>
            <div className="sbp"><div className="sbpf" style={{width:`${Math.round((currentIndex/allSections.length)*100)}%`}}/></div>
            <div className="sbpt">{currentIndex+1} / {allSections.length} bài học</div>
          </div>
          <div className="sblist">
            {CHAPTERS.map(ch=>{
              const isExp=expanded[ch.id];
              const hasAct=ch.sections.some(s=>s.id===activeId);
              return(
                <div key={ch.id} className="chl">
                  <div className={`chlabel ${hasAct?'chact':''}`} onClick={()=>setExpanded(p=>({...p,[ch.id]:!p[ch.id]}))}>
                    <span className="chico">{ch.icon}</span>
                    <span className="chnum">{String(ch.id).padStart(2,'0')}</span>
                    <span className="chname">{ch.title}</span>
                    <span className={`charr ${isExp?'open':''}`}>▶</span>
                  </div>
                  {isExp&&(
                    <div className="seclist">
                      {ch.sections.map(s=>(
                        <div key={s.id} className={`secitem ${s.id===activeId?'secact':''}`} onClick={()=>navigate(s.id)}>
                          <span className="secdot"/>
                          {s.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <main className="content-area" ref={contentRef}>
          <div className="ci">
            {activeSection&&(<>
              <div className="hero">
                <div className="hero-meta">
                  <span className="hero-badge">{activeChapter?.icon} Chương {activeChapter?.id}</span>
                </div>
                <h1 className="hero-title">{activeSection.title}</h1>
                <p className="hero-sub"><strong>{activeChapter?.title}</strong> — Mục {activeSection.id.replace('-','.')}</p>
              </div>
              <div className="pnav">
                <button className="nbtn" disabled={!prev} onClick={()=>prev&&navigate(prev.id)}>
                  <span className="ndir">← Trước</span>
                  <span className="ntitle">{prev?.title||'—'}</span>
                </button>
                <button className="nbtn next" disabled={!next} onClick={()=>next&&navigate(next.id)}>
                  <span className="ndir">Tiếp →</span>
                  <span className="ntitle">{next?.title||'—'}</span>
                </button>
              </div>
              <Content section={activeSection}/>
              <div className="pnav" style={{marginTop:32}}>
                <button className="nbtn" disabled={!prev} onClick={()=>prev&&navigate(prev.id)}>
                  <span className="ndir">← Trước</span>
                  <span className="ntitle">{prev?.title||'—'}</span>
                </button>
                <button className="nbtn next" disabled={!next} onClick={()=>next&&navigate(next.id)}>
                  <span className="ndir">Tiếp →</span>
                  <span className="ntitle">{next?.title||'—'}</span>
                </button>
              </div>
            </>)}
          </div>
        </main>
      </div>
    </div>
  );
}
