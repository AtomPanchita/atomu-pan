"use client";

import { useState } from "react";
import { lineMessageUrl } from "./site";

// เมนูให้ลูกค้าเลือกเอง — ชื่อและราคาแก้ได้ที่นี่
const BASE_PRICE = 120;

const fillings = [
  { id: "pistachio", name: "พิสตาชิโอแท้", jp: "ピスタチオ", color: "#a8c27a", price: 0 },
  { id: "matcha", name: "ครีมมัทฉะเกียวโต", jp: "抹茶クリーム", color: "#7fa34a", price: 10 },
  { id: "anko", name: "ถั่วแดงอันโกะ", jp: "あんこ", color: "#7a3b3b", price: 0 },
  { id: "cheese", name: "ครีมชีส", jp: "クリームチーズ", color: "#fff3c9", price: 15 },
  { id: "choco", name: "ช็อกโกแลต", jp: "チョコ", color: "#5a3622", price: 10 },
];

const toppings = [
  { id: "salt", name: "เกล็ดเกลือเพิ่ม", color: "#ffffff", price: 0 },
  { id: "nuts", name: "พิสตาชิโอบดโรยหน้า", color: "#8db35a", price: 20 },
  { id: "powder", name: "ผงมัทฉะโรยหน้า", color: "#5f7f32", price: 15 },
  { id: "honey", name: "ฮันนี่บัตเตอร์", color: "#f2b632", price: 10 },
  { id: "sesame", name: "งาดำ", color: "#2b2118", price: 5 },
];

type Delivery = "home" | "pickup";

function plus(price: number) {
  return price === 0 ? "ฟรี" : `+${price}฿`;
}

/** ภาพขนมปังผ่าครึ่ง เห็นไส้และท็อปปิ้งที่เลือก */
function PreviewBun({ fillingColor, toppingColors, bump }: { fillingColor: string; toppingColors: string[]; bump: number }) {
  const spots = [
    [52, 30], [70, 24], [88, 26], [104, 32], [62, 38], [80, 34], [96, 40], [116, 40], [44, 42],
  ];
  return (
    <svg key={bump} viewBox="0 0 160 120" className="jiggle-pop h-full w-full" aria-hidden="true">
      <ellipse cx="80" cy="112" rx="58" ry="6" fill="var(--color-brown)" opacity="0.12" />
      <path d="M14 76 C 8 44, 40 20, 80 20 C 120 20, 152 44, 146 76 C 142 98, 118 104, 80 104 C 42 104, 18 98, 14 76 Z" fill="var(--color-crust)" stroke="var(--color-brown)" strokeWidth="3" />
      {/* ไส้ */}
      <path d="M30 70 C 30 58, 52 52, 80 52 C 108 52, 130 58, 130 70 C 130 80, 108 86, 80 86 C 52 86, 30 80, 30 70 Z" fill="#fbe9c6" stroke="var(--color-brown)" strokeWidth="2" />
      <path d="M42 70 C 42 62, 58 58, 80 58 C 102 58, 118 62, 118 70 C 118 77, 102 80, 80 80 C 58 80, 42 77, 42 70 Z" fill={fillingColor} stroke="var(--color-brown)" strokeWidth="1.5" style={{ transition: "fill .3s" }} />
      {/* ท็อปปิ้ง */}
      {toppingColors.flatMap((c, ti) =>
        spots
          .filter((_, i) => (i + ti) % 2 === 0)
          .map(([x, y], i) => (
            <rect key={`${ti}-${i}`} x={x + ti * 3} y={y + (ti % 2) * 3} width="5" height="5" rx="1.5" fill={c} stroke="var(--color-brown)" strokeWidth="0.6" transform={`rotate(${(i * 37 + ti * 20) % 90} ${x + ti * 3 + 2} ${y + 2})`} />
          )),
      )}
      {/* หน้าน้อง */}
      <circle cx="68" cy="94" r="2.4" fill="var(--color-ink)" />
      <circle cx="92" cy="94" r="2.4" fill="var(--color-ink)" />
      <path d="M77 97 Q 80 100 83 97" stroke="var(--color-ink)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="58" cy="98" rx="4" ry="2.4" fill="var(--color-blush)" opacity="0.8" />
      <ellipse cx="102" cy="98" rx="4" ry="2.4" fill="var(--color-blush)" opacity="0.8" />
    </svg>
  );
}

