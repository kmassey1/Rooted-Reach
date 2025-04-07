import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CaseStudyPreviewProps {
  title: string
  category: string
  image: string
  slug: string
}

export default function CaseStudyPreview({ title, category, image, slug }: CaseStudyPreviewProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img alt={title} className="aspect-video w-full object-cover" src={image || "/placeholder.svg"} />
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          See how strategic marketing solutions helped this organization achieve remarkable results.
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full" asChild>
          <Link href={slug}>
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
