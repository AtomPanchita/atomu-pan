// ใส่ LINE Official ID จริงของร้านตรงนี้ (มี @ นำหน้า)
export const LINE_ID = "@atomupan";
export const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;

/** เปิดแชท LINE OA พร้อมข้อความที่พิมพ์ไว้ให้แล้ว */
export function lineMessageUrl(text: string) {
  return `https://line.me/R/oaMessage/${LINE_ID}/?${encodeURIComponent(text)}`;
}
