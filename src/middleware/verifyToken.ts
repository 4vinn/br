import { VerifyToken } from "@/utils/jwtToken";
import { NextRequest, NextResponse } from "next/server";

export async function verifyJWT(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const token = reqBody.token;
		if (!token) {
			return NextResponse.json(
				{
					code: 1,
					message: "Token Not Recieved",
				},
				{ status: 400 }
			);
		} else {
			const { success, data, error } = await VerifyToken(token);
			if (success) {
				console.log("data", data);
				req.cookies.set("TokenData", JSON.stringify(data));
				const res = NextResponse.next({ request: req });
				return res;
			} else {
				return NextResponse.json(
					{
						code: 2,
						message: "Unauthorized",
						error: error.message,
					},
					{ status: 401 }
				);
			}
		}
	} catch (error: any) {
		return Response.json(
			{
				code: -1,
				message: "Internal Server Error",
				error: { ...error, msg: error.message },
			},
			{ status: 500 }
		);
	}
}
