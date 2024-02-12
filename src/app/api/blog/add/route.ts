import prismadb from "@/lib/prismadb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        
    } catch (error: any) {
        return Response.json({
            code: -1,
            message: "Internal Server Error",
            error: { ...error }
        })
    }
}