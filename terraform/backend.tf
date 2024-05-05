terraform {
  backend "s3" {
    bucket = "terraform-state-sparta-mansijmishra"
    key    = "core/terraform.tfstate"
    region = "us-east-1"
  }
}