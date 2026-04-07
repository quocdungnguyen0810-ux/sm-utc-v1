import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { CHAPTERS } from "./data/chapters.js";

const ALL_SECTIONS = CHAPTERS.flatMap(ch =>
  ch.sections.map(s => ({ ...s, chapterId: ch.id, chapterTitle: ch.title, chapterIcon: ch.icon }))
);

const SvgIcon = ({ d, size = 16, viewBox = "0 0 24 24", fill = "none", stroke = "currentColor", sw = "2" }) => (
  <svg width={size} height={size} viewBox={viewBox} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((path, i) => <path key={i} d={path}/>) : <path d={d}/>}
  </svg>
);

const Icons = {
  menu: () => <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  close: () => <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  search: (s=14) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  sun: () => <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  moon: () => <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  chevronR: (s=13) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>,
  arrowL: () => <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  arrowR: () => <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  check: (s=12) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
  x: (s=12) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  book: () => <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  link: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  db: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  quiz: () => <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  refresh: () => <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
};

// ─── Quiz ────────────────────────────────────────────────────────────────────
function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [shown, setShown] = useState({});
  const score = useMemo(() => !submitted ? 0 :
    questions.reduce((a, q, i) => a + (answers[i] === q.ans ? 1 : 0), 0),
    [submitted, answers, questions]);
  const reset = () => { setAnswers({}); setSubmitted(false); setShown({}); };

  return (
    <div className="quiz-wrap">
      <div className="quiz-head">
        <Icons.quiz/><span>Kiểm tra kiến thức</span>
        <span className="quiz-count">{questions.length} câu</span>
      </div>
      <div className="quiz-body">
        {questions.map((q, i) => {
          const ok = submitted && answers[i] === q.ans;
          const fail = submitted && answers[i] !== undefined && answers[i] !== q.ans;
          return (
            <div key={i} className={`quiz-q${ok ? ' q-ok' : fail ? ' q-fail' : ''}`}>
              <div className="q-meta">
                <span className="q-num">Câu {i+1}</span>
                {submitted && <span className={`q-badge ${ok ? 'b-ok' : 'b-fail'}`}>
                  {ok ? <><Icons.check/> Đúng</> : <><Icons.x/> Sai</>}
                </span>}
              </div>
              <div className="q-text">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.q}</ReactMarkdown>
              </div>
              <div className="q-opts">
                {q.options.map((opt, j) => (
                  <label key={j} className={`q-opt${answers[i]===j?' sel':''}${submitted&&j===q.ans?' ok':''}${submitted&&answers[i]===j&&j!==q.ans?' fail':''}`}>
                    <input type="radio" name={`q${i}-${q.q.slice(0,8)}`} disabled={submitted}
                      checked={answers[i]===j} onChange={() => !submitted && setAnswers(p=>({...p,[i]:j}))}/>
                    <span className="opt-dot">
                      {submitted&&j===q.ans ? <Icons.check s={12}/> : submitted&&answers[i]===j&&j!==q.ans ? <Icons.x s={12}/> : String.fromCharCode(65+j)}
                    </span>
                    <span className="opt-label"><ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown></span>
                  </label>
                ))}
              </div>
              {submitted && <button className="explain-toggle" onClick={()=>setShown(p=>({...p,[i]:!p[i]}))}>
                {shown[i]?'▲ Ẩn':'▼ Xem giải thích'}
              </button>}
              {submitted && shown[i] && <div className="q-explain">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.explain}</ReactMarkdown>
              </div>}
            </div>
          );
        })}
      </div>
      <div className="quiz-foot">
        {!submitted ? (
          <button className="btn-nop" disabled={Object.keys(answers).length<questions.length}
            onClick={()=>setSubmitted(true)}>
            Nộp bài {Object.keys(answers).length<questions.length&&`(còn ${questions.length-Object.keys(answers).length} câu)`}
          </button>
        ) : (
          <div className="quiz-result">
            <div className="res-score"><span className="rs-n">{score}</span><span className="rs-s">/</span><span className="rs-t">{questions.length}</span></div>
            <div className="res-msg">{score===questions.length?'🎉 Xuất sắc!':score>=Math.ceil(questions.length*0.7)?'👍 Khá tốt!':score>=Math.ceil(questions.length*0.5)?'📖 Ôn lại nhé!':'📚 Đọc lại bài!'}</div>
            <button className="btn-reset" onClick={reset}><Icons.refresh/> Làm lại</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── References ──────────────────────────────────────────────────────────────
const RICONS = { standard:'📋', book:'📚', guide:'📖', tool:'🔧', map:'🗺️', data:'📊' };
function References({ refs }) {
  return (
    <div className="refs-body">
      <section className="ref-section">
        <h3 className="ref-h"><Icons.link/> Tài liệu tham khảo</h3>
        {refs.map((r,i)=>(
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="ref-row">
            <span className="ref-ic">{RICONS[r.type]||'🔗'}</span>
            <span className="ref-info"><span className="ref-name">{r.title}</span><span className="ref-cat">{r.type}</span></span>
            <span className="ref-ext">↗</span>
          </a>
        ))}
      </section>
      <section className="ref-section">
        <h3 className="ref-h"><Icons.db/> Số liệu dự án Pimpama</h3>
        <div className="data-grid">
          {[
            ["Vị trí","Pimpama Riverside, Gold Coast, QLD, Australia"],
            ["Năm khảo sát","2009"],
            ["Số hố khoan","10 hố (BH1 – BH10)"],
            ["Chiều sâu khoan","≤ 12 m"],
            ["Loại đất chính","Sét pha bùn phù sa (CH – USCS)"],
            ["LL (sét mềm)","62 – 74 %"],
            ["PI","30 – 42 %"],
            ["Độ ẩm tự nhiên w","55 – 80 %"],
            ["γ_sat (sét mềm)","15.0 – 16.0 kN/m³"],
            ["c_u (sét mềm)","5 – 15 kPa"],
            ["C_c (oedometer)","0.55 – 0.75"],
            ["c_v","1.0 – 2.5 m²/yr"],
          ].map(([l,v],i)=>(
            <div key={i} className="data-card">
              <span className="data-lbl">{l}</span>
              <span className="data-val">{v}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="ref-section">
        <h3 className="ref-h">🌐 Link hữu ích</h3>
        <div className="link-grid">
          {[
            ["GeoTechData.info","Cơ sở dữ liệu địa kỹ thuật","https://www.geotechdata.info"],
            ["ASTM International","Tiêu chuẩn thí nghiệm","https://www.astm.org"],
            ["GeoSlope","Phần mềm phân tích ổn định","https://www.geoslope.com"],
            ["GeoTechTools","Công cụ thiết kế địa kỹ thuật","https://www.geotechtools.org"],
            ["Standards Australia","Tiêu chuẩn AS 1726","https://www.standards.org.au"],
            ["Routledge Textbooks","Sách giáo trình gốc","https://routledgetextbooks.com"],
          ].map(([n,d,u],i)=>(
            <a key={i} href={u} target="_blank" rel="noopener noreferrer" className="link-card">
              <span className="lc-name">{n}</span>
              <span className="lc-desc">{d}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({ 1: true });
  const [secId, setSecId] = useState("1-1");
  const [tab, setTab] = useState("content");
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const section = useMemo(() => ALL_SECTIONS.find(s=>s.id===secId), [secId]);
  const chapter = useMemo(() => CHAPTERS.find(c=>c.id===section?.chapterId), [section]);
  const idx = useMemo(() => ALL_SECTIONS.findIndex(s=>s.id===secId), [secId]);

  const go = useCallback((id) => {
    setSecId(id); setTab("content"); setOpen(false); setSearch("");
    const chId = ALL_SECTIONS.find(s=>s.id===id)?.chapterId;
    if (chId) setExpanded(p=>({...p,[chId]:true}));
    ref.current?.scrollTo({top:0,behavior:"smooth"});
  }, []);

  const results = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ALL_SECTIONS.filter(s =>
      s.title.toLowerCase().includes(q) || s.chapterTitle.toLowerCase().includes(q)
    ).slice(0,8);
  }, [search]);

  return (
    <div className={`app ${dark?'dark':'light'}`}>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body,#root{height:100%}
.light{
  --bg:#f5f1eb;--bg2:#ece6db;--surf:#fff;--surf2:#f9f5ef;
  --sb:#1b1916;--sb2:#232018;--sbh:rgba(255,255,255,0.05);
  --sbt:#e4ddd2;--sbm:#706a62;--sba:rgba(196,138,56,0.14);--sbac:#c48a38;
  --acc:#8b5015;--acc2:#c48a38;--accl:rgba(139,80,21,0.07);
  --tx:#18140e;--tx2:#46392c;--tx3:#7a6d5e;
  --bd:#d9d0c2;--bd2:#ece6db;
  --ok:#1a6b3a;--okb:rgba(26,107,58,0.09);
  --err:#991515;--errb:rgba(153,21,21,0.09);
  --sh:0 2px 16px rgba(60,40,10,.1);--shl:0 8px 40px rgba(60,40,10,.15);
}
.dark{
  --bg:#0c0b09;--bg2:#131109;--surf:#181510;--surf2:#1d1a14;
  --sb:#090807;--sb2:#111009;--sbh:rgba(255,255,255,0.04);
  --sbt:#d0c9be;--sbm:#565048;--sba:rgba(196,138,56,0.11);--sbac:#d4a050;
  --acc:#d4a050;--acc2:#b8813a;--accl:rgba(212,160,80,0.07);
  --tx:#e4ddd2;--tx2:#aa9f90;--tx3:#655d52;
  --bd:#28241c;--bd2:#201d15;
  --ok:#38a860;--okb:rgba(56,168,96,0.1);
  --err:#df5050;--errb:rgba(223,80,80,0.1);
  --sh:0 2px 16px rgba(0,0,0,.4);--shl:0 8px 40px rgba(0,0,0,.55);
}
.app{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--tx);height:100dvh;display:flex;flex-direction:column;overflow:hidden}

/* TOP */
.top{height:52px;background:var(--sb);border-bottom:1px solid rgba(255,255,255,0.04);display:flex;align-items:center;padding:0 12px;gap:8px;flex-shrink:0;z-index:200;position:relative}
.t-logo{font-family:'Crimson Pro',serif;font-size:17px;font-weight:700;color:var(--sbac);letter-spacing:.02em;white-space:nowrap;flex-shrink:0}
.t-logo em{color:var(--sbm);font-style:normal;font-weight:400;font-size:13px;margin-left:5px}
.t-sp{flex:1}
.t-sw{flex:1;max-width:300px;position:relative}
.t-si{width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:7px 12px 7px 34px;color:var(--sbt);font-size:13px;outline:none;font-family:inherit;transition:border .15s}
.t-si:focus{border-color:var(--sbac);background:rgba(255,255,255,0.1)}
.t-si::placeholder{color:var(--sbm)}
.t-sic{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--sbm);pointer-events:none}
.sd{position:absolute;top:calc(100% + 6px);left:0;right:0;background:var(--surf);border:1px solid var(--bd);border-radius:10px;box-shadow:var(--shl);z-index:500;overflow:hidden}
.sdi{padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--bd2);transition:background .12s}
.sdi:hover{background:var(--bg2)}.sdi:last-child{border-bottom:none}
.sdi-ch{font-size:10px;font-weight:700;color:var(--acc2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px}
.sdi-s{font-size:13px;color:var(--tx)}
.sd-empty{padding:12px 14px;font-size:13px;color:var(--tx3)}
.t-btn{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,0.07);border:none;cursor:pointer;color:var(--sbt);display:flex;align-items:center;justify-content:center;transition:background .15s;flex-shrink:0}
.t-btn:hover{background:rgba(255,255,255,0.13)}
.mb{display:none}
@media(max-width:900px){.mb{display:flex}}

/* LAYOUT */
.lay{flex:1;display:flex;overflow:hidden;position:relative}
.ov{display:none;position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:90;backdrop-filter:blur(2px)}
.ov.show{display:block}

/* SIDEBAR */
.sb{width:268px;flex-shrink:0;background:var(--sb);border-right:1px solid rgba(255,255,255,0.04);display:flex;flex-direction:column;overflow:hidden;z-index:100;transition:transform .28s cubic-bezier(.4,0,.2,1)}
@media(max-width:900px){.sb{position:absolute;top:0;left:0;bottom:0;transform:translateX(-100%);box-shadow:var(--shl)}.sb.open{transform:translateX(0)}}
.sbh{padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.05);flex-shrink:0}
.sbh-title{font-size:10px;font-weight:700;color:var(--sbac);text-transform:uppercase;letter-spacing:.12em;margin-bottom:10px}
.sbh-bar{height:2px;background:rgba(255,255,255,0.07);border-radius:2px;overflow:hidden}
.sbh-fill{height:100%;background:var(--sbac);border-radius:2px;transition:width .5s ease}
.sbh-lbl{font-size:10px;color:var(--sbm);margin-top:5px}
.sb-list{flex:1;overflow-y:auto;padding:5px 0 20px}
.sb-list::-webkit-scrollbar{width:3px}.sb-list::-webkit-scrollbar-track{background:transparent}.sb-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:2px}
.sb-ch{}
.sb-ch-btn{width:100%;background:none;border:none;cursor:pointer;text-align:left;display:flex;align-items:center;gap:8px;padding:9px 14px;color:var(--sbt);font-family:inherit;font-size:13px;font-weight:500;transition:background .12s;border-left:3px solid transparent}
.sb-ch-btn:hover{background:var(--sbh)}
.sb-ch-btn.ach{background:var(--sba);border-left-color:var(--sbac);color:var(--sbac)}
.sb-chin{font-size:15px;flex-shrink:0}.sb-cnum{font-size:10px;color:var(--sbm);font-weight:700;min-width:20px}
.sb-ctit{flex:1;line-height:1.3}
.sb-carr{color:var(--sbm);transition:transform .2s;flex-shrink:0}
.sb-carr.exp{transform:rotate(90deg)}
.sb-secs{}
.sb-sbtn{width:100%;background:none;border:none;cursor:pointer;text-align:left;padding:6px 14px 6px 44px;color:var(--sbm);font-family:inherit;font-size:12px;line-height:1.4;transition:color .12s}
.sb-sbtn:hover{color:var(--sbt)}.sb-sbtn.ased{color:var(--sbac);font-weight:500}

/* CONTENT */
.con{flex:1;overflow-y:auto;background:var(--bg);scroll-behavior:smooth}
.con::-webkit-scrollbar{width:4px}.con::-webkit-scrollbar-track{background:transparent}.con::-webkit-scrollbar-thumb{background:var(--bd);border-radius:4px}
.cin{max-width:740px;margin:0 auto;padding:0 0 80px}

/* HERO */
.hero{background:linear-gradient(135deg,var(--sb) 0%,#2a2318 100%);padding:24px 22px 20px;position:relative;overflow:hidden}
.hero::after{content:attr(data-icon);position:absolute;right:14px;bottom:-12px;font-size:84px;opacity:.05;line-height:1;pointer-events:none}
.hero-eye{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--sbac);margin-bottom:5px}
.hero-h{font-family:'Crimson Pro',serif;font-size:25px;font-weight:700;color:#fff;line-height:1.25;margin-bottom:12px}
.hero-pills{display:flex;flex-wrap:wrap;gap:6px}
.hero-p{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:3px 11px;font-size:11px;color:rgba(255,255,255,.6);cursor:pointer;transition:all .15s;white-space:nowrap;border:none;font-family:inherit}
.hero-p:hover,.hero-p.ap{background:rgba(196,138,56,0.2);color:var(--sbac)}

/* TABS */
.tabs{display:flex;border-bottom:1px solid var(--bd);background:var(--surf);padding:0 22px;position:sticky;top:0;z-index:10}
.tab{padding:12px 16px;background:none;border:none;cursor:pointer;font-family:inherit;font-size:13px;font-weight:500;color:var(--tx3);border-bottom:2px solid transparent;transition:all .15s;white-space:nowrap;display:flex;align-items:center;gap:6px}
.tab:hover{color:var(--tx)}.tab.at{color:var(--acc);border-bottom-color:var(--acc)}

/* MD CONTENT */
.md{padding:22px 22px 0;font-family:'DM Sans',sans-serif;font-size:15px;line-height:1.85;color:var(--tx2)}
.md h2{font-family:'Crimson Pro',serif;font-size:22px;font-weight:700;color:var(--tx);margin:28px 0 13px;padding-bottom:8px;border-bottom:2px solid var(--bd);line-height:1.3}
.md h3{font-family:'Crimson Pro',serif;font-size:17px;font-weight:600;color:var(--acc);margin:20px 0 9px}
.md p{margin-bottom:12px}.md ul,.md ol{padding-left:22px;margin-bottom:12px}.md li{margin-bottom:5px}
.md strong{color:var(--tx);font-weight:600}
.md code{background:var(--bg2);border:1px solid var(--bd);border-radius:4px;padding:1px 6px;font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--acc)}
.md blockquote{border-left:3px solid var(--acc2);padding:10px 16px;background:var(--accl);border-radius:0 8px 8px 0;margin:14px 0;color:var(--tx2);font-style:italic}
.md table{width:100%;border-collapse:collapse;font-size:13.5px;margin:14px 0}
.md th{background:var(--sb);color:#fff;padding:9px 12px;text-align:left;font-weight:600;font-size:12px}
.dark .md th{background:rgba(255,255,255,0.07);color:var(--tx)}
.md td{padding:7px 12px;border-bottom:1px solid var(--bd2);color:var(--tx2)}
.md tr:nth-child(even) td{background:var(--surf2)}
.md .math-display{overflow-x:auto;padding:4px 0}
.katex{color:inherit!important}.katex-display{margin:14px 0!important}

/* NAV */
.secnav{display:flex;justify-content:space-between;padding:16px 22px;gap:10px}
.nbtn{display:flex;align-items:center;gap:8px;background:var(--surf);border:1px solid var(--bd);border-radius:10px;padding:10px 14px;cursor:pointer;color:var(--tx2);font-family:inherit;font-size:13px;transition:all .15s;flex:1;max-width:48%}
.nbtn:disabled{opacity:.3;cursor:default}.nbtn:not(:disabled):hover{border-color:var(--acc);color:var(--acc);background:var(--accl)}
.nbtn.nr{justify-content:flex-end;text-align:right}
.nl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--acc2);display:block;margin-bottom:2px}
.nt{font-size:12px;display:block;max-width:190px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* QUIZ */
.quiz-wrap{background:var(--surf);border:1px solid var(--bd);border-radius:12px;overflow:hidden;margin:4px 22px 22px}
.quiz-head{background:var(--sb);color:#fff;padding:13px 18px;display:flex;align-items:center;gap:9px;font-family:'Crimson Pro',serif;font-size:16px;font-weight:700}
.quiz-count{margin-left:auto;background:rgba(255,255,255,0.12);border-radius:12px;padding:2px 10px;font-size:12px;font-family:'DM Sans',sans-serif}
.quiz-body{padding:2px 0}
.quiz-q{padding:15px 18px;border-bottom:1px solid var(--bd2);transition:background .2s}
.quiz-q:last-child{border-bottom:none}
.q-ok{background:var(--okb)}.q-fail{background:var(--errb)}
.q-meta{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.q-num{font-size:11px;font-weight:700;color:var(--acc2);text-transform:uppercase;letter-spacing:.06em}
.q-badge{display:flex;align-items:center;gap:4px;border-radius:12px;padding:2px 9px;font-size:11px;font-weight:600}
.b-ok{background:var(--okb);color:var(--ok)}.b-fail{background:var(--errb);color:var(--err)}
.q-text{font-size:14px;font-weight:500;color:var(--tx);margin-bottom:11px;line-height:1.6}
.q-text p{margin:0}
.q-opts{display:flex;flex-direction:column;gap:7px}
.q-opt{display:flex;align-items:flex-start;gap:10px;padding:9px 12px;border:1.5px solid var(--bd);border-radius:8px;cursor:pointer;transition:all .15s;background:var(--surf2)}
.q-opt input{display:none}
.q-opt:has(input:not([disabled])):hover{border-color:var(--acc2);background:var(--accl)}
.q-opt.sel{border-color:var(--acc);background:var(--accl)}
.q-opt.ok{border-color:var(--ok)!important;background:var(--okb)!important}
.q-opt.fail{border-color:var(--err)!important;background:var(--errb)!important}
.opt-dot{width:22px;height:22px;border-radius:50%;background:var(--bg2);border:1.5px solid var(--bd);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--tx3);flex-shrink:0;margin-top:1px}
.q-opt.ok .opt-dot{background:var(--ok);border-color:var(--ok);color:#fff}
.q-opt.fail .opt-dot{background:var(--err);border-color:var(--err);color:#fff}
.q-opt.sel:not(.ok):not(.fail) .opt-dot{background:var(--acc);border-color:var(--acc);color:#fff}
.opt-label{font-size:13.5px;color:var(--tx2);line-height:1.5;flex:1}
.opt-label p{margin:0}
.explain-toggle{margin-top:9px;background:none;border:none;cursor:pointer;font-size:12px;color:var(--acc2);font-family:inherit;font-weight:500}
.explain-toggle:hover{color:var(--acc)}
.q-explain{margin-top:8px;padding:10px 14px;background:var(--bg2);border-radius:8px;font-size:13px;color:var(--tx2);line-height:1.6;border-left:3px solid var(--acc2)}
.q-explain p{margin:0}
.quiz-foot{padding:15px 18px;border-top:1px solid var(--bd)}
.btn-nop{width:100%;padding:12px;background:var(--sb);border:none;border-radius:8px;color:#fff;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:opacity .15s}
.light .btn-nop{background:var(--acc)}
.btn-nop:disabled{opacity:.4;cursor:not-allowed}.btn-nop:not(:disabled):hover{opacity:.85}
.quiz-result{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.res-score{display:flex;align-items:baseline;gap:3px}
.rs-n{font-family:'Crimson Pro',serif;font-size:40px;font-weight:700;color:var(--acc);line-height:1}
.rs-s{font-size:22px;color:var(--tx3)}.rs-t{font-family:'Crimson Pro',serif;font-size:28px;color:var(--tx3)}
.res-msg{flex:1;font-size:13.5px;color:var(--tx2);min-width:140px}
.btn-reset{display:flex;align-items:center;gap:6px;background:none;border:1.5px solid var(--bd);border-radius:8px;padding:8px 14px;cursor:pointer;color:var(--tx2);font-family:inherit;font-size:13px;font-weight:500;transition:all .15s}
.btn-reset:hover{border-color:var(--acc);color:var(--acc)}

/* REFS */
.refs-body{padding:18px 22px 32px}
.ref-section{margin-bottom:26px}
.ref-h{display:flex;align-items:center;gap:8px;font-family:'Crimson Pro',serif;font-size:17px;font-weight:700;color:var(--tx);margin-bottom:13px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.ref-row{display:flex;align-items:center;gap:12px;padding:11px 14px;background:var(--surf);border:1px solid var(--bd);border-radius:10px;text-decoration:none;transition:all .15s;margin-bottom:7px}
.ref-row:hover{border-color:var(--acc2);background:var(--accl)}
.ref-ic{font-size:20px;flex-shrink:0}.ref-info{flex:1}.ref-name{display:block;font-size:14px;font-weight:500;color:var(--tx);margin-bottom:2px}.ref-cat{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--tx3);font-weight:600}.ref-ext{color:var(--acc2);font-size:14px}
.data-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.data-card{background:var(--surf);border:1px solid var(--bd);border-radius:8px;padding:9px 12px;display:flex;flex-direction:column;gap:3px}
.data-lbl{font-size:11px;color:var(--tx3);font-weight:500;text-transform:uppercase;letter-spacing:.04em}
.data-val{font-size:13px;font-weight:600;color:var(--tx)}
.link-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.link-card{display:flex;flex-direction:column;gap:3px;padding:11px 14px;background:var(--surf);border:1px solid var(--bd);border-radius:10px;text-decoration:none;transition:all .15s}
.link-card:hover{border-color:var(--acc2);background:var(--accl)}
.lc-name{font-size:13px;font-weight:600;color:var(--acc)}
.lc-desc{font-size:12px;color:var(--tx3)}

@media(max-width:600px){
  .md{padding:16px 16px 0}.secnav{padding:12px 16px}.quiz-wrap{margin:4px 16px 20px}.refs-body{padding:14px 16px 28px}
  .hero{padding:18px 16px 16px}.tabs{padding:0 16px}.hero-h{font-size:21px}.tab{font-size:12px;padding:11px 11px}
  .data-grid,.link-grid{grid-template-columns:1fr}
  .t-sw{display:none}
}
      `}</style>

      {/* TOPBAR */}
      <header className="top">
        <button className="t-btn mb" onClick={() => setOpen(o=>!o)}>
          {open ? <Icons.close/> : <Icons.menu/>}
        </button>
        <div className="t-logo">Cơ Học Đất <em>UTC</em></div>
        <div className="t-sp"/>
        <div className="t-sw">
          <span className="t-sic"><Icons.search/></span>
          <input className="t-si" placeholder="Tìm kiếm bài học..."
            value={search} onChange={e => setSearch(e.target.value)}
            onBlur={() => setTimeout(() => setSearch(""), 180)}/>
          {search && (
            <div className="sd">
              {results.length > 0 ? results.map((r,i) => (
                <div key={i} className="sdi" onMouseDown={() => go(r.id)}>
                  <div className="sdi-ch">{r.chapterIcon} Ch.{r.chapterId} — {r.chapterTitle}</div>
                  <div className="sdi-s">{r.title}</div>
                </div>
              )) : <div className="sd-empty">Không tìm thấy kết quả</div>}
            </div>
          )}
        </div>
        <button className="t-btn" onClick={() => setDark(d=>!d)}>
          {dark ? <Icons.sun/> : <Icons.moon/>}
        </button>
      </header>

      {/* LAYOUT */}
      <div className="lay">
        <div className={`ov ${open?'show':''}`} onClick={() => setOpen(false)}/>

        {/* SIDEBAR */}
        <nav className={`sb ${open?'open':''}`}>
          <div className="sbh">
            <div className="sbh-title">Mục lục</div>
            <div className="sbh-bar"><div className="sbh-fill" style={{width:`${Math.round((idx+1)/ALL_SECTIONS.length*100)}%`}}/></div>
            <div className="sbh-lbl">Bài {idx+1} / {ALL_SECTIONS.length}</div>
          </div>
          <div className="sb-list">
            {CHAPTERS.map(ch => {
              const hasAct = ch.sections.some(s => s.id === secId);
              const isExp = expanded[ch.id];
              return (
                <div key={ch.id} className="sb-ch">
                  <button className={`sb-ch-btn ${hasAct?'ach':''}`} onClick={() => setExpanded(p=>({...p,[ch.id]:!p[ch.id]}))}>
                    <span className="sb-chin">{ch.icon}</span>
                    <span className="sb-cnum">{String(ch.id).padStart(2,'0')}</span>
                    <span className="sb-ctit">{ch.title}</span>
                    <span className={`sb-carr ${isExp?'exp':''}`}><Icons.chevronR/></span>
                  </button>
                  {isExp && (
                    <div className="sb-secs">
                      {ch.sections.map(s => (
                        <button key={s.id} className={`sb-sbtn ${s.id===secId?'ased':''}`} onClick={() => go(s.id)}>
                          {s.id.replace('-','.')} · {s.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* MAIN */}
        <main className="con" ref={ref}>
          <div className="cin">
            {chapter && section && (<>
              <div className="hero" data-icon={chapter.icon}>
                <div className="hero-eye">Chương {chapter.id}</div>
                <div className="hero-h">{chapter.title}</div>
                <div className="hero-pills">
                  {chapter.sections.map(s => (
                    <button key={s.id} className={`hero-p ${s.id===secId?'ap':''}`} onClick={() => go(s.id)}>
                      {s.id.replace('-','.')} {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="tabs">
                <button className={`tab ${tab==='content'?'at':''}`} onClick={()=>setTab('content')}>
                  <Icons.book/> Bài học
                </button>
                <button className={`tab ${tab==='quiz'?'at':''}`} onClick={()=>setTab('quiz')}>
                  <Icons.quiz/> Kiểm tra ({chapter.quiz.length} câu)
                </button>
                <button className={`tab ${tab==='refs'?'at':''}`} onClick={()=>setTab('refs')}>
                  <Icons.link/> Tham khảo
                </button>
              </div>

              {tab === 'content' && (
                <ReactMarkdown className="md" remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {section.content}
                </ReactMarkdown>
              )}
              {tab === 'quiz' && (
                <div style={{paddingTop:'14px'}}>
                  <Quiz key={`${chapter.id}-quiz`} questions={chapter.quiz}/>
                </div>
              )}
              {tab === 'refs' && <References refs={chapter.references}/>}

              <div className="secnav">
                <button className="nbtn" disabled={idx<=0} onClick={()=>go(ALL_SECTIONS[idx-1].id)}>
                  <Icons.arrowL/>
                  <div><span className="nl">Trước</span>{idx>0&&<span className="nt">{ALL_SECTIONS[idx-1].title}</span>}</div>
                </button>
                <button className="nbtn nr" disabled={idx>=ALL_SECTIONS.length-1} onClick={()=>go(ALL_SECTIONS[idx+1].id)}>
                  <div><span className="nl">Tiếp theo</span>{idx<ALL_SECTIONS.length-1&&<span className="nt">{ALL_SECTIONS[idx+1].title}</span>}</div>
                  <Icons.arrowR/>
                </button>
              </div>
            </>)}
          </div>
        </main>
      </div>
    </div>
  );
}
