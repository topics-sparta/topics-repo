zip -r "mansij_sparta_deploy-${{ github.sha }}.zip" ./*

aws s3 cp "mansij_sparta_deploy-${{ github.sha }}.zip" s3://terraform-state-sparta-mansijmishra

aws elasticbeanstalk create-application-version \
    --application-name mansijmishra-sparta \
    --source-bundle S3Bucket="terraform-state-sparta-mansijmishra",S3Key="mansij_sparta_deploy-${{ github.sha }}.zip" \
    --version-label "ver-${{ github.sha }}" \
    --description "file permissions" \
    --region "us-east-1"

aws elasticbeanstalk update-environment \
    --environment-name sparta-environment \
    --version-label "ver-${{ github.sha }}" \
    --region "us-east-1"