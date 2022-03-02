aws s3 sync --profile ss-prod --delete --metadata-directive REPLACE --cache-control max-age=86400,public --acl private build s3://seabrook-studios.com
aws cloudfront create-invalidation --profile ss-prod --distribution-id E2YPNMIYXU1S8V --paths '/*'
