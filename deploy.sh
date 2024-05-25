zip -r "sparta_build.zip" ./*

aws s3 cp "sparta_build.zip" s3://terraform-state-sparta-henrysua12 

aws elasticbeanstalk create-application-version --application-name henry-sparta --source-bundle S3Bucket="terraform-state-sparta-henrysua12 ",S3Key="sparta_build-${{ github.sha }}.zip" --version-label "ver-${{ github.sha }}" --description "file permissions" --region "us-west-1"

aws elasticbeanstalk update-environment --environment-name sparta-environment --version-label "ver-$1" --region "us-west-1"