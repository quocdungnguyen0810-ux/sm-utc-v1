import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { CHAPTERS, getAllSections } from './data.js';

/* ── QUIZ ── */
function Quiz({ questions }) {
  const [sel, setSel] = useState({});
  const [done, setDone] = useState(false);
  const score = useMemo(() => !done ? 0 : questions.reduce((a, q, i) => a + (sel[i] === q.ans ? 1 : 0), 0), [done, sel, questions]);
  const reset = () => { setSel({}); setDone(false); };
  return (
    <div className="quiz">
      <div className="quiz-hd">
        <span className="quiz-ico">✦</span>
        <span>Kiểm tra kiến thức</span>
        <span className="quiz-count">{questions.length} câu hỏi</span>
      </div>
      <div className="quiz-body">
        {questions.map((q, i) => (
          <div key={i} className={`qq ${done ? (sel[i] === q.ans ? 'qq-ok' : 'qq-err') : ''}`}>
            <p className="qq-q"><span className="qq-num">{i + 1}</span>{q.q}</p>
            <div className="qq-opts">
              {q.options.map((o, j) => (
                <label key={j} className={`qq-o ${sel[i] === j ? 'o-sel' : ''} ${done && j === q.ans ? 'o-ans' : ''}`}>
                  <span className="qq-radio">{done && j === q.ans ? '✓' : sel[i] === j ? '●' : ''}</span>
                  <span>{o}</span>
                  <input type="radio" name={`q${i}`} disabled={done} checked={sel[i] === j}
                    onChange={() => !done && setSel(p => ({ ...p, [i]: j }))} />
                </label>
              ))}
            </div>
            {done && (
              <div className={`qq-exp ${sel[i] === q.ans ? 'exp-ok' : 'exp-err'}`}>
                <strong>{sel[i] === q.ans ? 'Chính xác!' : 'Chưa đúng.'}</strong> {q.explain}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="quiz-ft">
        {!done ? (
          <button className="btn-submit" disabled={Object.keys(sel).length < questions.length} onClick={() => setDone(true)}>
            Nộp bài
          </button>
        ) : (
          <div className="quiz-result">
            <div className="q-score">
              <strong>{score}</strong>/{questions.length}
            </div>
            <div className="q-msg">
              {score === questions.length ? '🎉 Xuất sắc — Hoàn hảo!' : score >= Math.ceil(questions.length * .6) ? '👍 Khá tốt!' : '📖 Cần ôn thêm.'}
            </div>
            <button className="btn-retry" onClick={reset}>Thử lại</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── MARKDOWN CONTENT ── */
function MDContent({ section }) {
  if (!section) return null;
  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{
        h2: ({ children }) => <h2 className="p-h2">{children}</h2>,
        h3: ({ children }) => <h3 className="p-h3">{children}</h3>,
        p: ({ children }) => <p className="p-p">{children}</p>,
        blockquote: ({ children }) => <blockquote className="p-bq">{children}</blockquote>,
        table: ({ children }) => <div className="tbl-w"><table className="p-tbl">{children}</table></div>,
        code: ({ inline, children }) => inline
          ? <code className="p-ic">{children}</code>
          : <pre className="p-pre"><code>{children}</code></pre>,
        ul: ({ children }) => <ul className="p-ul">{children}</ul>,
        ol: ({ children }) => <ol className="p-ol">{children}</ol>,
        li: ({ children }) => <li className="p-li">{children}</li>,
        strong: ({ children }) => <strong className="p-b">{children}</strong>,
        hr: () => <hr className="p-hr" />,
      }}>
        {section.content}
      </ReactMarkdown>
      {section.quiz?.length > 0 && <Quiz questions={section.quiz} />}
    </div>
  );
}

/* ── APP ── */
export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState({ 1: true });
  const [activeId, setActiveId] = useState('1-1');
  const [search, setSearch] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const contentRef = useRef(null);
  const allSections = useMemo(() => getAllSections(), []);
  const active = useMemo(() => allSections.find(s => s.id === activeId), [activeId, allSections]);
  const activeChapter = useMemo(() => CHAPTERS.find(c => c.sections.some(s => s.id === activeId)), [activeId]);
  const idx = useMemo(() => allSections.findIndex(s => s.id === activeId), [activeId, allSections]);
  const prev = idx > 0 ? allSections[idx - 1] : null;
  const next = idx < allSections.length - 1 ? allSections[idx + 1] : null;
  const progress = Math.round(((idx + 1) / allSections.length) * 100);

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    return allSections.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.chapterTitle.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q)
    ).slice(0, 7);
  }, [search, allSections]);

  const go = useCallback((id) => {
    setActiveId(id);
    setMenuOpen(false);
    setSearch('');
    setSearchFocus(false);
    const ch = CHAPTERS.find(c => c.sections.some(s => s.id === id));
    if (ch) setExpanded(p => ({ ...p, [ch.id]: true }));
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setSearchFocus(false); setSearch(''); } };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return (
    <div className={`root ${dark ? 'dk' : 'lt'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html,body,#root{height:100%}

        /* ── TOKENS ── */
        .lt{
          --navy:#1a3a5c; --navy2:#122a45; --navy3:#0d1f33;
          --acc:#c8102e; --acc2:#a00d25;
          --gold:#c8960c; --gold2:#a07809;
          --bg:#f5f4f0; --bg2:#ede9e1; --surface:#ffffff;
          --sidebar-bg:#1a3a5c; --sidebar-surface:#122a45;
          --sb-text:#e8e2d8; --sb-muted:#8fa8c2; --sb-hover:rgba(255,255,255,.06);
          --sb-active:rgba(200,150,12,.18); --sb-active-border:#c8960c;
          --text:#1a1612; --text2:#4a4038; --text3:#7a7068;
          --border:#d8d0c4; --border2:#ede9e1;
          --link:#1a3a5c; --shadow:0 2px 12px rgba(20,40,70,.12);
          --shadow2:0 8px 32px rgba(20,40,70,.18);
          --math-bg:#f8f3e8; --math-b:#c8960c;
          --bq-bg:#f0f4f8; --bq-b:#1a3a5c;
          --tbl-h:#1a3a5c; --tbl-alt:#f5f4f0;
          --code-bg:#f0ede6; --tag-bg:#e8f0f8; --tag-text:#1a3a5c;
          --overlay:rgba(10,20,40,.6);
        }
        .dk{
          --navy:#0d1f33; --navy2:#0a1828; --navy3:#060f1c;
          --acc:#e8304a; --acc2:#c8102e;
          --gold:#d4a820; --gold2:#b08a18;
          --bg:#0e1520; --bg2:#141d2b; --surface:#111928;
          --sidebar-bg:#0a1828; --sidebar-surface:#0d1f33;
          --sb-text:#d8d0c0; --sb-muted:#5a7898; --sb-hover:rgba(255,255,255,.04);
          --sb-active:rgba(212,168,32,.15); --sb-active-border:#d4a820;
          --text:#e8e2d4; --text2:#a09080; --text3:#60584e;
          --border:#1e2d40; --border2:#141d2b;
          --link:#6a9ec8; --shadow:0 2px 12px rgba(0,0,0,.4);
          --shadow2:0 8px 32px rgba(0,0,0,.6);
          --math-bg:#111928; --math-b:#d4a820;
          --bq-bg:#0d1f33; --bq-b:#6a9ec8;
          --tbl-h:#0d1f33; --tbl-alt:#141d2b;
          --code-bg:#141d2b; --tag-bg:#0d1f33; --tag-text:#6a9ec8;
          --overlay:rgba(0,0,0,.75);
        }

        .root{font-family:'Inter',sans-serif;height:100dvh;display:flex;flex-direction:column;overflow:hidden;background:var(--bg);color:var(--text);transition:background .3s,color .3s}

        /* ── TOP BAND (publisher brand) ── */
        .topband{
          background:var(--navy3);
          height:36px;display:flex;align-items:center;padding:0 16px;gap:12px;
          flex-shrink:0;border-bottom:1px solid rgba(255,255,255,.06);
        }
        .tb-brand{
          font-family:'Playfair Display',serif;font-size:13px;font-weight:500;
          color:rgba(255,255,255,.9);letter-spacing:.01em;white-space:nowrap;
        }
        .tb-brand em{font-style:italic;color:var(--gold)}
        .tb-div{width:1px;height:14px;background:rgba(255,255,255,.2)}
        .tb-sub{font-size:11px;color:rgba(255,255,255,.45);letter-spacing:.06em;text-transform:uppercase}
        .tb-sp{flex:1}
        .tb-pill{
          font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;
          background:var(--acc);color:#fff;padding:3px 10px;border-radius:20px;
        }

        /* ── NAVBAR ── */
        .navbar{
          background:var(--navy);height:52px;
          display:flex;align-items:center;padding:0 14px;gap:10px;
          flex-shrink:0;border-bottom:2px solid var(--gold);
          position:relative;z-index:200;
        }
        .nav-menu{
          background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);
          border-radius:6px;width:34px;height:34px;cursor:pointer;
          color:rgba(255,255,255,.9);font-size:16px;
          display:none;align-items:center;justify-content:center;
          transition:background .15s;flex-shrink:0;
        }
        .nav-menu:hover{background:rgba(255,255,255,.18)}
        .nav-title{
          font-family:'Playfair Display',serif;font-size:15px;font-weight:700;
          color:#fff;white-space:nowrap;
        }
        .nav-title span{color:var(--gold);font-style:italic}
        .nav-sp{flex:1}

        /* Search bar */
        .nav-search{position:relative;flex:1;max-width:320px}
        .ns-input{
          width:100%;background:rgba(255,255,255,.1);
          border:1px solid rgba(255,255,255,.15);border-radius:6px;
          padding:7px 12px 7px 34px;color:#fff;font-size:13px;
          font-family:'Inter',sans-serif;outline:none;transition:all .2s;
        }
        .ns-input::placeholder{color:rgba(255,255,255,.45)}
        .ns-input:focus{background:rgba(255,255,255,.16);border-color:var(--gold)}
        .ns-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:rgba(255,255,255,.4);font-size:13px;pointer-events:none}
        .ns-drop{
          position:absolute;top:calc(100% + 6px);left:0;right:0;
          background:var(--surface);border:1px solid var(--border);
          border-radius:8px;box-shadow:var(--shadow2);z-index:300;
          overflow:hidden;
        }
        .ns-item{padding:11px 14px;cursor:pointer;border-bottom:1px solid var(--border2);transition:background .12s}
        .ns-item:hover{background:var(--bg2)}
        .ns-item:last-child{border-bottom:none}
        .ns-ch{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--gold);margin-bottom:2px}
        .ns-t{font-size:13px;color:var(--text);font-weight:500}
        .ns-x{font-size:11.5px;color:var(--text3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px}
        .ns-empty{padding:14px;text-align:center;color:var(--text3);font-size:13px}

        .nav-btn{
          background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);
          border-radius:6px;width:34px;height:34px;cursor:pointer;
          color:rgba(255,255,255,.9);font-size:15px;
          display:flex;align-items:center;justify-content:center;
          transition:background .15s;flex-shrink:0;
        }
        .nav-btn:hover{background:rgba(255,255,255,.18)}

        /* ── PROGRESS BAR ── */
        .prog-bar{height:3px;background:var(--border);flex-shrink:0}
        .prog-fill{height:100%;background:linear-gradient(90deg,var(--gold),var(--acc));transition:width .4s ease}

        /* ── LAYOUT ── */
        .layout{flex:1;display:flex;overflow:hidden;position:relative}
        .mob-ov{display:none;position:absolute;inset:0;background:var(--overlay);z-index:90}
        .mob-ov.on{display:block}

        /* ── SIDEBAR ── */
        .sidebar{
          width:272px;flex-shrink:0;
          background:var(--sidebar-bg);
          display:flex;flex-direction:column;
          border-right:1px solid rgba(255,255,255,.04);
          overflow:hidden;z-index:100;
          transition:transform .3s cubic-bezier(.4,0,.2,1);
        }
        .sb-top{
          padding:16px;
          background:var(--sidebar-surface);
          border-bottom:1px solid rgba(255,255,255,.05);
          flex-shrink:0;
        }
        .sb-eyebrow{font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--sb-muted);margin-bottom:8px}
        .sb-title{font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:var(--sb-text);margin-bottom:2px}
        .sb-authors{font-size:11px;color:var(--sb-muted);font-style:italic;margin-bottom:12px}
        .sb-stat{display:flex;gap:12px}
        .sb-s{display:flex;flex-direction:column;gap:2px}
        .sb-sv{font-size:16px;font-weight:700;color:var(--gold)}
        .sb-sk{font-size:10px;color:var(--sb-muted);letter-spacing:.04em}

        .sb-nav{flex:1;overflow-y:auto;padding:8px 0 20px}
        .sb-nav::-webkit-scrollbar{width:3px}
        .sb-nav::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:2px}

        /* Chapter row */
        .ch-row{cursor:pointer;user-select:none;display:flex;align-items:center;gap:0;padding:10px 16px;transition:background .12s;border-left:3px solid transparent}
        .ch-row:hover{background:var(--sb-hover)}
        .ch-row.ch-on{background:var(--sb-active);border-left-color:var(--sb-active-border)}
        .ch-ico{font-size:16px;margin-right:8px;flex-shrink:0}
        .ch-n{font-size:9px;font-weight:700;letter-spacing:.1em;color:var(--sb-muted);text-transform:uppercase;margin-right:8px;min-width:20px}
        .ch-nm{flex:1;font-size:12.5px;color:var(--sb-text);line-height:1.35;font-weight:500}
        .ch-arr{font-size:9px;color:var(--sb-muted);transition:transform .2s;margin-left:4px}
        .ch-arr.op{transform:rotate(90deg)}

        /* Section row */
        .sc-row{display:flex;align-items:flex-start;gap:8px;padding:7px 16px 7px 46px;cursor:pointer;font-size:12px;color:var(--sb-muted);transition:all .12s;border-left:3px solid transparent;line-height:1.4}
        .sc-row:hover{color:var(--sb-text);background:var(--sb-hover)}
        .sc-row.sc-on{color:var(--gold);background:var(--sb-active);border-left-color:var(--gold);font-weight:500}
        .sc-dot{width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.5;flex-shrink:0;margin-top:5px}
        .sc-on .sc-dot{opacity:1}

        /* ── CONTENT ── */
        .content{flex:1;overflow-y:auto;background:var(--bg)}
        .content::-webkit-scrollbar{width:5px}
        .content::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}

        .wrap{max-width:780px;margin:0 auto;padding:0}

        /* Hero strip */
        .hero{background:var(--navy);padding:28px 24px 24px;position:relative;overflow:hidden}
        .hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--acc))}
        .hero-crumb{font-size:11px;color:rgba(255,255,255,.5);margin-bottom:12px;display:flex;align-items:center;gap:6px}
        .hero-crumb-sep{opacity:.4}
        .hero-crumb-ch{color:var(--gold);font-weight:500}
        .hero-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(200,150,12,.2);border:1px solid rgba(200,150,12,.4);color:var(--gold);padding:4px 12px;border-radius:4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;margin-bottom:14px}
        .hero-h1{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:#fff;line-height:1.3;margin-bottom:6px}
        .hero-sub{font-size:13px;color:rgba(255,255,255,.55)}

        /* Nav strip */
        .nav-strip{display:flex;gap:0;border-bottom:1px solid var(--border);background:var(--surface);flex-shrink:0}
        .ns-prev,.ns-next{flex:1;display:flex;align-items:center;gap:10px;padding:12px 16px;cursor:pointer;transition:background .15s;font-family:'Inter',sans-serif;border:none;background:transparent;color:var(--text2)}
        .ns-prev:hover:not(:disabled),.ns-next:hover:not(:disabled){background:var(--bg2);color:var(--navy)}
        .ns-prev:disabled,.ns-next:disabled{opacity:.25;cursor:default}
        .ns-next{justify-content:flex-end;border-left:1px solid var(--border)}
        .ns-arr{font-size:18px;color:var(--text3)}
        .ns-next .ns-arr{order:2}
        .ns-info{display:flex;flex-direction:column;gap:1px}
        .ns-next .ns-info{align-items:flex-end}
        .ns-dir{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3)}
        .ns-name{font-size:12.5px;font-weight:500;line-height:1.3}

        /* Prose */
        .body-area{padding:28px 24px 60px;background:var(--surface)}
        .prose{}
        .p-h2{font-family:'Playfair Display',serif;font-size:21px;font-weight:700;color:var(--navy);margin:32px 0 14px;padding-bottom:10px;border-bottom:2px solid var(--border)}
        .dk .p-h2{color:var(--sb-text)}
        .p-h2:first-child{margin-top:0}
        .p-h3{font-size:15px;font-weight:700;color:var(--acc);margin:22px 0 10px;letter-spacing:.01em}
        .p-p{font-size:15px;color:var(--text2);margin-bottom:14px;line-height:1.85}
        .p-b{color:var(--text);font-weight:600}
        .p-bq{border-left:3px solid var(--navy);background:var(--bq-bg);padding:12px 16px;margin:16px 0;border-radius:0 6px 6px 0;font-size:14px;color:var(--text2);font-style:italic}
        .dk .p-bq{border-left-color:var(--bq-b)}
        .p-ic{background:var(--code-bg);border:1px solid var(--border);border-radius:3px;padding:1px 6px;font-family:'Courier New',monospace;font-size:13px;color:var(--acc)}
        .p-pre{background:var(--code-bg);border:1px solid var(--border);border-radius:6px;padding:14px;overflow-x:auto;margin:14px 0;font-size:13px}
        .p-hr{border:none;border-top:1px solid var(--border);margin:20px 0}
        .p-ul,.p-ol{padding-left:22px;margin:10px 0}
        .p-li{font-size:15px;color:var(--text2);margin-bottom:7px;line-height:1.75}
        .tbl-w{overflow-x:auto;margin:16px 0;border-radius:6px;border:1px solid var(--border);box-shadow:var(--shadow)}
        .p-tbl{width:100%;border-collapse:collapse;font-size:13.5px}
        .p-tbl th{background:var(--tbl-h);color:#fff;padding:9px 12px;text-align:left;font-weight:600;font-size:13px;letter-spacing:.01em}
        .p-tbl td{padding:8px 12px;border-bottom:1px solid var(--border2);color:var(--text2);vertical-align:top}
        .p-tbl tr:nth-child(even) td{background:var(--tbl-alt)}
        .p-tbl tr:last-child td{border-bottom:none}

        /* KaTeX */
        .katex-display{padding:14px 16px;background:var(--math-bg);border-left:3px solid var(--math-b);border-radius:0 6px 6px 0;margin:16px 0;overflow-x:auto}
        .katex{font-size:1.05em}
        .lt .katex{color:#1a1612}
        .dk .katex{color:#e8e2d4}

        /* ── QUIZ ── */
        .quiz{margin-top:36px;border-radius:8px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)}
        .quiz-hd{background:var(--navy);color:#fff;padding:13px 18px;display:flex;align-items:center;gap:10px;font-weight:700;font-size:13.5px;font-family:'Playfair Display',serif}
        .dk .quiz-hd{background:var(--navy2)}
        .quiz-ico{color:var(--gold);font-size:16px}
        .quiz-count{margin-left:auto;font-size:11px;font-weight:400;font-family:'Inter',sans-serif;background:rgba(255,255,255,.12);padding:2px 9px;border-radius:20px}
        .quiz-body{background:var(--surface)}
        .qq{padding:16px 18px;border-bottom:1px solid var(--border2);transition:background .15s}
        .qq-ok{background:rgba(30,120,60,.05)}
        .qq-err{background:rgba(180,30,30,.05)}
        .qq-q{font-size:14px;font-weight:600;color:var(--text);margin-bottom:12px;line-height:1.5;display:flex;align-items:baseline;gap:8px}
        .qq-num{background:var(--navy);color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}
        .dk .qq-num{background:var(--navy2)}
        .qq-opts{display:flex;flex-direction:column;gap:7px}
        .qq-o{display:flex;align-items:center;gap:10px;padding:9px 13px;border:1.5px solid var(--border);border-radius:6px;cursor:pointer;font-size:13.5px;color:var(--text2);background:var(--bg);transition:all .12s;line-height:1.45}
        .qq-o input{display:none}
        .qq-radio{width:20px;height:20px;border-radius:50%;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;background:var(--surface);transition:all .15s}
        .o-sel{border-color:var(--navy);color:var(--text)}
        .o-sel .qq-radio{border-color:var(--navy);background:var(--navy);color:#fff}
        .dk .o-sel{border-color:var(--gold)}
        .dk .o-sel .qq-radio{border-color:var(--gold);background:var(--gold);color:#111}
        .o-ans{border-color:#2a9a5a;color:#1a7a42}
        .o-ans .qq-radio{border-color:#2a9a5a;background:#2a9a5a;color:#fff}
        .dk .o-ans{color:#52c788;border-color:#52c788}
        .dk .o-ans .qq-radio{border-color:#52c788;background:#52c788;color:#111}
        .qq-exp{margin-top:10px;font-size:13px;padding:10px 13px;border-radius:6px;line-height:1.6}
        .exp-ok{background:rgba(30,120,60,.08);color:#1a5a30;border-left:3px solid #2a9a5a}
        .exp-err{background:rgba(180,30,30,.08);color:#8a1a1a;border-left:3px solid #c8102e}
        .dk .exp-ok{color:#52c788}
        .dk .exp-err{color:#e88080}
        .quiz-ft{padding:14px 18px;background:var(--bg2);border-top:1px solid var(--border)}
        .btn-submit{width:100%;padding:11px;background:var(--navy);color:#fff;border:none;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;transition:background .15s;letter-spacing:.01em}
        .btn-submit:hover:not(:disabled){background:var(--navy2)}
        .btn-submit:disabled{opacity:.3;cursor:default}
        .quiz-result{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
        .q-score{font-family:'Playfair Display',serif;font-size:34px;font-weight:700;color:var(--navy);line-height:1}
        .dk .q-score{color:var(--gold)}
        .q-score strong{font-size:40px}
        .q-msg{flex:1;font-size:14px;color:var(--text2)}
        .btn-retry{background:transparent;border:1.5px solid var(--navy);border-radius:6px;padding:8px 18px;color:var(--navy);font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;font-size:13px;transition:all .15s;white-space:nowrap}
        .btn-retry:hover{background:var(--navy);color:#fff}
        .dk .btn-retry{border-color:var(--gold);color:var(--gold)}
        .dk .btn-retry:hover{background:var(--gold);color:#111}

        /* ── MOBILE ── */
        @media(max-width:768px){
          .topband{display:none}
          .nav-menu{display:flex!important}
          .nav-search{max-width:none}
          .nav-title{display:none}
          .sidebar{position:absolute;top:0;bottom:0;left:0;width:min(288px,88vw);transform:translateX(-100%);box-shadow:4px 0 32px rgba(0,0,0,.4)}
          .sidebar.op{transform:translateX(0)}
          .mob-ov.on{display:block}
          .hero{padding:20px 16px 18px}
          .hero-h1{font-size:19px}
          .body-area{padding:20px 16px 60px}
          .ns-name{font-size:12px}
          .ns-prev,.ns-next{padding:10px 12px}
          .p-h2{font-size:18px}
          .p-p,.p-li{font-size:14.5px}
        }
        @media(min-width:769px){
          .mob-ov{display:none!important}
          .nav-title{display:block}
        }
        @media(max-width:480px){
          .hero-h1{font-size:17px}
          .hero{padding:16px 14px}
          .body-area{padding:16px 14px 60px}
        }
      `}</style>

      {/* TOP BAND */}
      <div className="topband">
        <span className="tb-brand">Cơ Học Đất · <em>Học theo Dự án</em></span>
        <div className="tb-div" />
        <span className="tb-sub">Ivan Gratchev, D.S. Jeng, Erwin Oh</span>
        <div className="tb-sp" />
        <span className="tb-pill">CRC Press · 2019</span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <button className="nav-menu" onClick={() => setMenuOpen(o => !o)}>☰</button>
        <span className="nav-title">Cơ Học <span>Đất</span></span>
        <div className="nav-sp" />
        <div className="nav-search">
          <span className="ns-icon">⌕</span>
          <input className="ns-input" placeholder="Tìm kiếm bài học..."
            value={search} onChange={e => setSearch(e.target.value)}
            onFocus={() => setSearchFocus(true)} onBlur={() => setTimeout(() => setSearchFocus(false), 180)} />
          {searchFocus && search.trim() && (
            <div className="ns-drop">
              {searchResults.length === 0
                ? <div className="ns-empty">Không tìm thấy kết quả</div>
                : searchResults.map(r => (
                  <div key={r.id} className="ns-item" onMouseDown={() => go(r.id)}>
                    <div className="ns-ch">{r.chapterIcon} Ch.{r.chapterId} — {r.chapterTitle}</div>
                    <div className="ns-t">{r.title}</div>
                    <div className="ns-x">{r.content.replace(/[#*$`\\[\]]/g, '').slice(0, 72)}…</div>
                  </div>
                ))
              }
            </div>
          )}
        </div>
        <button className="nav-btn" onClick={() => setDark(d => !d)} title="Đổi giao diện">{dark ? '☀' : '◑'}</button>
      </nav>

      {/* PROGRESS */}
      <div className="prog-bar">
        <div className="prog-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="layout">
        {/* Mobile overlay */}
        <div className={`mob-ov ${menuOpen ? 'on' : ''}`} onClick={() => setMenuOpen(false)} />

        {/* SIDEBAR */}
        <aside className={`sidebar ${menuOpen ? 'op' : ''}`}>
          <div className="sb-top">
            <div className="sb-eyebrow">Giáo trình · Địa kỹ thuật</div>
            <div className="sb-title">Cơ Học Đất</div>
            <div className="sb-authors">Gratchev · Jeng · Oh</div>
            <div className="sb-stat">
              <div className="sb-s"><div className="sb-sv">{CHAPTERS.length}</div><div className="sb-sk">Chương</div></div>
              <div className="sb-s"><div className="sb-sv">{allSections.length}</div><div className="sb-sk">Bài học</div></div>
              <div className="sb-s"><div className="sb-sv">{progress}%</div><div className="sb-sk">Tiến độ</div></div>
            </div>
          </div>
          <div className="sb-nav">
            {CHAPTERS.map(ch => {
              const isExp = expanded[ch.id];
              const hasActive = ch.sections.some(s => s.id === activeId);
              return (
                <div key={ch.id}>
                  <div className={`ch-row ${hasActive ? 'ch-on' : ''}`}
                    onClick={() => setExpanded(p => ({ ...p, [ch.id]: !p[ch.id] }))}>
                    <span className="ch-ico">{ch.icon}</span>
                    <span className="ch-n">{String(ch.id).padStart(2, '0')}</span>
                    <span className="ch-nm">{ch.title}</span>
                    <span className={`ch-arr ${isExp ? 'op' : ''}`}>▶</span>
                  </div>
                  {isExp && ch.sections.map(s => (
                    <div key={s.id} className={`sc-row ${s.id === activeId ? 'sc-on' : ''}`} onClick={() => go(s.id)}>
                      <span className="sc-dot" />
                      {s.title}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </aside>

        {/* CONTENT */}
        <main className="content" ref={contentRef}>
          <div className="wrap">
            {active && (<>
              {/* Hero */}
              <div className="hero">
                <div className="hero-crumb">
                  <span>Cơ Học Đất</span>
                  <span className="hero-crumb-sep">›</span>
                  <span className="hero-crumb-ch">{activeChapter?.icon} {activeChapter?.title}</span>
                  <span className="hero-crumb-sep">›</span>
                  <span>{active.title}</span>
                </div>
                <div className="hero-tag">
                  {activeChapter?.icon}&nbsp; Chương {activeChapter?.id} · Mục {active.id.replace('-', '.')}
                </div>
                <h1 className="hero-h1">{active.title}</h1>
                <div className="hero-sub">{activeChapter?.title}</div>
              </div>

              {/* Nav strip */}
              <div className="nav-strip">
                <button className="ns-prev" disabled={!prev} onClick={() => prev && go(prev.id)}>
                  <span className="ns-arr">‹</span>
                  <div className="ns-info">
                    <span className="ns-dir">Trước</span>
                    <span className="ns-name">{prev?.title || '—'}</span>
                  </div>
                </button>
                <button className="ns-next" disabled={!next} onClick={() => next && go(next.id)}>
                  <div className="ns-info">
                    <span className="ns-dir">Tiếp theo</span>
                    <span className="ns-name">{next?.title || '—'}</span>
                  </div>
                  <span className="ns-arr">›</span>
                </button>
              </div>

              {/* Body */}
              <div className="body-area">
                <MDContent section={active} />
              </div>

              {/* Nav strip bottom */}
              <div className="nav-strip" style={{ borderTop: '1px solid var(--border)', borderBottom: 'none' }}>
                <button className="ns-prev" disabled={!prev} onClick={() => prev && go(prev.id)}>
                  <span className="ns-arr">‹</span>
                  <div className="ns-info">
                    <span className="ns-dir">Trước</span>
                    <span className="ns-name">{prev?.title || '—'}</span>
                  </div>
                </button>
                <button className="ns-next" disabled={!next} onClick={() => next && go(next.id)}>
                  <div className="ns-info">
                    <span className="ns-dir">Tiếp theo</span>
                    <span className="ns-name">{next?.title || '—'}</span>
                  </div>
                  <span className="ns-arr">›</span>
                </button>
              </div>
            </>)}
          </div>
        </main>
      </div>
    </div>
  );
}
