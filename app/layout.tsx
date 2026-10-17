import type { Metadata, Viewport } from "next";
import { Mitr, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const head = Mitr({
  variable: "--font-head",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const body = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
});

const title = "Atomu-pan! | ชิโอะปังไส้พิสตาชิโอ & มัทฉะเกียวโต";
const description =
  "ชิโอะปังขนมปังเกลือสูตรญี่ปุ่น ไส้พิสตาชิโอแท้ นัว ๆ อบโดยพ่อครัวชาวญี่ปุ่น เลือกไส้เองได้ Made to Order ส่งถึงบ้าน คู่มัทฉะเกียวโต ชิ้นละ 120 บาท สั่งง่ายทาง LINE";

export const metadata: Metadata = {
  metadataBase: new URL("https://atomu-pan.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Atomu-pan!",
    locale: "th_TH",
    type: "website",
    images: [{ url: "/shio-pan.jpg", width: 480, height: 310, alt: "ชิโอะปัง Atomu-pan!" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/shio-pan.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf4e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
