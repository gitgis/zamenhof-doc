#!/bin/sh

rm public/* -rf

node hugo-lunr/bin/index.js -i "content/docs/**" -o static/lunr-docs.json
node hugo-lunr/bin/index.js -i "content/docs1/**" -o static/lunr-docs1.json

hugo
aws s3 sync ./public/ s3://zamenhof-doc.gitgis.com/ --delete --acl public-read
