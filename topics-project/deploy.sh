
zip -r "sparta_deploy.zip" .next pages public styles *.json *.js *.jsx

aws s3 cp "sparta_deploy.zip" s3://terraform-state-sparta-olukukoyi

aws elasticbeanstalk create-application-version --application-name sparta --source-bundle S3Bucket="terraform-state-sparta-olukukoyi",S3Key="sparta_deploy.zip" --version-label "ver-$1" --description "file permissions" --region "us-east-2"

aws elasticbeanstalk update-environment --environment-name sparta-environment --version-label "ver-$1" --region "us-east-2"