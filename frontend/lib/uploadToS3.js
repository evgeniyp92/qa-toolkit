import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const s3worker = new S3Client({
  region: process.env.NEXT_PUBLIC_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
  },
});

export const uploadToS3 = async () => {
  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
    Key: "hello_world.txt",
    Body: "Hello, World!",
  });

  try {
    const res = await s3worker.send(command);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

/**
 * [
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": [
            "GET",
            "POST",
            "PATCH",
            "PUT",
            "HEAD",
            "DELETE"
        ],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": []
        "MaxAgeSeconds": 3000
    }
]
 */
