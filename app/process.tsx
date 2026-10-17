// แอนิเมชันขั้นตอนทำชิโอะปัง: นวด → ปั้น → อบ → เสิร์ฟ (SVG + CSS ใน globals.css)

function Eyes({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx - 8} cy={cy} r={2.6} fill="var(--color-ink)" />
      <circle cx={cx + 8} cy={cy} r={2.6} fill="var(--color-ink)" />
      <ellipse cx={cx - 14} cy={cy + 5} rx={3.6} ry={2.2} fill="var(--color-blush)" opacity="0.8" />
      <ellipse cx={cx + 14} cy={cy + 5} rx={3.6} ry={2.2} fill="var(--color-blush)" opacity="0.8" />
      <path d={`M ${cx - 3} ${cy + 4} Q ${cx} ${cy + 7} ${cx + 3} ${cy + 4}`} stroke="var(--color-ink)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Knead() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="96" width="140" height="8" rx="4" fill="var(--color-brown-soft)" opacity="0.5" />
      <g className="anim-knead">
        <path d="M40 96 C 36 70, 56 58, 80 58 C 104 58, 124 70, 120 96 Z" fill="#f6e6c4" stroke="var(--color-brown)" strokeWidth="3" />
        <Eyes cx={80} cy={80} />
      </g>
      {/* มือชิบิ */}
      <g className="anim-press">
        <ellipse cx="64" cy="44" rx="13" ry="10" fill="#ffe2c4" stroke="var(--color-brown)" strokeWidth="3" />
        <ellipse cx="96" cy="44" rx="13" ry="10" fill="#ffe2c4" stroke="var(--color-brown)" strokeWidth="3" />
      </g>
      {/* ฝุ่นแป้ง */}
      <circle className="anim-puff" cx="30" cy="88" r="3" fill="var(--color-paper)" stroke="var(--color-brown-soft)" />
      <circle className="anim-puff [animation-delay:0.3s]" cx="132" cy="86" r="2.5" fill="var(--color-paper)" stroke="var(--color-brown-soft)" />
      <circle className="anim-puff [animation-delay:0.6s]" cx="124" cy="74" r="2" fill="var(--color-paper)" stroke="var(--color-brown-soft)" />
    </svg>
  );
}

function Shape() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      <rect x="10" y="96" width="140" height="8" rx="4" fill="var(--color-brown-soft)" opacity="0.5" />
      {/* แผ่นแป้งสามเหลี่ยม + เนยแท่ง */}
      <g className="anim-stretch">
        <path d="M28 94 L 80 64 L 132 94 Z" fill="#f6e6c4" stroke="var(--color-brown)" strokeWidth="3" strokeLinejoin="round" />
        <rect x="62" y="84" width="36" height="8" rx="2" fill="#ffe98a" stroke="var(--color-brown)" strokeWidth="2" />
      </g>
      {/* ไม้คลึงแป้ง */}
      <g className="anim-roll">
        <rect x="44" y="48" width="72" height="12" rx="6" fill="#e0b27a" stroke="var(--color-brown)" strokeWidth="3" />
        <rect x="32" y="51" width="14" height="6" rx="3" fill="var(--color-brown-soft)" stroke="var(--color-brown)" strokeWidth="2" />
        <rect x="114" y="51" width="14" height="6" rx="3" fill="var(--color-brown-soft)" stroke="var(--color-brown)" strokeWidth="2" />
      </g>
      {/* ไส้พิสตาชิโอ */}
      <g className="anim-drop">
        <ellipse cx="80" cy="30" rx="8" ry="6" fill="var(--color-matcha)" stroke="var(--color-matcha-deep)" strokeWidth="2" />
      </g>
    </svg>
  );
}

function Bake() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      {/* ไอร้อน */}
      <path className="anim-heat" d="M58 22 C 52 14, 64 10, 58 2" stroke="var(--color-crust)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path className="anim-heat [animation-delay:0.5s]" d="M80 22 C 74 14, 86 10, 80 2" stroke="var(--color-crust)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path className="anim-heat [animation-delay:1s]" d="M102 22 C 96 14, 108 10, 102 2" stroke="var(--color-crust)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* เตาอบ */}
      <rect x="26" y="26" width="108" height="84" rx="14" fill="var(--color-paper)" stroke="var(--color-brown)" strokeWidth="3" />
      <circle cx="44" cy="38" r="4" fill="var(--color-brown-soft)" />
      <g className="anim-dial" style={{ transformOrigin: "60px 38px" }}>
        <circle cx="60" cy="38" r="4" fill="var(--color-brown-soft)" />
        <rect x="59" y="33" width="2" height="5" fill="var(--color-paper)" />
      </g>
      <rect x="38" y="48" width="84" height="50" rx="8" fill="#3e2a1a" stroke="var(--color-brown)" strokeWidth="3" />
      <rect className="anim-glow" x="41" y="51" width="78" height="44" rx="6" fill="#ffb347" />
      {/* ขนมปังในเตา ค่อย ๆ ฟูและเป็นสีทอง */}
      <g className="anim-rise">
        <path className="anim-golden" fill="var(--color-crust)" d="M54 90 C 50 72, 64 64, 80 64 C 96 64, 110 72, 106 90 Z" stroke="var(--color-brown)" strokeWidth="2.5" />
        <Eyes cx={80} cy={78} />
      </g>
    </svg>
  );
}

