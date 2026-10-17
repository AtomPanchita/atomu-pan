import Image from "next/image";
import { ChibiChef, ChibiMatcha, ChibiPan, ChibiPistachio, ChibiYeast } from "./chibi";
import Process from "./process";

// ใส่ LINE Official ID จริงของร้านตรงนี้ (มี @ นำหน้า)
const LINE_ID = "@atomupan";
const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;

const highlights = [
  {
    Icon: ChibiYeast,
    jp: "京都の酵母",
    title: "ยีสต์จากเกียวโต",
    text: "หมักแป้งด้วยยีสต์จากเกียวโต เนื้อขนมปังจึงหอม นุ่มใน กรอบนอก แบบที่กินแล้วนึกถึงญี่ปุ่น",
  },
  {
    Icon: ChibiChef,
    jp: "日本人シェフ",
    title: "พ่อครัวคนญี่ปุ่นแท้ ๆ",
    text: "ปั้นและอบทุกชิ้นโดยเชฟชาวญี่ปุ่น ใช้สูตรและเทคนิคแบบร้านเบเกอรี่ในญี่ปุ่น",
  },
  {
    Icon: ChibiPistachio,
    jp: "本物のピスタチオ",
    title: "ถั่วพิสตาชิโอแท้ นัว ๆ",
    text: "ไส้พิสตาชิโอแท้เข้มข้น หอมมัน นัวเต็มคำ ตัดกับเนยเค็มของชิโอะปังได้แบบลงตัว",
  },
];

const faqs = [
  {
    q: "สั่งซื้อได้ยังไง?",
    a: "กดปุ่ม “อิชัชชัยมาเสะ” หรือปุ่ม LINE ในหน้านี้ แล้วทักแอดมินบอกจำนวนที่ต้องการได้เลย",
  },
  {
    q: "มีบริการจัดส่งไหม หรือต้องมารับที่ร้าน?",
    a: "สอบถามรอบจัดส่งและจุดรับสินค้าได้ทาง LINE Official แอดมินจะแจ้งรายละเอียดให้ค่ะ",
  },
  {
    q: "ชิโอะปังเก็บได้นานแค่ไหน?",
    a: "อร่อยที่สุดภายในวันที่ซื้อ ถ้าเก็บข้ามวัน แนะนำอุ่นในเตาอบประมาณ 2–3 นาที จะกลับมากรอบนอกนุ่มใน",
  },
  {
    q: "สั่งจำนวนเยอะสำหรับงานเลี้ยงหรือของฝากได้ไหม?",
    a: "ได้ค่ะ แนะนำให้แจ้งล่วงหน้าทาง LINE เพื่อให้เชฟเตรียมอบให้ทันเวลา",
  },
];

