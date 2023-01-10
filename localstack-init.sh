#!/bin/sh

echo "Init S3"
awslocal s3api create-bucket --bucket myblogtest