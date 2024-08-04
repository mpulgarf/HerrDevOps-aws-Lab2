import * as cdk from 'aws-cdk-lib';
import { PipelineCdkStack  } from '../lib/pipeline-cdk-stack';
import { EcrCdkStack } from '../lib/ecr-cdk-stack';

const app = new cdk.App();
const ecrCdkStack = new EcrCdkStack(app, 'ecr-stack', {});
//new MyPipelineStack(app, 'MyPipelineStack');
const pipelineCdkStack = new PipelineCdkStack (app, 'PipelineCdkStack', {
    ecrRepository: ecrCdkStack.repository,
  });
