import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { CHAPTERS } from './data.js'

// ── helpers ────────────────────────────────────────────────────────────────
const flatLessons = CHAPTERS.map(ch => ({ id: ch.id, title: ch.title, subtitle: ch.subtitle, icon: ch.icon }))

function useDebounce(val, ms) {
  const [dv, setDv] = useState(val)
  useEffect(() => { const t = setTimeout(() => setDv(val), ms); return () => clearTimeout(t) }, [val, ms])
  return dv
}

// ── QUIZ ──────────────────────────────────────────────────────────────────
function Quiz({ questions }) {
  const [sel, setSel] = useState({})
  const [done, setDone] = useState(false)
  const reset = () => { setSel({}); setDone(false) }
  const score = done ? questions.reduce((a, q, i) => a + (sel[i] === q.ans ? 1 : 0), 0) : 0
  const pct = done ? Math.round(score / questions.length * 100) : 0

  return (
    <div className="quiz-wrap">
      <div className="quiz-top">
        <span className="quiz-icon">🎯</span>
        <span>Kiểm tra kiến thức</span>
        <span className="quiz-count">{questions.length} câu</span>
      </div>

      <div className="quiz-body">
        {questions.map((q, i) => {
          const picked = sel[i]
          const correct = done && picked === q.ans
          const wrong = done && picked !== undefined && picked !== q.ans
          return (
            <div key={i} className={`q-item${correct ? ' q-correct' : wrong ? ' q-wrong' : ''}`}>
              <p className="q-text"><span className="q-num">{i + 1}</span>{q.q}</p>
              <div className="q-opts">
                {q.options.map((opt, j) => (
                  <label key={j} className={`q-opt${sel[i] === j ? ' q-picked' : ''}${done && j === q.ans ? ' q-ans' : ''}`}>
                    <input type="radio" name={`q${i}`} disabled={done} checked={sel[i] === j} onChange={() => setSel(p => ({ ...p, [i]: j }))} />
                    <span className="q-opt-mark">{String.fromCharCode(65 + j)}</span>
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              {done && (
                <div className={`q-explain${correct ? ' q-explain-ok' : ' q-explain-err'}`}>
                  {correct ? '✅' : '❌'} <strong>{correct ? 'Đúng!' : `Sai — Đáp án: ${q.options[q.ans]}`}</strong> — {q.explain}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="quiz-foot">
        {!done ? (
          <button className="btn-submit" disabled={Object.keys(sel).length < questions.length} onClick={() => setDone(true)}>
            Nộp bài ✓
          </button>
        ) : (
          <div className="quiz-result">
            <div className="result-bar-wrap">
              <div className="result-bar" style={{ width: `${pct}%`, background: pct >= 70 ? 'var(--accent)' : pct >= 50 ? '#f59e0b' : '#ef4444' }} />
            </div>
            <div className="result-info">
              <span className="result-score">{score}/{questions.length}</span>
              <span className="result-pct">{pct >= 80 ? '🎉 Xuất sắc!' : pct >= 60 ? '👍 Khá tốt!' : '📖 Ôn lại nhé!'}</span>
              <button className="btn-reset" onClick={reset}>↺ Làm lại</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── REFERENCES ────────────────────────────────────────────────────────────
function References({ refs }) {
  if (!refs?.length) return null
  const groups = { data: refs.filter(r => r.type === 'data'), standard: refs.filter(r => r.type === 'standard'), link: refs.filter(r => r.type === 'link') }
  const Label = ({ type }) => ({
    data: <span className="ref-badge ref-data">📊 Số liệu</span>,
    standard: <span className="ref-badge ref-std">📋 Tiêu chuẩn</span>,
    link: <span className="ref-badge ref-link">🔗 Liên kết</span>
  }[type])

  return (
    <div className="refs-wrap">
      <h3 className="refs-title">📚 Tài liệu Tham khảo</h3>
      {groups.data.length > 0 && (
        <div className="ref-group">
          <div className="ref-group-title">Số liệu Dự án Pimpama</div>
          {groups.data.map((r, i) => (
            <div key={i} className="ref-item">
              <Label type="data" />
              <div className="ref-content">
                <strong>{r.label}</strong>
                {r.value && <span className="ref-value">{r.value}</span>}
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {groups.standard.length > 0 && (
        <div className="ref-group">
          <div className="ref-group-title">Tiêu chuẩn thí nghiệm</div>
          {groups.standard.map((r, i) => (
            <div key={i} className="ref-item">
              <Label type="standard" />
              <div className="ref-content"><strong>{r.label}</strong><p>{r.desc}</p></div>
            </div>
          ))}
        </div>
      )}
      {groups.link.length > 0 && (
        <div className="ref-group">
          <div className="ref-group-title">Liên kết hữu ích</div>
          {groups.link.map((r, i) => (
            <div key={i} className="ref-item">
              <Label type="link" />
              <div className="ref-content">
                {r.url ? <a href={r.url} target="_blank" rel="noreferrer"><strong>{r.label}</strong></a> : <strong>{r.label}</strong>}
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── MAIN APP ──────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [activeId, setActiveId] = useState(1)
  const [tab, setTab] = useState('content') // content | quiz | refs
  const [sideOpen, setSideOpen] = useState(false)
  const [search, setSearch] = useState('')
  const contentRef = useRef(null)
  const dSearch = useDebounce(search, 200)

  const chapter = useMemo(() => CHAPTERS.find(c => c.id === activeId), [activeId])

  const searchResults = useMemo(() => {
    if (!dSearch.trim()) return []
    const q = dSearch.toLowerCase()
    return CHAPTERS.filter(c => c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q) || c.content.toLowerCase().includes(q))
  }, [dSearch])

  const go = useCallback((id) => {
    setActiveId(id); setTab('content'); setSideOpen(false)
    setTimeout(() => contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }, [])

  const prev = activeId > 1 ? CHAPTERS.find(c => c.id === activeId - 1) : null
  const next = activeId < CHAPTERS.length ? CHAPTERS.find(c => c.id === activeId + 1) : null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html,body,#root{height:100%;font-size:16px}

        :root{
          --bg:#f6f4ef;
          --bg2:#edeae2;
          --surface:#ffffff;
          --side-bg:#1c1917;
          --side-text:#e7e5e0;
          --side-muted:#a8a29e;
          --side-hover:rgba(255,255,255,0.06);
          --side-active:rgba(214,165,90,0.15);
          --accent:#b5621e;
          --accent-light:#f0c070;
          --accent2:#8b4513;
          --text:#1c1917;
          --text2:#57534e;
          --text3:#a8a29e;
          --border:#ddd8d0;
          --border2:#c9c3b8;
          --card:#ffffff;
          --math-bg:#fdf8ef;
          --code-bg:#f5f1e8;
          --correct:#166534;
          --correct-bg:#dcfce7;
          --wrong:#991b1b;
          --wrong-bg:#fee2e2;
          --shadow:0 1px 3px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.06);
          --shadow-lg:0 4px 20px rgba(0,0,0,0.12);
        }
        .dark{
          --bg:#111110;
          --bg2:#1c1917;
          --surface:#1c1917;
          --side-bg:#0c0c0b;
          --side-text:#e7e5e0;
          --side-muted:#78716c;
          --side-hover:rgba(255,255,255,0.04);
          --side-active:rgba(214,165,90,0.12);
          --accent:#d4855a;
          --accent-light:#f0c070;
          --accent2:#b86940;
          --text:#e7e5e0;
          --text2:#a8a29e;
          --text3:#57534e;
          --border:#292524;
          --border2:#44403c;
          --card:#1c1917;
          --math-bg:#1c1917;
          --code-bg:#252220;
          --correct:#16a34a;
          --correct-bg:#14532d22;
          --wrong:#ef4444;
          --wrong-bg:#7f1d1d22;
          --shadow:0 1px 3px rgba(0,0,0,0.3),0 4px 12px rgba(0,0,0,0.2);
          --shadow-lg:0 4px 20px rgba(0,0,0,0.4);
        }

        body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);transition:background 0.2s,color 0.2s}

        /* ── LAYOUT ── */
        .app{display:flex;flex-direction:column;height:100dvh;overflow:hidden}

        /* ── TOPBAR ── */
        .topbar{
          height:52px;background:var(--side-bg);display:flex;align-items:center;
          padding:0 12px;gap:10px;flex-shrink:0;z-index:100;
          border-bottom:1px solid rgba(255,255,255,0.05);
        }
        .tb-logo{font-family:'Merriweather',serif;font-size:14px;color:var(--accent-light);white-space:nowrap;font-weight:700;letter-spacing:0.02em}
        .tb-logo span{opacity:0.6;font-weight:400}
        .tb-search{flex:1;position:relative;max-width:360px}
        .tb-search input{
          width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);
          border-radius:6px;padding:6px 10px 6px 30px;color:var(--side-text);font-size:13px;
          outline:none;font-family:inherit;transition:border 0.15s;
        }
        .tb-search input:focus{border-color:rgba(214,165,90,0.4);background:rgba(255,255,255,0.1)}
        .tb-search input::placeholder{color:var(--side-muted)}
        .search-ico{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--side-muted);font-size:12px;pointer-events:none}
        .search-drop{
          position:absolute;top:calc(100% + 6px);left:0;right:0;
          background:var(--surface);border:1px solid var(--border);border-radius:8px;
          box-shadow:var(--shadow-lg);z-index:200;overflow:hidden;
        }
        .search-item{padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);transition:background 0.1s}
        .search-item:hover{background:var(--bg2)}
        .search-item:last-child{border:none}
        .si-num{font-size:10px;color:var(--accent);font-weight:700;letter-spacing:0.06em;margin-bottom:2px}
        .si-title{font-size:13px;color:var(--text);font-weight:500}
        .si-sub{font-size:11px;color:var(--text2);margin-top:1px}
        .tb-btn{
          background:rgba(255,255,255,0.06);border:none;border-radius:6px;width:34px;height:34px;
          cursor:pointer;color:var(--side-text);font-size:15px;display:flex;align-items:center;justify-content:center;
          flex-shrink:0;transition:background 0.15s;
        }
        .tb-btn:hover{background:rgba(255,255,255,0.12)}
        .menu-btn{display:none}
        @media(max-width:768px){.menu-btn{display:flex!important}}

        /* ── MAIN ── */
        .main{display:flex;flex:1;overflow:hidden;position:relative}

        /* ── SIDEBAR ── */
        .sidebar{
          width:270px;background:var(--side-bg);display:flex;flex-direction:column;
          flex-shrink:0;overflow:hidden;transition:transform 0.26s cubic-bezier(0.4,0,0.2,1);z-index:50;
        }
        .side-head{padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06)}
        .side-label{font-size:10px;font-weight:700;letter-spacing:0.1em;color:var(--side-muted);text-transform:uppercase;margin-bottom:8px}
        .side-progress{height:3px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;margin-bottom:4px}
        .side-bar{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent-light));border-radius:2px;transition:width 0.4s ease}
        .side-prog-txt{font-size:10px;color:var(--side-muted)}
        .ch-list{flex:1;overflow-y:auto;padding:6px 0}
        .ch-list::-webkit-scrollbar{width:3px}
        .ch-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:2px}
        .ch-row{cursor:pointer;user-select:none}
        .ch-label{
          display:flex;align-items:center;gap:8px;padding:9px 16px;
          font-size:13px;color:var(--side-text);transition:background 0.12s;
          border-left:3px solid transparent;
        }
        .ch-label:hover{background:var(--side-hover)}
        .ch-label.active{background:var(--side-active);border-left-color:var(--accent-light);color:var(--accent-light)}
        .ch-icon{font-size:15px;flex-shrink:0}
        .ch-num{font-size:9px;color:var(--side-muted);font-weight:700;letter-spacing:0.06em;min-width:20px}
        .ch-text{flex:1;line-height:1.3;font-size:12.5px}
        .ch-label.active .ch-text{font-weight:600}

        /* overlay mobile */
        .overlay{position:absolute;inset:0;background:rgba(0,0,0,0.55);z-index:40;display:none}
        .overlay.on{display:block}
        @media(max-width:768px){
          .sidebar{position:absolute;top:0;left:0;bottom:0;transform:translateX(-100%);box-shadow:4px 0 24px rgba(0,0,0,0.4)}
          .sidebar.open{transform:translateX(0)}
        }

        /* ── CONTENT ── */
        .content{flex:1;overflow-y:auto;background:var(--bg)}
        .content::-webkit-scrollbar{width:4px}
        .content::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}
        .content-inner{max-width:780px;margin:0 auto;padding:0 0 80px}

        /* chapter header */
        .ch-hero{
          background:var(--side-bg);padding:24px 20px 20px;position:sticky;top:0;z-index:10;
          border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .hero-meta{font-size:10px;font-weight:700;letter-spacing:0.12em;color:var(--accent-light);opacity:0.8;margin-bottom:6px;text-transform:uppercase}
        .hero-title{font-family:'Merriweather',serif;font-size:20px;color:var(--side-text);font-weight:700;line-height:1.3}
        .hero-sub{font-size:12px;color:var(--side-muted);margin-top:4px}
        @media(max-width:480px){.hero-title{font-size:17px}}

        /* tabs */
        .tabs{display:flex;background:var(--bg2);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:9}
        .tab-btn{
          flex:1;padding:11px 4px;font-size:12px;font-weight:500;color:var(--text2);
          background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;
          transition:all 0.15s;font-family:inherit;
        }
        .tab-btn.on{color:var(--accent);border-bottom-color:var(--accent);background:var(--surface)}
        .tab-btn:hover:not(.on){background:var(--bg);color:var(--text)}

        /* article markdown */
        .article{padding:20px 20px 0;line-height:1.85}
        .article h2{font-family:'Merriweather',serif;font-size:19px;font-weight:700;color:var(--text);margin:28px 0 14px;padding-bottom:8px;border-bottom:2px solid var(--border)}
        .article h2:first-child{margin-top:0}
        .article h3{font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:var(--accent);margin:22px 0 10px}
        .article h4{font-size:14px;font-weight:600;color:var(--text);margin:16px 0 8px}
        .article p{font-size:14.5px;color:var(--text2);margin-bottom:12px;line-height:1.85}
        .article strong{color:var(--text);font-weight:600}
        .article em{font-style:italic;color:var(--text2)}
        .article code{background:var(--code-bg);border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-family:'JetBrains Mono',monospace;font-size:12.5px;color:var(--accent)}
        .article blockquote{border-left:3px solid var(--accent);background:var(--math-bg);padding:10px 14px;border-radius:0 8px 8px 0;margin:16px 0;font-size:13.5px;color:var(--text2);font-style:italic}
        .article hr{border:none;border-top:1px solid var(--border);margin:20px 0}
        .article ul,.article ol{padding-left:22px;margin:10px 0}
        .article li{font-size:14.5px;color:var(--text2);margin-bottom:6px;line-height:1.7}
        .article a{color:var(--accent);text-decoration:underline}
        .article table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px;overflow:hidden;border-radius:8px;border:1px solid var(--border)}
        .article thead{background:var(--accent)}
        .article thead th{color:#fff;padding:8px 12px;text-align:left;font-weight:600}
        .article tbody tr:nth-child(even){background:var(--bg2)}
        .article tbody td{padding:7px 12px;border-bottom:1px solid var(--border);color:var(--text2)}
        .article .math-display{background:var(--math-bg);border-left:3px solid var(--accent);padding:12px 16px;border-radius:0 8px 8px 0;margin:14px 0;overflow-x:auto}
        .katex{font-size:1em!important}

        /* nav prev/next */
        .ch-nav{display:flex;gap:10px;padding:20px}
        .nav-btn{
          flex:1;background:var(--card);border:1px solid var(--border);border-radius:10px;
          padding:12px 14px;cursor:pointer;color:var(--text2);font-size:12px;display:flex;
          align-items:center;gap:8px;transition:all 0.15s;font-family:inherit;box-shadow:var(--shadow);
        }
        .nav-btn:hover:not(:disabled){border-color:var(--accent);color:var(--accent);transform:translateY(-1px);box-shadow:var(--shadow-lg)}
        .nav-btn:disabled{opacity:0.3;cursor:default}
        .nav-btn.next{justify-content:flex-end;text-align:right}
        .nav-icon{font-size:18px;opacity:0.7}
        .nav-info{display:flex;flex-direction:column}
        .nav-label{font-size:10px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:var(--text3)}
        .nav-name{font-size:13px;font-weight:500}

        /* ── QUIZ ── */
        .quiz-wrap{margin:20px;border:1px solid var(--border);border-radius:12px;overflow:hidden;box-shadow:var(--shadow)}
        .quiz-top{background:var(--accent);color:#fff;padding:12px 16px;font-weight:700;font-size:14px;display:flex;align-items:center;gap:8px;font-family:'Merriweather',serif}
        .quiz-count{margin-left:auto;background:rgba(255,255,255,0.2);border-radius:20px;padding:2px 10px;font-size:11px;font-family:'Inter',sans-serif;font-weight:600}
        .quiz-body{background:var(--bg)}
        .q-item{padding:16px;border-bottom:1px solid var(--border);transition:background 0.2s}
        .q-item:last-child{border:none}
        .q-correct{background:var(--correct-bg)}
        .q-wrong{background:var(--wrong-bg)}
        .q-text{font-size:14px;font-weight:600;color:var(--text);margin-bottom:10px;display:flex;gap:10px;line-height:1.5}
        .q-num{background:var(--accent);color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;margin-top:1px}
        .q-opts{display:flex;flex-direction:column;gap:6px}
        .q-opt{
          display:flex;align-items:center;gap:10px;padding:9px 12px;
          border:1.5px solid var(--border);border-radius:8px;cursor:pointer;font-size:13.5px;
          transition:all 0.15s;color:var(--text2);background:var(--surface);
        }
        .q-opt:hover{border-color:var(--border2);color:var(--text)}
        .q-opt.q-picked{border-color:var(--accent);color:var(--accent);background:rgba(181,98,30,0.06)}
        .q-opt.q-ans{border-color:var(--correct);color:var(--correct);background:var(--correct-bg)}
        .q-opt input{position:absolute;opacity:0;pointer-events:none}
        .q-opt-mark{width:22px;height:22px;border-radius:50%;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;color:var(--text2)}
        .q-opt.q-picked .q-opt-mark{background:var(--accent);color:#fff}
        .q-opt.q-ans .q-opt-mark{background:var(--correct);color:#fff}
        .q-explain{margin-top:10px;padding:10px 12px;border-radius:8px;font-size:12.5px;line-height:1.6;color:var(--text2)}
        .q-explain-ok{background:var(--correct-bg);border:1px solid rgba(22,101,52,0.2)}
        .q-explain-err{background:var(--wrong-bg);border:1px solid rgba(153,27,27,0.2)}
        .quiz-foot{padding:14px 16px;background:var(--surface);border-top:1px solid var(--border)}
        .btn-submit{width:100%;padding:11px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:background 0.15s}
        .btn-submit:hover:not(:disabled){background:var(--accent2)}
        .btn-submit:disabled{opacity:0.4;cursor:default}
        .quiz-result{display:flex;flex-direction:column;gap:10px}
        .result-bar-wrap{height:8px;background:var(--bg2);border-radius:4px;overflow:hidden}
        .result-bar{height:100%;border-radius:4px;transition:width 0.6s ease}
        .result-info{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
        .result-score{font-family:'Merriweather',serif;font-size:26px;font-weight:700;color:var(--accent)}
        .result-pct{flex:1;font-size:13px;color:var(--text2)}
        .btn-reset{padding:7px 16px;background:transparent;border:1.5px solid var(--border2);border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;color:var(--text2);font-family:inherit;transition:all 0.15s}
        .btn-reset:hover{border-color:var(--accent);color:var(--accent)}

        /* ── REFS ── */
        .refs-wrap{padding:20px}
        .refs-title{font-family:'Merriweather',serif;font-size:16px;font-weight:700;color:var(--text);margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid var(--border)}
        .ref-group{margin-bottom:20px}
        .ref-group-title{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text3);margin-bottom:10px}
        .ref-item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--card);border:1px solid var(--border);border-radius:8px;margin-bottom:8px}
        .ref-badge{font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;white-space:nowrap;flex-shrink:0}
        .ref-data{background:rgba(181,98,30,0.12);color:var(--accent)}
        .ref-std{background:rgba(59,130,246,0.12);color:#3b82f6}
        .ref-link{background:rgba(16,185,129,0.12);color:#10b981}
        .ref-content{flex:1;font-size:12.5px}
        .ref-content strong{color:var(--text);display:block;margin-bottom:2px}
        .ref-content p{color:var(--text2);margin:0;line-height:1.4}
        .ref-content a{color:var(--accent);text-decoration:underline}
        .ref-value{display:inline-block;background:var(--bg2);border-radius:4px;padding:1px 8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text2);margin:3px 0 4px}

        /* scrollbar thin */
        .content{scrollbar-width:thin;scrollbar-color:var(--border) transparent}
        .ch-list{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.08) transparent}
      `}</style>

      <div className={`app ${dark ? 'dark' : ''}`}>
        {/* TOPBAR */}
        <header className="topbar">
          <button className="tb-btn menu-btn" onClick={() => setSideOpen(o => !o)}>☰</button>
          <div className="tb-logo">⚗ Cơ Học Đất <span>| UTC</span></div>

          <div className="tb-search">
            <span className="search-ico">🔍</span>
            <input
              placeholder="Tìm kiếm bài học..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onBlur={() => setTimeout(() => setSearch(''), 200)}
            />
            {dSearch && (
              <div className="search-drop">
                {searchResults.length > 0 ? searchResults.slice(0, 6).map(c => (
                  <div key={c.id} className="search-item" onMouseDown={() => { go(c.id); setSearch('') }}>
                    <div className="si-num">Chương {c.id}</div>
                    <div className="si-title">{c.icon} {c.title}</div>
                    <div className="si-sub">{c.subtitle}</div>
                  </div>
                )) : <div className="search-item" style={{color:'var(--text2)',fontSize:13}}>Không tìm thấy kết quả</div>}
              </div>
            )}
          </div>

          <button className="tb-btn" onClick={() => setDark(d => !d)} title="Chế độ sáng/tối">
            {dark ? '☀️' : '🌙'}
          </button>
        </header>

        <div className="main">
          <div className={`overlay ${sideOpen ? 'on' : ''}`} onClick={() => setSideOpen(false)} />

          {/* SIDEBAR */}
          <nav className={`sidebar ${sideOpen ? 'open' : ''}`}>
            <div className="side-head">
              <div className="side-label">Mục lục</div>
              <div className="side-progress">
                <div className="side-bar" style={{ width: `${((activeId - 1) / (CHAPTERS.length - 1)) * 100}%` }} />
              </div>
              <div className="side-prog-txt">Chương {activeId} / {CHAPTERS.length}</div>
            </div>
            <div className="ch-list">
              {CHAPTERS.map(ch => (
                <div key={ch.id} className="ch-row" onClick={() => go(ch.id)}>
                  <div className={`ch-label ${activeId === ch.id ? 'active' : ''}`}>
                    <span className="ch-icon">{ch.icon}</span>
                    <span className="ch-num">{String(ch.id).padStart(2,'0')}</span>
                    <span className="ch-text">{ch.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </nav>

          {/* CONTENT */}
          <div className="content" ref={contentRef}>
            <div className="content-inner">
              {chapter && (
                <>
                  {/* hero */}
                  <div className="ch-hero">
                    <div className="hero-meta">{chapter.icon} &nbsp; Chương {chapter.id}</div>
                    <div className="hero-title">{chapter.title}</div>
                    <div className="hero-sub">{chapter.subtitle}</div>
                  </div>

                  {/* tabs */}
                  <div className="tabs">
                    {[['content','📖 Nội dung'],['quiz',`🎯 Quiz (${chapter.quiz.length} câu)`],['refs','📚 Tham khảo']].map(([k,l]) => (
                      <button key={k} className={`tab-btn ${tab===k?'on':''}`} onClick={() => setTab(k)}>{l}</button>
                    ))}
                  </div>

                  {/* tab content */}
                  {tab === 'content' && (
                    <>
                      <div className="article">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {chapter.content}
                        </ReactMarkdown>
                      </div>
                      <div className="ch-nav">
                        <button className="nav-btn prev" disabled={!prev} onClick={() => prev && go(prev.id)}>
                          <span className="nav-icon">←</span>
                          {prev && <span className="nav-info"><span className="nav-label">Trước</span><span className="nav-name">{prev.title}</span></span>}
                        </button>
                        <button className="nav-btn next" disabled={!next} onClick={() => next && go(next.id)}>
                          {next && <span className="nav-info"><span className="nav-label">Tiếp theo</span><span className="nav-name">{next.title}</span></span>}
                          <span className="nav-icon">→</span>
                        </button>
                      </div>
                    </>
                  )}

                  {tab === 'quiz' && <Quiz questions={chapter.quiz} key={activeId} />}
                  {tab === 'refs' && <References refs={chapter.references} />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