function SectionHeading({ en, jp, th }: { en: string; jp: string; th: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-display text-sm tracking-[0.3em] text-brown-soft uppercase">{en}</p>
      <p className="mt-1 text-sm text-matcha-deep">{jp}</p>
      <h2 className="mt-2 font-display text-title font-semibold text-brown">{th}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-0.5 w-8 rounded-full bg-brown-soft/40" />
        <span className="size-2 rounded-full bg-matcha" />
        <span className="h-0.5 w-8 rounded-full bg-brown-soft/40" />
      </div>
    </div>
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 3C6.48 3 2 6.6 2 11.05c0 3.98 3.55 7.32 8.35 7.95.33.07.77.22.88.5.1.25.07.65.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.73-3.37 7.82-5.78C21.23 14.42 22 12.82 22 11.05 22 6.6 17.52 3 12 3Zm-3.8 10.6H6.22a.53.53 0 0 1-.53-.53V9.12a.53.53 0 1 1 1.06 0v3.42H8.2a.53.53 0 1 1 0 1.06Zm2.05-.53a.53.53 0 1 1-1.06 0V9.12a.53.53 0 1 1 1.06 0v3.95Zm4.77 0a.53.53 0 0 1-.95.32l-2.03-2.76v2.44a.53.53 0 1 1-1.06 0V9.12a.53.53 0 0 1 .95-.32l2.03 2.76V9.12a.53.53 0 1 1 1.06 0v3.95Zm3.2-2.5a.53.53 0 1 1 0 1.06h-1.45v.92h1.45a.53.53 0 1 1 0 1.06h-1.98a.53.53 0 0 1-.53-.53V9.12c0-.29.24-.53.53-.53h1.98a.53.53 0 1 1 0 1.06h-1.45v.92h1.45Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== แถบบน ===== */}
      <header className="sticky top-0 z-20 border-b border-brown/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-brown">
            <ChibiPan className="h-7 w-10" />
            Atomu-pan!
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-matcha-deep px-4 py-2 text-sm font-medium text-paper transition hover:bg-brown"
          >
            สั่งทาง LINE
          </a>
        </div>
      </header>

      {/* ===== ส่วนหัว ===== */}
      <section id="top" className="dots relative">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 pt-12 pb-16 md:grid-cols-2 md:pt-20 md:pb-24">
          <div className="text-center md:text-left">
            <p className="inline-block rounded-full border-2 border-brown/20 bg-paper px-4 py-1 text-sm text-brown-soft">
              塩パン · Shio-pan × 京都抹茶
            </p>
            <h1 className="mt-5 font-display text-display font-semibold text-brown">
              Atomu-pan!
              <span className="mt-2 block text-[0.42em] font-normal text-matcha-deep">アトムぱん</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lead text-ink md:mx-0">
              ชิโอะปังเนยเค็มสูตรญี่ปุ่น <strong className="text-brown">ไส้พิสตาชิโอแท้ นัว ๆ</strong>{" "}
              อบสดโดยเชฟชาวญี่ปุ่น กินคู่<strong className="text-matcha-deep">มัทฉะจากเกียวโต</strong>{" "}
              ฟินเหมือนนั่งคาเฟ่ที่ญี่ปุ่น
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brown px-8 py-4 font-display text-lg text-paper shadow-[0_6px_0_var(--color-brown-soft)] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_var(--color-brown-soft)]"
              >
                อิชัชชัยมาเสะ
                <span aria-hidden="true">→</span>
              </a>
              <a href="#menu" className="px-4 py-2 text-brown-soft underline decoration-matcha decoration-2 underline-offset-4 hover:text-brown">
                ดูเมนูและราคา
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -top-4 -left-2 z-10 rotate-[-6deg] rounded-2xl border-2 border-brown bg-paper px-3 py-1 font-display text-sm text-brown shadow-sm">
              いらっしゃいませ〜!
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-paper bg-paper shadow-xl shadow-brown/15">
              <Image
                src="/shio-pan.jpg"
                alt="ชิโอะปังอบใหม่ โรยเกล็ดเกลือ"
                width={480}
                height={310}
                priority
                className="h-auto w-full"
              />
            </div>
            <ChibiPan className="bob absolute -right-3 -bottom-8 h-20 w-28 drop-shadow md:-right-8" />
            <ChibiMatcha className="bob absolute -bottom-10 -left-4 h-20 w-20 drop-shadow [animation-delay:0.8s]" />
          </div>
        </div>
      </section>

      {/* ===== จุดเด่น ===== */}
      <section className="bg-paper px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading en="Why Atomu" jp="こだわり" th="ทำไมต้อง Atomu-pan!" />
          <ul className="grid gap-6 sm:grid-cols-3">
            {highlights.map(({ Icon, jp, title, text }, i) => (
              <li key={title} className="relative rounded-3xl border-2 border-cream-deep bg-cream p-6 text-center">
                <span className="absolute top-4 left-4 font-display text-sm text-brown-soft">0{i + 1}</span>
                <Icon className="mx-auto h-24 w-24" />
                <p className="mt-3 text-xs tracking-widest text-matcha-deep">{jp}</p>
                <h3 className="mt-1 font-display text-xl font-medium text-brown">{title}</h3>
                <p className="mt-2 text-ink/80">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== ขั้นตอนทำขนมปัง ===== */}
      <section id="process" className="dots px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading en="How it's made" jp="塩パンができるまで" th="กว่าจะเป็นชิโอะปัง 1 ชิ้น" />
          <Process />
        </div>
      </section>

      {/* ===== เมนูและราคา ===== */}
      <section id="menu" className="bg-cream-deep/40 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading en="Menu" jp="メニュー" th="เมนูของเรา" />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-paper shadow-lg shadow-brown/10">
              <div className="bg-cream-deep/50 p-6">
                <Image src="/shio-pan.jpg" alt="ชิโอะปังไส้พิสตาชิโอ" width={480} height={310} className="mx-auto h-auto w-full max-w-xs" />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-widest text-matcha-deep">ピスタチオ塩パン</p>
                <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-medium text-brown">ชิโอะปังไส้พิสตาชิโอ</h3>
                  <p className="font-display text-2xl text-crust">
                    120 <span className="text-base text-brown-soft">บาท / ชิ้น</span>
                  </p>
                </div>
                <p className="mt-3 text-ink/80">
                  ขนมปังเกลือสูตรจากญี่ปุ่น ม้วนเนยไว้ด้านใน อบจนก้นกรอบ โรยเกล็ดเกลือ สอดไส้พิสตาชิโอแท้เข้มข้น
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-paper shadow-lg shadow-brown/10">
              <Image
                src="/matcha-kyoto.jpg"
                alt="โม่หินบดใบชามัทฉะจากเกียวโต"
                width={447}
                height={447}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs tracking-widest text-matcha-deep">京都抹茶</p>
                <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-medium text-brown">มัทฉะจากเกียวโต</h3>
                  <p className="font-display text-lg text-matcha-deep">สอบถามราคาทาง LINE</p>
                </div>
                <p className="mt-3 text-ink/80">
                  ผงมัทฉะบดด้วยโม่หินจากเกียวโต หอมเข้ม ขมนิด หวานปลาย เข้ากับชิโอะปังเนยเค็มที่สุด
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 rounded-3xl bg-matcha-soft px-6 py-5 text-center">
            <ChibiMatcha className="hidden h-14 w-14 shrink-0 sm:block" />
            <p className="font-display text-brown">
              เซ็ตแนะนำ: <span className="text-matcha-deep">ชิโอะปัง + มัทฉะ</span> คู่หูที่ Gen Z ต้องลอง!
            </p>
          </div>
        </div>
      </section>

      {/* ===== คำถามที่พบบ่อย ===== */}
      <section className="bg-paper px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <SectionHeading en="FAQ" jp="よくある質問" th="คำถามที่พบบ่อย" />
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border-2 border-cream-deep bg-cream px-5 py-4 open:bg-paper">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-brown">
                  {q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-matcha text-brown transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink/80">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ติดต่อเรา ===== */}
      <section id="contact" className="dots px-4 py-20">
        <div className="mx-auto max-w-xl rounded-[2.5rem] border-4 border-paper bg-brown px-6 py-12 text-center text-paper shadow-xl shadow-brown/20">
          <div className="flex justify-center gap-2">
            <ChibiChef className="h-20 w-20" />
            <ChibiPan className="h-20 w-28" />
          </div>
          <p className="mt-4 font-display text-sm tracking-[0.3em] text-matcha uppercase">Contact · お問い合わせ</p>
          <h2 className="mt-2 font-display text-title font-semibold">ติดต่อเรา</h2>
          <p className="mt-3 text-cream/90">สั่งชิโอะปัง สอบถามเมนู หรือคุยกับแอดมิน ทักมาทาง LINE Official ได้เลย</p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#06c755] px-8 py-4 font-display text-lg text-white shadow-[0_6px_0_#04913e] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#04913e]"
          >
            <LineIcon className="size-6" />
            แอดไลน์ {LINE_ID}
          </a>
        </div>
      </section>

      {/* ===== ส่วนท้าย ===== */}
      <footer className="bg-ink px-4 py-10 text-center text-cream/80">
        <p className="font-display text-2xl text-cream">Atomu-pan!</p>
        <p className="mt-1 text-sm">ชิโอะปังไส้พิสตาชิโอ & มัทฉะเกียวโต · 塩パンと京都抹茶</p>
        <p className="mt-4 text-xs text-cream/50">© 2026 Atomu-pan! สงวนลิขสิทธิ์</p>
      </footer>
    </main>
  );
}
