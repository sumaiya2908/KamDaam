const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

require('dotenv').config();

const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new aws.S3({
    accessKeyId: accessKeyId,
   secretAccessKey: secretAccessKey,

});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};

const upload = multer({
    // fileFilter,
    storage: multerS3({
        acl: 'public-read',
        s3,
        bucket: 'kamdaam-images',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: "TESTING_METADATA" });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    })
})

module.exports = upload;