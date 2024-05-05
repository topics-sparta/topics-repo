terraform {
  backend "s3" {
    bucket = "terraform-state-sparta-henrysua12"
    key    = "core/terraform.tfstate"
    region = "us-west-1" 
}
}