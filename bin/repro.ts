#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { ReproStack } from '../lib/repro-stack';

const app = new cdk.App();
new ReproStack(app, 'ReproStack');
