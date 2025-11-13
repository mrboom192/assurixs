// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'assurixs',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        aws: {
          profile: 'assurixs',
        },
      },
    }
  },
  async run() {
    const email = new sst.aws.Email('AssurixsEmail', {
      sender: 'ais@assurixs.com',
    })

    const bucket = new sst.aws.Bucket('AssurixsUploads', {
      access: 'public',
    })
    const vpc = new sst.aws.Vpc('AssurixsVpc', { bastion: true, nat: 'ec2' })
    const rds = new sst.aws.Postgres('AssurixsPostgres', { vpc, proxy: true, version: '16.8' })

    new sst.aws.Nextjs('AssurixsNextjs', {
      link: [rds, bucket, email],
      vpc,
      permissions: [
        {
          actions: ['*'],
          resources: ['*'],
        },
      ],
      domain: {
        name: 'assurixs.com',
        aliases: ['www.assurixs.com'],
        dns: false,
        cert: 'arn:aws:acm:us-east-1:740535718137:certificate/49541b19-207d-4e66-9e39-f414256c5732',
      },
    })

    const api = new sst.aws.Function('EmailApi', {
      handler: 'functions/sender.handler',
      link: [email],
      url: true,
    })

    return {
      api: api.url,
    }
  },
})
