import type { OpenNextConfig } from '@opennextjs/aws/types/open-next.js'
const config = {
  default: {
    install: {
      packages: ['sharp'],
      additionalArgs: '--shamefully-hoist --cpu=x64 --os=linux --libc=glibc',
    },
  },
} satisfies OpenNextConfig
export default config
