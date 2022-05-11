terraform {
    backend "s3" {
        bucket = "elliotfdev-infrastructure"
        key = "terraform/infrastructure/terraform.tfstate"
        region = "eu-west-1"
    }
}

provider "aws" {
    region = "eu-west-1"
}