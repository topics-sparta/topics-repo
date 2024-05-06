zip -r "sparta_deploy-$1.zip" ./*

aws s3 cp "sparta_deploy-$1.zip" s3://terraform-state-sparta-mansijmishra

aws elasticbeanstalk create-application-version --application-name sparta --source-bundle S3Bucket="terraform-state-sparta-mansijmishra",S3Key="sparta_deploy-$1.zip" --version-label "ver-$1" --description "sparta deployment" --region "us-east-1"

aws elasticbeanstalk update-environment --environment-name sparta-environment --version-label "ver-$1" --region "us-east-1"