function Serve() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      {/* จาน */}
      <ellipse cx="66" cy="100" rx="52" ry="10" fill="var(--color-paper)" stroke="var(--color-brown)" strokeWidth="3" />
      <g className="anim-serve">
        <path d="M24 90 C 20 66, 44 52, 66 52 C 88 52, 112 66, 108 90 C 104 98, 28 98, 24 90 Z" fill="var(--color-crust)" stroke="var(--color-brown)" strokeWidth="3" />
        <path d="M46 56 C 40 70, 42 84, 48 94" stroke="var(--color-brown)" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M86 56 C 92 70, 90 84, 84 94" stroke="var(--color-brown)" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
        <rect x="58" y="56" width="4" height="4" rx="1" fill="#fff" />
        <rect x="68" y="54" width="4" height="4" rx="1" fill="#fff" />
        <Eyes cx={66} cy={76} />
      </g>
      {/* ประกายวิ้ง ๆ */}
      <path className="anim-twinkle" d="M20 40 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill="#ffd36e" />
      <path className="anim-twinkle [animation-delay:0.6s]" d="M104 30 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#ffd36e" />
      {/* แก้วมัทฉะ */}
      <path d="M118 72 L 148 72 L 145 102 C 145 105, 142 106, 139 106 L 127 106 C 124 106, 121 105, 121 102 Z" fill="var(--color-paper)" stroke="var(--color-brown)" strokeWidth="2.5" />
      <ellipse cx="133" cy="72" rx="15" ry="4" fill="var(--color-matcha)" stroke="var(--color-brown)" strokeWidth="2.5" />
      <path className="anim-heat" d="M128 64 C 124 58, 132 54, 128 48" stroke="var(--color-brown-soft)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path className="anim-heat [animation-delay:0.7s]" d="M138 64 C 134 58, 142 54, 138 48" stroke="var(--color-brown-soft)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const steps = [
  { Art: Knead, jp: "捏ねる", title: "นวดแป้ง", text: "นวดแป้งกับยีสต์จากเกียวโตจนเนียนนุ่ม แล้วพักให้แป้งฟูขึ้น" },
  { Art: Shape, jp: "成形", title: "ปั้นแป้ง", text: "รีดเป็นแผ่น วางเนยแท่ง ใส่ไส้พิสตาชิโอ แล้วม้วนเป็นทรงชิโอะปัง" },
  { Art: Bake, jp: "焼く", title: "อบ", text: "อบในเตาร้อนจนเนยละลาย ก้นกรอบ ผิวเป็นสีทองหอมฟุ้ง" },
  { Art: Serve, jp: "召し上がれ", title: "เสิร์ฟ", text: "โรยเกล็ดเกลือ เสิร์ฟอุ่น ๆ คู่มัทฉะเกียวโต พร้อมฟิน!" },
];

export default function Process() {
  return (
    <ol className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
      {steps.map(({ Art, jp, title, text }, i) => (
        <li
          key={title}
          className="step-spot relative rounded-3xl border-2 border-cream-deep bg-paper p-4 text-center"
          style={{ animationDelay: `${i * 2}s` }}
        >
          <span className="absolute -top-3 left-1/2 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-brown font-display text-sm text-paper">
            {i + 1}
          </span>
          <div className="mx-auto mt-2 aspect-[4/3] w-full max-w-44">
            <Art />
          </div>
          <p className="mt-2 text-xs tracking-widest text-matcha-deep">{jp}</p>
          <h3 className="font-display text-lg font-medium text-brown">{title}</h3>
          <p className="mt-1 text-sm text-ink/80">{text}</p>
          {i < steps.length - 1 && (
            <span className="absolute top-1/3 -right-3.5 z-10 hidden font-display text-xl text-brown-soft md:block" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
