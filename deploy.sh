zip -r "sparta_deploy.zip" ./*

aws s3 cp "sparta_deploy.zip" s3://terraform-state-sparta-henrysua12 

aws elasticbeanstalk create-application-version --application-name sparta --source-bundle S3Bucket="terraform-state-sparta-henrysua12 ",S3Key="sparta_deploy.zip" --version-label "ver-$1" --description "file permissions" --region "us-west-1"

aws elasticbeanstalk update-environment --environment-name sparta-environment --version-label "ver-$1" --region "us-west-1"