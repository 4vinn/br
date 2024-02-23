import { NextRequest, NextResponse } from 'next/server'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { r2 } from '@/lib/r2'
import axios from 'axios';

export async function POST(request: NextRequest) {
    try {
        const res = await request.formData();
        const data: any = res.get('file');
        const fileName = res.get('fileName');
        const fileBuffer = await data.arrayBuffer();
        const signedUrl = await getSignedUrl(
            r2,
            new PutObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME,
                Key: fileName?.toString(),
            }),
            { expiresIn: 60 }
        )
        let url = `https://pub-41a1a8f32abe4401b1f15c19faba731c.r2.dev/${fileName?.toString()}`;
        const response = await axios.put(signedUrl, fileBuffer);
        return Response.json({
            code: 0,
            message: "Successfully uploaded",
            url: url
        })
    } catch (err: any) {
        return Response.json({
            code: 0,
            message: "error",
            error: err.message
        })
    }
}