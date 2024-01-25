# Todos for the project

- [x] Integrate datagrid pro
- [ ] Display modal to update contents of an entry
- [ ] Sync list of personnel with database from excel file
- [ ] Use ReactQuery or Zustand?
- [x] Run API server off Next.js or off Express.js? Next.js
- [ ] PDF File upload and storage in S3 (see lower)
- [ ] PDF File download from S3
- [ ] PDF File deletion from S3 (via a management page in the client)
- [ ] PDF File preview in browser?

## File upload directly from client to S3

I maintain a web service where we do this kind of uploads from the client right into S3 every day.

Here's the recommended flow:

    UI calls your Node BE asking for a signed URL

    The BE decides on a location where the file would be created and requests AWS S3 for a presigned URL, specifying the time-to-live of this URL. After this TTL the presigned URL won't work anymore.

    BE returns the payload to the UI, which uses it to build a form.

    The UI performs the POST operation.

That seems easy, where's the tricky part?

    Set the bucket permissions properly, disallow direct access from HTTP and so on.

    Keep in mind the client will see the file URL, ie they will see the path where this file will be stored. The BE shouldn't expose any sensitive data in this path.

    Ensure only authorized clients can request a presigned URL from the BE.

    Properly setup the CORS headers of the target bucket.

How can you get hacked?

It depends what you mean by "hacked". Whatever you're going to do with those files should be treated as "user input". This means you should take all the same security measures you'd take if the file was stored in your file system.

And that's pretty much everything that comes to my mind.

Edit: added the hacked answer.

https://www.reddit.com/r/node/comments/vywkv3/is_it_safe_to_upload_file_directly_from_frontend/

https://aws.amazon.com/blogs/compute/uploading-to-amazon-s3-directly-from-a-web-or-mobile-application/
