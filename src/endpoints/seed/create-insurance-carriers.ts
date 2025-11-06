import { Payload, PayloadRequest, File } from 'payload'
import fs from 'fs'
import path from 'path'

const carriers = [
  { name: 'AmTrust', file: 'amtrust.png', website: 'https://www.amtrustfinancial.com/' },
  { name: 'Biberk', file: 'biberk.webp', website: 'https://www.biberk.com/' },
  { name: 'CNA', file: 'cna.png', website: 'https://www.cna.com/' },
  {
    name: 'Dentist Advantage',
    file: 'dentist-advantage.png',
    website: 'https://www.dentistadvantage.com/',
  },
  { name: 'Employers', file: 'employers.png', website: 'https://www.employers.com/' },
  {
    name: 'Great American',
    file: 'great-american.png',
    website: 'https://www.greatamericaninsurancegroup.com/',
  },
  { name: 'Guide One', file: 'guide-one.png', website: 'https://www.guideone.com/' },
  { name: 'Hanover', file: 'hanover.webp', website: 'https://www.hanover.com/' },
  { name: 'Indigo', file: 'indigo.png', website: 'https://www.indigogroup.com/' },
  { name: 'Liberty Mutual', file: 'liberty-mutual.png', website: 'https://www.libertymutual.com/' },
  {
    name: 'LoneStar Alliance',
    file: 'lonestar-alliance.png',
    website: 'https://www.lonestaralliance.com/',
  },
  {
    name: 'Medical Protective',
    file: 'medical-protective.png',
    website: 'https://www.medpro.com/',
  },
  { name: 'PHLY', file: 'phly.png', website: 'https://www.phly.com/' },
  { name: 'ProAssurance', file: 'proassurance.webp', website: 'https://www.proassurance.com/' },
  {
    name: 'The Doctors Company',
    file: 'the-doctors-company.png',
    website: 'https://www.thedoctors.com/',
  },
  { name: 'The Hartford', file: 'the-hartford.png', website: 'https://www.thehartford.com/' },
  { name: 'Travelers', file: 'travelers.png', website: 'https://www.travelers.com/' },
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
    const filePath = path.resolve(process.cwd(), `src/endpoints/seed/carriers/${carrier.file}`)
    const fileBuffer = await fs.promises.readFile(filePath)
    const ext = path.extname(carrier.file).slice(1)

    // Create the media record
    const media = await payload.create({
      collection: 'media',
      context: { disableRevalidate: true },
      data: {
        alt: `${carrier.name} Logo`,
      },
      file: {
        name: carrier.file,
        data: fileBuffer,
        mimetype: `image/${ext}`,
        size: fileBuffer.byteLength,
      },
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
