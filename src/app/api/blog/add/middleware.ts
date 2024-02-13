import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyJWT } from "@/middleware/verifyToken";
export async function middleware(request: NextRequest) {
	if (
		request.nextUrl.pathname.startsWith("/api")
	) {
		const response = await verifyJWT(request);
		return new NextResponse(response.body, { headers: response.headers });
	}
}
