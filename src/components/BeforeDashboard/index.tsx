import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to the Assurixs dashboard!</h4>
      </Banner>
      Here&apos;s what to do next:
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {
            ' with a few insurance carriers, services, and industries to jump-start your new site, then '
          }
          <a href="/" target="_blank">
            visit your website
          </a>
          {' to see the results.'}
        </li>
        <li>
          You can manage this data anytime by going to the Collections section in the sidebar.
        </li>
      </ul>
      {'Made with love by '}
      <a href="https://www.usera.space/" rel="noopener noreferrer" target="_blank">
        usera.space
      </a>
      .
    </div>
  )
}

export default BeforeDashboard
