import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Service } from '@/payload-types'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      key={service.id}
      className="border border-gray-200 hover:border-gray-900 transition-colors"
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded flex items-center justify-center">
            <DynamicIcon color="#FFF" name={service.icon as IconName} className="w-6 h-6" />
          </div>
        </div>
        <h3
          className="text-lg text-gray-900 mb-2"
          style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
        >
          {service.name}
        </h3>
        <p
          className="text-sm text-gray-600 mb-4 leading-relaxed"
          style={{ fontFamily: 'DM Sans', fontWeight: 400 }}
        >
          {service.description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-gray-900 text-gray-900 hover:opacity-50"
          style={{ fontFamily: 'DM Sans', fontWeight: 500 }}
        >
          Request Quote
        </Button>
      </CardContent>
    </Card>
  )
}
