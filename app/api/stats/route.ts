import { NextResponse } from "next/server"

// GET /api/stats - Obtener estadísticas del sitio
export async function GET() {
  try {
    const { contarMascotasAdoptadas } = await import("@/lib/actions/publicaciones")
    const mascotasAdoptadas = await contarMascotasAdoptadas()
    return NextResponse.json({ mascotasAdoptadas })
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ mascotasAdoptadas: 0 }, { status: 500 })
  }
}
