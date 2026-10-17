// ตัวการ์ตูนชิบิวาดด้วยมือ (SVG) ใช้แทนรูปประกอบ

type Props = { className?: string };

function Face({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  const s = scale;
  return (
    <g>
      <ellipse cx={cx - 11 * s} cy={cy} rx={3.4 * s} ry={4.2 * s} fill="var(--color-ink)" />
      <ellipse cx={cx + 11 * s} cy={cy} rx={3.4 * s} ry={4.2 * s} fill="var(--color-ink)" />
      <circle cx={cx - 10 * s} cy={cy - 1.6 * s} r={1.2 * s} fill="#fff" />
      <circle cx={cx + 12 * s} cy={cy - 1.6 * s} r={1.2 * s} fill="#fff" />
      <ellipse cx={cx - 19 * s} cy={cy + 7 * s} rx={5 * s} ry={3 * s} fill="var(--color-blush)" opacity="0.8" />
      <ellipse cx={cx + 19 * s} cy={cy + 7 * s} rx={5 * s} ry={3 * s} fill="var(--color-blush)" opacity="0.8" />
      <path
        d={`M ${cx - 4 * s} ${cy + 6 * s} Q ${cx} ${cy + 10 * s} ${cx + 4 * s} ${cy + 6 * s}`}
        stroke="var(--color-ink)"
        strokeWidth={2 * s}
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

/** น้องชิโอะปัง */
export function ChibiPan({ className }: Props) {
  return (
    <svg viewBox="0 0 160 110" className={className} aria-hidden="true">
      <ellipse cx="80" cy="102" rx="56" ry="6" fill="var(--color-brown)" opacity="0.12" />
      <path
        d="M14 70 C 8 40, 40 18, 80 18 C 120 18, 152 40, 146 70 C 142 92, 118 98, 80 98 C 42 98, 18 92, 14 70 Z"
        fill="var(--color-crust)"
        stroke="var(--color-brown)"
        strokeWidth="3"
      />
      <path d="M48 24 C 40 50, 42 80, 50 96" stroke="var(--color-brown)" strokeWidth="2.5" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M112 24 C 120 50, 118 80, 110 96" stroke="var(--color-brown)" strokeWidth="2.5" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M30 40 C 28 60, 30 78, 36 90" stroke="var(--color-brown)" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M130 40 C 132 60, 130 78, 124 90" stroke="var(--color-brown)" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round" />
      <ellipse cx="66" cy="34" rx="16" ry="6" fill="#fff" opacity="0.3" />
      {/* เกล็ดเกลือ */}
      <rect x="70" y="24" width="5" height="5" rx="1" fill="#fff" transform="rotate(15 72 26)" />
      <rect x="82" y="22" width="4" height="4" rx="1" fill="#fff" transform="rotate(-20 84 24)" />
      <rect x="90" y="28" width="5" height="5" rx="1" fill="#fff" transform="rotate(30 92 30)" />
      <Face cx={80} cy={62} />
    </svg>
  );
}

/** เชฟชาวญี่ปุ่นแบบชิบิ */
export function ChibiChef({ className }: Props) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      <ellipse cx="60" cy="124" rx="34" ry="5" fill="var(--color-brown)" opacity="0.12" />
      {/* ตัว */}
      <path d="M28 124 C 28 100, 40 92, 60 92 C 80 92, 92 100, 92 124 Z" fill="var(--color-paper)" stroke="var(--color-brown)" strokeWidth="3" />
      <circle cx="60" cy="106" r="2.5" fill="var(--color-brown)" />
      <circle cx="60" cy="116" r="2.5" fill="var(--color-brown)" />
      {/* หมวกเชฟ */}
      <path
        d="M30 44 C 18 40, 20 18, 38 20 C 42 6, 78 6, 82 20 C 100 18, 102 40, 90 44 L 88 52 L 32 52 Z"
        fill="var(--color-paper)"
        stroke="var(--color-brown)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* หัว */}
      <circle cx="60" cy="70" r="28" fill="#ffe2c4" stroke="var(--color-brown)" strokeWidth="3" />
      <path d="M34 60 C 40 48, 80 48, 86 60 C 76 54, 44 54, 34 60 Z" fill="var(--color-ink)" />
      <rect x="32" y="48" width="56" height="8" rx="4" fill="var(--color-paper)" stroke="var(--color-brown)" strokeWidth="3" />
      <Face cx={60} cy={72} scale={0.85} />
    </svg>
  );
}

/** น้องแก้วมัทฉะ */
export function ChibiMatcha({ className }: Props) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
      <ellipse cx="60" cy="104" rx="40" ry="5" fill="var(--color-brown)" opacity="0.12" />
      <path d="M86 46 C 104 46, 104 74, 84 74" stroke="var(--color-brown)" strokeWidth="3.5" fill="none" />
      <path d="M18 38 L 92 38 L 86 92 C 85 98, 80 100, 74 100 L 36 100 C 30 100, 25 98, 24 92 Z" fill="var(--color-paper)" stroke="var(--color-brown)" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="55" cy="38" rx="37" ry="8" fill="var(--color-matcha)" stroke="var(--color-brown)" strokeWidth="3" />
      <path d="M40 36 Q 50 31 58 36 T 74 36" stroke="var(--color-matcha-deep)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* ไอร้อน */}
      <path d="M44 24 C 38 16, 50 12, 44 4" stroke="var(--color-brown-soft)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M66 24 C 60 16, 72 12, 66 4" stroke="var(--color-brown-soft)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <Face cx={55} cy={66} scale={0.9} />
    </svg>
  );
}

/** ถั่วพิสตาชิโอชิบิ */
export function ChibiPistachio({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <ellipse cx="50" cy="94" rx="28" ry="4" fill="var(--color-brown)" opacity="0.12" />
      <path d="M50 10 C 78 10, 88 40, 82 64 C 76 86, 24 86, 18 64 C 12 40, 22 10, 50 10 Z" fill="#e9d6b0" stroke="var(--color-brown)" strokeWidth="3" />
      <path d="M50 20 C 70 20, 76 42, 72 60 C 68 76, 32 76, 28 60 C 24 42, 30 20, 50 20 Z" fill="var(--color-matcha)" stroke="var(--color-matcha-deep)" strokeWidth="2" />
      <Face cx={50} cy={48} scale={0.75} />
    </svg>
  );
}

/** เมล็ด/ยีสต์ชิบิ */
export function ChibiYeast({ className }: Props) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <ellipse cx="50" cy="94" rx="28" ry="4" fill="var(--color-brown)" opacity="0.12" />
      <path
        d="M50 14 C 66 14, 70 24, 80 30 C 92 38, 90 60, 80 72 C 70 86, 30 86, 20 72 C 10 60, 8 38, 20 30 C 30 24, 34 14, 50 14 Z"
        fill="var(--color-paper)"
        stroke="var(--color-brown)"
        strokeWidth="3"
      />
      <circle cx="30" cy="40" r="3" fill="var(--color-cream-deep)" />
      <circle cx="72" cy="36" r="2.5" fill="var(--color-cream-deep)" />
      <circle cx="68" cy="74" r="2.5" fill="var(--color-cream-deep)" />
      <Face cx={50} cy={52} scale={0.75} />
    </svg>
  );
}
