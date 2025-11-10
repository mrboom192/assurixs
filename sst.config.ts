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
    const vpc = new sst.aws.Vpc('AssurixsVpc', { bastion: true, nat: 'ec2' })
    const rds = new sst.aws.Postgres('AssurixsPostgres', { vpc, proxy: true })

    new sst.aws.Nextjs('AssurixsNextjs', {
      link: [rds],
      vpc,
    })
  },
})
