import as cdk from 'aws-cdk-lib';
import as s3 from "aws-cdk-lib/aws-s3's


class Mistack extends cdk.Stack f
constructor (scope: cdk.App, id: string, props?: cdk.stackprops) (
super (scope, id, props):


new s3.Bucket(this, 'MiBucketVersionado
versioned: true
D:


const app
new cdk.App();
new MiStack(app, 'MiInfraestructuraversionada'):