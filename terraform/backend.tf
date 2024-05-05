terraform {
  backend "s3" {
    bucket = "terraform-state-sparta-johandelao" 
    key    = "core/terraform.tfstate"
    region = "us-east-1"
  }
}