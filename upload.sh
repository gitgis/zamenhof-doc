#!/bin/sh

rm public/* -rf
npm run lunr
hugo
aws s3 sync ./public/ s3://zamenhof-doc.gitgis.com/ --delete --acl public-read
