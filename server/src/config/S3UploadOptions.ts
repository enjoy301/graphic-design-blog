import { S3 } from "@aws-sdk/client-s3";
import { env } from "../env";

const multerS3 = require("multer-s3");

const s3 = new S3({
  credentials: {
    secretAccessKey: env.s3.secretAccessKey || "test",
    accessKeyId: env.s3.accessKeyId || "test",
  },
  region: env.s3.region || "ap-northeast-2",
});

export const s3UploadOptions = {
  storage: multerS3({
    s3: s3,
    bucket: "myblogtest",
    acl: "private",
    key: function (req: any, file: any, cb: any) {
      cb(null, Date.now().toString());
    },
  }),
};
