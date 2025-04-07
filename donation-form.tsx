"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonationForm() {
  const [donationAmount, setDonationAmount] = useState<string>("25")
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = donationAmount === "custom" ? customAmount : donationAmount
    alert(`Thank you for your donation of $${amount}!`)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="one-time">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="one-time">One-time</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="one-time">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Select donation amount</Label>
                <RadioGroup
                  defaultValue="25"
                  value={donationAmount}
                  onValueChange={setDonationAmount}
                  className="grid grid-cols-3 gap-2"
                >
                  <div>
                    <RadioGroupItem value="25" id="amount-25" className="sr-only" />
                    <Label
                      htmlFor="amount-25"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "25" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $25
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                    <Label
                      htmlFor="amount-50"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "50" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $50
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                    <Label
                      htmlFor="amount-100"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "100" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $100
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="250" id="amount-250" className="sr-only" />
                    <Label
                      htmlFor="amount-250"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "250" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $250
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                    <Label
                      htmlFor="amount-500"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "500" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $500
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                    <Label
                      htmlFor="amount-custom"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "custom" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {donationAmount === "custom" && (
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Enter custom amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      className="pl-7"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="1"
                      required={donationAmount === "custom"}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>

              <Button type="submit" className="w-full">
                Donate Now
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your donation is tax-deductible to the extent allowed by law.
              </p>
            </form>
          </TabsContent>
          <TabsContent value="monthly">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Select monthly donation amount</Label>
                <RadioGroup
                  defaultValue="25"
                  value={donationAmount}
                  onValueChange={setDonationAmount}
                  className="grid grid-cols-3 gap-2"
                >
                  <div>
                    <RadioGroupItem value="10" id="monthly-10" className="sr-only" />
                    <Label
                      htmlFor="monthly-10"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "10" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $10
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="25" id="monthly-25" className="sr-only" />
                    <Label
                      htmlFor="monthly-25"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "25" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $25
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="50" id="monthly-50" className="sr-only" />
                    <Label
                      htmlFor="monthly-50"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "50" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $50
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="100" id="monthly-100" className="sr-only" />
                    <Label
                      htmlFor="monthly-100"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "100" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $100
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="200" id="monthly-200" className="sr-only" />
                    <Label
                      htmlFor="monthly-200"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "200" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      $200
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="custom" id="monthly-custom" className="sr-only" />
                    <Label
                      htmlFor="monthly-custom"
                      className={`flex h-12 items-center justify-center rounded-md border border-primary text-sm font-medium ${
                        donationAmount === "custom" ? "bg-primary text-primary-foreground" : ""
                      } cursor-pointer`}
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {donationAmount === "custom" && (
                <div className="space-y-2">
                  <Label htmlFor="monthly-custom-amount">Enter custom amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                    <Input
                      id="monthly-custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      className="pl-7"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="1"
                      required={donationAmount === "custom"}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="monthly-name">Name</Label>
                <Input id="monthly-name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthly-email">Email</Label>
                <Input id="monthly-email" type="email" placeholder="Your email" required />
              </div>

              <Button type="submit" className="w-full">
                Become a Monthly Donor
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Your monthly donation will be processed automatically and can be canceled at any time.
              </p>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
