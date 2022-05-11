resource "aws_s3_bucket" "elliotfdev" {
    bucket = "elliotf.dev"
    acl = "public-read"

    website {
      index_document = "index.html"
      error_document = "index.html"
    }

    versioning {
        enabled = true
    }

    tags = {
        Name = "production site"
        Environment = "production"
    }
}

resource "aws_s3_bucket" "mediaelliotfdev" {
    bucket = "media.elliotf.dev"
    
    versioning {
        enabled = true
    }

    tags = {
        Name = "media CDN bucket"
        Environment = "production"
    }
}

resource "aws_s3_bucket_policy" "mediapolicy" {
    bucket = aws_s3_bucket.mediaelliotfdev.id
    policy = data.aws_iam_policy_document.allow_public_access.json
}

data "aws_iam_policy_document" "allow_public_access" {
  statement {
    
    principals {
      type = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      aws_s3_bucket.mediaelliotfdev.arn,
      "${aws_s3_bucket.mediaelliotfdev.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_public_access_block" "publicaccessblockmedia" {
  bucket = aws_s3_bucket.mediaelliotfdev.id

  block_public_acls   = false
  block_public_policy = false
}

resource "aws_s3_bucket_acl" "mediaacl" {
    bucket = "media.elliotf.dev"
    acl = "public-read-write"
}

resource "aws_s3_bucket_cors_configuration" "mediacors" {  
    bucket = "media.elliotf.dev"

    cors_rule {
        allowed_headers = ["*"]
        allowed_methods = ["PUT", "POST"]
        allowed_origins = ["*"]
        expose_headers = ["ETag", "Content-Type"]
        max_age_seconds = 3000
    }

    cors_rule {
        allowed_methods = ["GET"]
        allowed_origins = ["*"]
    }
}