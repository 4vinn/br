import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { r2 } from '@/lib/r2'
import axios from 'axios';

export async function uploadR2(fileBuffer: any, fileName: string) {
    try {
        const signedUrl = await getSignedUrl(
            r2,
            new PutObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME,
                Key: fileName,
            }),
            { expiresIn: 60 }
        )
        const response = await axios.put(signedUrl, fileBuffer);
        return true;
    } catch (err: any) {
        return false;
    }
}