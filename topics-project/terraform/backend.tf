terraform {
  backend "s3" {
    bucket = "terraform-state-sparta-olukukoyi" 
    key    = "core/terraform.tfstate"
    region = "us-east-2"
  }
}