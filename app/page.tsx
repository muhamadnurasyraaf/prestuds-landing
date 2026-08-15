import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BellRing, BookOpen, CalendarDays, Check, QrCode, Sparkles } from "lucide-react";

const APP_STORE = "https://apps.apple.com/my/app/prestuds-student-planner/id6752947237";
const ICON = "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e9/dc/45/e9dc45ac-cc5b-9a88-4127-16f4893ee626/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg";
const shots = [
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/79/13/6c/79136c70-299a-1eb9-5bd0-4601640e2c58/1.png/320x480bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c8/c8/9a/c8c89acd-c750-36d6-f4b5-ededd3cc2972/2.png/320x480bb.jpg",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f4/48/00/f44800bc-7e7d-f4bd-1679-2c0165c58bad/3.png/320x480bb.jpg",
];

function StoreButton({ light = false }: { light?: boolean }) {
  return <a className={`store-button ${light ? "light" : ""}`} href={APP_STORE} target="_blank" rel="noreferrer" aria-label="Download Prestuds on the App Store"><span className="apple">●</span><span><small>Download on the</small>App Store</span></a>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <Link href="/" className="brand"><Image src={ICON} alt="Prestuds" width={42} height={42} priority /><span>prestuds</span></Link>
        <div className="nav-links"><a href="#features">Features</a><a href="#how">How it works</a><Link href="/privacy">Privacy</Link></div>
        <a className="nav-cta" href={APP_STORE} target="_blank" rel="noreferrer">Get the app <ArrowUpRight size={16} /></a>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Built for busy student brains</div>
          <h1>Your semester,<br /><em>beautifully sorted.</em></h1>
          <p>Classes, deadlines, notes, and reminders—all in one calm place. Spend less time organizing and more time actually learning.</p>
          <div className="hero-actions"><StoreButton /><span className="rating"><b>5.0</b> ★★★★★<small>on the App Store</small></span></div>
          <div className="mini-proof"><span><Check size={15} /> Free to start</span><span><Check size={15} /> No ads</span><span><Check size={15} /> iPhone & iPad</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="phone main-phone"><Image src={shots[0]} alt="Prestuds weekly class schedule" fill sizes="320px" priority /></div>
          <div className="float-card reminder"><div className="icon purple"><BellRing size={20} /></div><div><small>Up next</small><b>Database Systems</b><span>10:00 AM · Lab 3</span></div></div>
          <div className="float-card done"><span className="done-mark"><Check size={17} /></span><div><b>Assignment submitted</b><span>Right on time ✨</span></div></div>
        </div>
      </section>

      <section className="ticker"><div>PLAN LESS <i>✦</i> STUDY BETTER <i>✦</i> NEVER MISS A CLASS <i>✦</i> STAY AHEAD <i>✦</i></div></section>

      <section id="features" className="features shell section">
        <div className="section-head"><div><span className="kicker">Everything in its place</span><h2>One app for your<br />whole academic life.</h2></div><p>Prestuds brings your timetable, work, and materials together—so nothing gets lost between apps, chats, and screenshots.</p></div>
        <div className="feature-grid">
          <article className="feature-card schedule"><div className="feature-icon"><CalendarDays /></div><h3>A schedule that thinks ahead</h3><p>Set recurring classes once, color-code your subjects, and see the whole semester at a glance.</p><div className="week-widget"><div className="week-days"><span>M</span><span>T</span><span className="active">W</span><span>T</span><span>F</span></div><div className="class-chip blue"><small>09:00</small><b>Network Security</b></div><div className="class-chip peach"><small>14:00</small><b>Data Analytics</b></div></div></article>
          <article className="feature-card materials"><div className="feature-icon"><BookOpen /></div><h3>Materials, right where you need them</h3><p>Attach notes, PDFs, and documents to each class. Open the right file straight from your reminder.</p><div className="file-stack"><span className="file file-a">PDF <b>Week 04 slides</b></span><span className="file file-b">DOC <b>Lecture notes</b></span><span className="file file-c">IMG <b>Whiteboard.jpg</b></span></div></article>
          <article className="feature-card share"><div className="feature-icon"><QrCode /></div><h3>Share a semester in seconds</h3><p>Generate a QR code for your schedule. Friends scan once and every class drops into place.</p><div className="qr-art"><div className="fake-qr">▦</div><span>Scan to import<br /><b>Semester 3</b></span></div></article>
          <article className="feature-card deadline"><div className="feature-icon"><BellRing /></div><h3>Deadlines that don’t sneak up</h3><p>Track assignments and exams by class, with timely reminders that keep this week manageable.</p><div className="task-list"><span><i className="check-dot"><Check size={13} /></i><s>Read chapter 6</s></span><span><i />Submit lab report <b>Today</b></span><span><i />Calculus quiz <b>Fri</b></span></div></article>
        </div>
      </section>

      <section id="how" className="showcase section">
        <div className="shell showcase-inner">
          <div className="showcase-copy"><span className="kicker">Made to feel effortless</span><h2>From “I’m overwhelmed”<br />to “I’ve got this.”</h2><p>A clear view of today. A plan for what’s next. All the context you need when it’s time to focus.</p><ol><li><b>01</b><span><strong>Add your semester</strong>Set up classes manually or describe them with AI.</span></li><li><b>02</b><span><strong>Make it yours</strong>Choose colors, reminders, and how subjects appear.</span></li><li><b>03</b><span><strong>Let Prestuds remember</strong>Get the right nudge, with the right material, on time.</span></li></ol></div>
          <div className="phone-fan"><div className="phone phone-left"><Image src={shots[1]} alt="Prestuds class view" fill sizes="260px" /></div><div className="phone phone-right"><Image src={shots[2]} alt="Prestuds planner view" fill sizes="260px" /></div></div>
        </div>
      </section>

      <section className="quote shell section"><p>“The best planner is the one that makes planning feel like less work.”</p><div className="quote-mark">P</div><span>Designed with students, for students.</span></section>

      <section className="cta shell"><div><span className="kicker">Ready when you are</span><h2>Make space for<br />what matters.</h2><p>Your calmer semester starts with one download.</p><StoreButton light /></div><div className="cta-icon"><Image src={ICON} alt="Prestuds app icon" width={180} height={180} /></div></section>

      <footer className="footer shell"><Link href="/" className="brand"><Image src={ICON} alt="" width={34} height={34} /><span>prestuds</span></Link><p>Plan less. Learn more.</p><div><Link href="/privacy">Privacy Policy</Link><a href={APP_STORE} target="_blank" rel="noreferrer">App Store</a></div><small>© 2026 Velton Tech Inc.</small></footer>
    </main>
  );
}
