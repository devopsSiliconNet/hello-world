# Deployment: Hello World

## Architecture
```
User → CloudFront (CDN Edge) → S3 Bucket (Static Files)
```

## AWS Resources

### S3 Bucket
- **Bucket name:** hello-world-static-site-047953058184
- **Region:** us-east-1 (required for CloudFront)
- **Static website hosting:** Enabled
- **Index document:** index.html
- **Error document:** 404.html
- **Public access:** Blocked (CloudFront OAC only)

### CloudFront Distribution
- **Origin:** S3 bucket via Origin Access Control (OAC)
- **Price class:** PriceClass_100 (US, Canada, Europe)
- **Default root object:** index.html
- **Viewer protocol policy:** redirect-to-https
- **Cache policy:** CachingOptimized
- **Error pages:** 403/404 → /index.html (200) for SPA routing
- **Compression:** gzip + brotli enabled

## Deploy Commands
```bash
# Build static export
cd projects/hello-world
npm run build   # outputs to out/

# Upload to S3
aws s3 sync out/ s3://BUCKET_NAME/ --delete --cache-control "public, max-age=31536000, immutable"
aws s3 cp out/index.html s3://BUCKET_NAME/index.html --cache-control "no-cache"
aws s3 cp out/404.html s3://BUCKET_NAME/404.html --cache-control "no-cache"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"
```

## URLs
- **CloudFront:** (to be filled after deployment)
- **S3 Website:** (to be filled after deployment)

## Status
- [ ] S3 bucket created
- [ ] Static files uploaded
- [ ] CloudFront distribution created
- [ ] Distribution deployed and accessible
- [ ] Cache invalidation confirmed
