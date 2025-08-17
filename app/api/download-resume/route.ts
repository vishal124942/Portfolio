import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
export const runtime = "nodejs";

export async function GET() {
  const fp = path.join(process.cwd(), "public", "resume", "resume.pdf");
  try {
    const buf = await readFile(fp);
    return new NextResponse(buf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Vishal_Verma_Resume.pdf"',
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
