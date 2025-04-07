import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart, Users, Target, PenTool, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Marketing Services for Nonprofits</h1>

        <p className="text-lg text-muted-foreground mb-12">
          I offer a comprehensive range of marketing services specifically designed for nonprofit organizations. Each
          service can be tailored to your organization's unique needs, goals, and budget.
        </p>

        <div className="grid gap-8 mb-12">
          {/* Strategic Planning */}
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-3">
              <div className="md:col-span-1 bg-muted p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                    <Target className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Strategic Planning</h2>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-muted-foreground mb-4">
                  Develop a comprehensive marketing strategy aligned with your mission and organizational goals. This
                  service provides a roadmap for your marketing efforts, ensuring all activities contribute to your
                  nonprofit's success.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Marketing audit and assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Audience research and segmentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Competitive analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Goal setting and KPI development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Channel strategy and planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Budget allocation recommendations</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Donor Engagement */}
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-3">
              <div className="md:col-span-1 bg-muted p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                    <BarChart className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Donor Engagement</h2>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-muted-foreground mb-4">
                  Develop strategies to attract, engage, and retain donors. This service focuses on creating meaningful
                  connections with supporters and optimizing the donor journey to increase giving.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Donor journey mapping</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Fundraising campaign development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Donor communications strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Stewardship program development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Donor acquisition strategies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Retention and upgrade planning</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Digital Presence */}
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-3">
              <div className="md:col-span-1 bg-muted p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                    <Users className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Digital Presence</h2>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-muted-foreground mb-4">
                  Enhance your organization's online presence to reach more supporters, increase engagement, and drive
                  action. This service focuses on optimizing your digital channels for maximum impact.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Website audit and optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Social media strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Content marketing planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>SEO and visibility improvements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Email marketing strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Digital advertising guidance</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Brand Development */}
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-3">
              <div className="md:col-span-1 bg-muted p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                    <PenTool className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Brand Development</h2>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-muted-foreground mb-4">
                  Develop a strong, consistent brand that effectively communicates your mission and resonates with your
                  audience. This service helps you stand out in a crowded nonprofit landscape.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Brand positioning and strategy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Messaging framework development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Visual identity guidance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Brand voice and tone development</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Brand guidelines creation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Brand storytelling strategy</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Impact Measurement */}
          <Card className="overflow-hidden">
            <div className="md:grid md:grid-cols-3">
              <div className="md:col-span-1 bg-muted p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                    <LineChart className="h-10 w-10 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Impact Measurement</h2>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-muted-foreground mb-4">
                  Develop systems to measure, analyze, and communicate the impact of your marketing efforts. This
                  service helps you demonstrate ROI and make data-driven decisions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>KPI development and tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Analytics setup and reporting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Impact storytelling frameworks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>ROI measurement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Performance dashboards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Continuous improvement planning</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Service Packages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Packages</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I offer flexible service packages to meet the needs of nonprofits at different stages and with varying
            budgets. All packages can be customized to your specific requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Essentials</CardTitle>
                <CardDescription>For nonprofits looking to establish a solid marketing foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Marketing audit and assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Basic strategy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Channel recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Implementation guidance</span>
                  </li>
                </ul>
                <p className="font-medium text-lg">Starting at $2,500</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full w-fit mb-2">
                  Most Popular
                </div>
                <CardTitle>Growth</CardTitle>
                <CardDescription>For nonprofits ready to expand their marketing impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive marketing strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Audience research and segmentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Channel strategy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Content planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Quarterly check-ins</span>
                  </li>
                </ul>
                <p className="font-medium text-lg">Starting at $5,000</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transformation</CardTitle>
                <CardDescription>
                  For established nonprofits seeking comprehensive marketing transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>All Growth package features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Brand development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Donor journey optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Impact measurement framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Monthly strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <p className="font-medium text-lg">Starting at $10,000</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Process</h2>
          <div className="relative border-l-2 border-secondary/30 pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute -left-12 top-0 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We begin with a thorough assessment of your current marketing efforts, organizational goals, audience,
                and competitive landscape. This phase helps me understand your unique challenges and opportunities.
              </p>
            </div>

            <div className="mb-12 relative">
              <div className="absolute -left-12 top-0 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              <p className="text-muted-foreground">
                Based on insights from the discovery phase, I develop a customized marketing strategy aligned with your
                mission and goals. This includes channel selection, messaging frameworks, and tactical recommendations.
              </p>
            </div>

            <div className="mb-12 relative">
              <div className="absolute -left-12 top-0 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation Planning</h3>
              <p className="text-muted-foreground">
                I create a detailed implementation plan with timelines, resource requirements, and responsibilities.
                This ensures you have a clear roadmap for executing the strategy effectively.
              </p>
            </div>

            <div className="mb-12 relative">
              <div className="absolute -left-12 top-0 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Execution Support</h3>
              <p className="text-muted-foreground">
                Depending on your needs, I can provide varying levels of support during implementation—from guidance and
                coaching to hands-on assistance with specific tactics.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-12 top-0 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <h3 className="text-xl font-bold mb-2">Measurement and Refinement</h3>
              <p className="text-muted-foreground">
                We track performance against established KPIs, analyze results, and make data-driven refinements to
                continuously improve your marketing effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on scope and complexity. A basic marketing strategy might take 4-6 weeks,
                while more comprehensive engagements can span 3-6 months. I'll provide a detailed timeline during our
                initial consultation.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Do you work with small nonprofits?</h3>
              <p className="text-muted-foreground">
                I work with nonprofits of all sizes and at various stages of development. My services can be scaled to
                accommodate different budgets and needs, and I offer special rates for grassroots organizations.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Can you help with implementation or just strategy?</h3>
              <p className="text-muted-foreground">
                I offer both strategic planning and implementation support. Some clients prefer to have me develop the
                strategy while their team handles implementation, while others benefit from ongoing support and guidance
                during execution.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How do you measure success?</h3>
              <p className="text-muted-foreground">
                Success metrics are established at the beginning of each engagement based on your organization's goals.
                These might include increased donations, improved engagement rates, greater brand awareness, or other
                relevant KPIs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t pt-8 mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Nonprofit's Marketing?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help your organization increase visibility, engage supporters, and amplify your
            impact.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
