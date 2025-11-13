import { Payload, PayloadRequest } from 'payload'
import { fetchFileByURL } from './utils'

const carriers = [
  {
    name: 'AmTrust',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/amtrust.webp',
    website: 'https://www.amtrustfinancial.com/',
  },
  {
    name: 'Biberk',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/biberk.webp',
    website: 'https://www.biberk.com/',
  },
  {
    name: 'CNA',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/cna.webp',
    website: 'https://www.cna.com/',
  },
  {
    name: 'Dentist Advantage',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/dentist-advantage.webp',
    website: 'https://www.dentistadvantage.com/',
  },
  {
    name: 'Employers',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/employers.webp',
    website: 'https://www.employers.com/',
  },
  {
    name: 'Great American',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/great-american.webp',
    website: 'https://www.greatamericaninsurancegroup.com/',
  },
  {
    name: 'Guide One',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/guide-one.webp',
    website: 'https://www.guideone.com/',
  },
  {
    name: 'Hanover',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/hanover.webp',
    website: 'https://www.hanover.com/',
  },
  {
    name: 'Indigo',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/indigo.webp',
    website: 'https://www.indigogroup.com/',
  },
  {
    name: 'Liberty Mutual',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/liberty-mutual.webp',
    website: 'https://www.libertymutual.com/',
  },
  {
    name: 'LoneStar Alliance',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/lonestar-alliance.webp',
    website: 'https://www.lonestaralliance.com/',
  },
  {
    name: 'Medical Protective',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/medical-protective.webp',
    website: 'https://www.medpro.com/',
  },
  {
    name: 'PHLY',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/phly.webp',
    website: 'https://www.phly.com/',
  },
  {
    name: 'ProAssurance',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/proassurance.webp',
    website: 'https://www.proassurance.com/',
  },
  {
    name: 'The Doctors Company',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/the-doctors-company.webp',
    website: 'https://www.thedoctors.com/',
  },
  {
    name: 'The Hartford',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/the-hartford.webp',
    website: 'https://www.thehartford.com/',
  },
  {
    name: 'Travelers',
    url: 'https://raw.githubusercontent.com/mrboom192/assurixs-images/refs/heads/main/carriers/travelers.webp',
    website: 'https://www.travelers.com/',
  },
]

export const createInsuranceCarriers = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding insurance carriers...')

  for (const carrier of carriers) {
    const file = await fetchFileByURL(carrier.url)

    // Create the media record
    const media = await payload.create({
      collection: 'media',
      context: { disableRevalidate: true },
      data: {
        alt: `${carrier.name} Logo`,
      },
      file,
    })

    // Create the insurance carrier, linking to that media
    await payload.create({
      collection: 'insurance-carrier',
      context: { disableRevalidate: true },
      data: {
        name: carrier.name,
        logo: media.id,
        website: carrier.website,
      },
    })

    payload.logger.info(`Seeded ${carrier.name}`)
  }

  payload.logger.info('Finished seeding insurance carriers.')
}
