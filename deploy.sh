zip -r "johan_sparta_deploy-${{ github.sha }}.zip" ./*

aws s3 cp "johan_sparta_deploy-${{ github.sha }}.zip" s3://johandelao-sparta

aws elasticbeanstalk create-application-version \
    --application-name johandelao-sparta \
    --source-bundle S3Bucket="johandelao-sparta",S3Key="johan_sparta_deploy-${{ github.sha }}.zip" \
    --version-label "ver-${{ github.sha }}" \
    --description "file permissions" \
    --region "us-east-1"

aws elasticbeanstalk update-environment \
    --environment-name sparta-environment \
    --version-label "ver-${{ github.sha }}" \
    --region "us-east-1"