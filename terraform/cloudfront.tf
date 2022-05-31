locals {
  s3_origin_id = "elliotf.dev"
}


resource "aws_cloudfront_distribution" "elliotfdevcloudfront" {
  origin {
    origin_id   = aws_s3_bucket.elliotfdev.website_endpoint
    domain_name = aws_s3_bucket.elliotfdev.website_endpoint

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }


  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["elliotf.dev"]

  custom_error_response {
    error_caching_min_ttl = 0
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.elliotfdev.website_endpoint

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    compress               = true
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    viewer_protocol_policy = "redirect-to-https"
  }


  tags = {
    Environment = "production"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:853957954650:certificate/bac2989c-aa64-4bb9-8f33-e2013b148aac"
    ssl_support_method  = "sni-only"
  }
}

resource "aws_cloudfront_distribution" "mediaelliotfdevcloudfront" {
  origin {
    domain_name = aws_s3_bucket.mediaelliotfdev.bucket_domain_name
    origin_id   = aws_s3_bucket.mediaelliotfdev.bucket_domain_name
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["media.elliotf.dev"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.mediaelliotfdev.bucket_domain_name

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
  }


  tags = {
    Environment = "production"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:853957954650:certificate/bac2989c-aa64-4bb9-8f33-e2013b148aac"
    ssl_support_method  = "sni-only"
  }
}
