# Deployment: Hello World

## Architecture
```
User → CloudFront (CDN Edge) → S3 Bucket (Static Files)
```

## AWS Resources

### S3 Bucket
- **Bucket name:** hello-world-static-047953058184
- **Region:** us-east-1
- **Public access:** Blocked (CloudFront OAC only)
- **Bucket policy:** Allows `s3:GetObject` from CloudFront distribution ARN

### CloudFront Distribution
- **Distribution ID:** E1TACOV9S7KGDB
- **Domain:** d1tfiupsj9v9g2.cloudfront.net
- **OAC ID:** E384X4VRSO473J
- **Origin:** hello-world-static-047953058184.s3.us-east-1.amazonaws.com
- **Price class:** PriceClass_100 (US, Canada, Europe)
- **Default root object:** index.html
- **Viewer protocol policy:** redirect-to-https
- **Cache policy:** CachingOptimized (658327ea-f89d-4fab-a63d-7e88639e58f6)
- **Error pages:** 403/404 → /index.html (200) for SPA routing
- **Compression:** gzip + brotli enabled

## Deploy Commands
```bash
# Build static export
cd projects/hello-world
npm run build   # outputs to out/

# Upload to S3
aws s3 sync out/ s3://hello-world-static-047953058184/ --delete --cache-control "public, max-age=31536000, immutable"
aws s3 cp out/index.html s3://hello-world-static-047953058184/index.html --cache-control "no-cache, no-store, must-revalidate" --content-type "text/html" --metadata-directive REPLACE
aws s3 cp out/404.html s3://hello-world-static-047953058184/404.html --cache-control "no-cache, no-store, must-revalidate" --content-type "text/html" --metadata-directive REPLACE

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E1TACOV9S7KGDB --paths "/*"
```

## URLs
- **Live site:** https://d1tfiupsj9v9g2.cloudfront.net
- **GitHub:** https://github.com/devopsSiliconNet/hello-world

## Status
- [x] S3 bucket created (hello-world-static-047953058184)
- [x] Static files uploaded (18 files, ~868KB)
- [x] CloudFront distribution created (E1TACOV9S7KGDB)
- [x] OAC + bucket policy configured
- [ ] Distribution deployed and accessible (deploying — takes ~5–10 min)
- [ ] Cache invalidation confirmed