function Chip({ active, onClick, children, color }: { active: boolean; onClick: () => void; children: React.ReactNode; color: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 rounded-full border-2 px-3 py-2 text-left text-sm transition active:scale-95 ${
        active ? "border-brown bg-brown text-paper" : "border-cream-deep bg-paper text-ink hover:border-brown-soft"
      }`}
    >
      <span className="size-4 shrink-0 rounded-full border border-brown/40" style={{ background: color }} />
      {children}
    </button>
  );
}

export default function Builder() {
  const [filling, setFilling] = useState(fillings[0].id);
  const [picked, setPicked] = useState<string[]>(["salt"]);
  const [qty, setQty] = useState(1);
  const [delivery, setDelivery] = useState<Delivery>("home");
  const [bump, setBump] = useState(0);

  const f = fillings.find((x) => x.id === filling)!;
  const tops = toppings.filter((t) => picked.includes(t.id));
  const each = BASE_PRICE + f.price + tops.reduce((s, t) => s + t.price, 0);
  const total = each * qty;

  const wiggle = () => setBump((b) => b + 1);
  const toggle = (id: string) => {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
    wiggle();
  };

  const message = [
    "สวัสดีค่ะ อยากสั่งชิโอะปัง Made to Order 🥐",
    `• ไส้: ${f.name}`,
    `• ท็อปปิ้ง: ${tops.length ? tops.map((t) => t.name).join(", ") : "ไม่ใส่"}`,
    `• จำนวน: ${qty} ชิ้น (ชิ้นละ ${each} บาท)`,
    `• รวมค่าขนม: ${total} บาท`,
    `• รับสินค้า: ${delivery === "home" ? "ส่งถึงบ้าน (รบกวนแจ้งค่าส่ง)" : "มารับเองที่ร้าน"}`,
    delivery === "home" ? "ที่อยู่จัดส่ง: (พิมพ์ที่อยู่ตรงนี้)" : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-start">
      {/* ภาพตัวอย่าง + สรุปราคา */}
      <div className="order-2 rounded-3xl bg-paper p-6 text-center shadow-lg shadow-brown/10 md:order-1 md:sticky md:top-20">
        <button type="button" onClick={wiggle} className="mx-auto block aspect-[4/3] w-full max-w-64 cursor-pointer" aria-label="กดให้ขนมปังดุ๊กดิ๊ก">
          <PreviewBun fillingColor={f.color} toppingColors={tops.map((t) => t.color)} bump={bump} />
        </button>
        <p className="mt-2 font-display text-lg text-brown">ชิโอะปังไส้{f.name}</p>
        <p className="text-sm text-ink/70">{tops.length ? `โรย ${tops.map((t) => t.name).join(" · ")}` : "ไม่ใส่ท็อปปิ้ง"}</p>
        <div className="mt-4 rounded-2xl bg-cream px-4 py-3">
          <p className="text-sm text-brown-soft">ชิ้นละ {each} บาท × {qty} ชิ้น</p>
          <p className="font-display text-3xl text-brown" aria-live="polite">
            {total.toLocaleString("th-TH")} <span className="text-base">บาท</span>
          </p>
          {delivery === "home" && <p className="text-xs text-ink/60">+ ค่าส่ง แอดมินแจ้งตามระยะทาง</p>}
        </div>
        <a
          href={lineMessageUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06c755] px-6 py-4 font-display text-lg text-white shadow-[0_6px_0_#04913e] transition active:translate-y-1 active:shadow-[0_2px_0_#04913e]"
        >
          สั่งชิ้นนี้ทาง LINE
        </a>
        <p className="mt-2 text-xs text-ink/60">ระบบจะเปิด LINE พร้อมข้อความออเดอร์ให้ แค่กดส่ง</p>
      </div>

      {/* ตัวเลือก */}
      <div className="order-1 space-y-6 rounded-3xl border-2 border-cream-deep bg-paper/70 p-5 md:order-2 md:p-6">
        <fieldset>
          <legend className="font-display text-lg text-brown">
            1. เลือกไส้ <span className="text-sm text-matcha-deep">(เลือก 1)</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {fillings.map((x) => (
              <Chip key={x.id} color={x.color} active={filling === x.id} onClick={() => { setFilling(x.id); wiggle(); }}>
                {x.name} <span className="opacity-70">{plus(x.price)}</span>
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg text-brown">
            2. เลือกท็อปปิ้ง <span className="text-sm text-matcha-deep">(เลือกได้หลายอย่าง)</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {toppings.map((t) => (
              <Chip key={t.id} color={t.color} active={picked.includes(t.id)} onClick={() => toggle(t.id)}>
                {t.name} <span className="opacity-70">{plus(t.price)}</span>
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg text-brown">3. จำนวน</legend>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full border-2 border-cream-deep bg-paper p-1">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="size-10 rounded-full bg-cream font-display text-xl text-brown active:scale-90" aria-label="ลดจำนวน">
              −
            </button>
            <span className="w-12 text-center font-display text-xl text-brown">{qty}</span>
            <button type="button" onClick={() => { setQty((q) => Math.min(50, q + 1)); wiggle(); }} className="size-10 rounded-full bg-matcha font-display text-xl text-brown active:scale-90" aria-label="เพิ่มจำนวน">
              +
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg text-brown">4. รับขนมยังไงดี?</legend>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {(
              [
                ["home", "🛵 ส่งถึงบ้าน", "ค่าส่งตามระยะทาง"],
                ["pickup", "🏠 มารับเอง", "รับที่ร้าน"],
              ] as const
            ).map(([id, label, sub]) => (
              <button
                key={id}
                type="button"
                onClick={() => setDelivery(id)}
                aria-pressed={delivery === id}
                className={`rounded-2xl border-2 px-3 py-3 text-center transition active:scale-95 ${
                  delivery === id ? "border-brown bg-brown text-paper" : "border-cream-deep bg-paper text-ink"
                }`}
              >
                <span className="block font-display">{label}</span>
                <span className="block text-xs opacity-75">{sub}</span>
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
