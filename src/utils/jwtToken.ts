import { SignJWT, jwtVerify } from "jose";

const secret: string = process.env.JWT_SECRET!;

export async function GenerateToken(data: any) {
	const token = await new SignJWT(data)
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime("2h")
		.sign(new TextEncoder().encode(secret));
	return token;
}

export async function VerifyToken(token: string) {
	try {
		const verified = await jwtVerify(token, new TextEncoder().encode(secret));
		return { success: true, data: verified.payload };
	} catch (error: any) {
		return { success: false, error: error };
	}
}
