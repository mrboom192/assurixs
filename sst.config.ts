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
    const vpc = new sst.aws.Vpc('AssurixsVpc', { nat: 'managed' })

    const efs = new sst.aws.Efs('AssurixsEfs', {
      vpc,
    })

    const cluster = new sst.aws.Cluster('AssurixsCluster', { vpc })

    new sst.aws.Service('AssurixsService', {
      cluster,
      image: { context: '.', dockerfile: 'Dockerfile' },
      loadBalancer: {
        ports: [{ listen: '80/http', forward: '3000/http' }],
      },
      volumes: [
        {
          // Mount the same path used by your DATABASE_URI
          path: '/app/assurixs.db',
          efs, // <-- reference the EFS instance here (no name or object)
        },
      ],
      environment: {
        NODE_ENV: 'production',
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET!,
        DATABASE_URI: 'file:/app/assurixs.db',
      },
    })
  },
})
