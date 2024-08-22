// app/about/page.tsx
import { Button } from "@/components/ui/button";
import { BrandedButton } from "@/components/ui/brandedButton";
export default function ButtonsPage() {
    return (
        <>
                <div className="w-full max-w-2xl p-8 border border-gray-200 rounded-lg">
          <div className="flex flex-wrap space-x-2 space-y-2">
            {" "}
            {/* Flexbox with wrapping and spacing */}
            <div className="inline-flex m-2">
              <Button>Primary</Button>
            </div>
            <div className="inline-flex m-2">
              <Button variant="secondary">Secondary</Button>
            </div>
            <div className="inline-flex m-2">
              <Button variant="filled">Filled</Button>
            </div>
            <div className="inline-flex m-2">
              <Button variant="accent">Accent</Button>
            </div>
            <div className="inline-flex m-2">
              <Button variant="destroy-outline">Destroy Outline</Button>
            </div>
            <div className="inline-flex m-2">
              <Button variant="destroy">Destroy</Button>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full max-w-2xl p-8 border border-gray-200 rounded-lg">
          <div className="flex flex-wrap space-x-2 space-y-2">
            {" "}
            {/* Flexbox with wrapping and spacing */}
            <div className="inline-flex m-2">
              <BrandedButton variant="facebook">
                Share on Facebook
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="google">
                Share on Google
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="android">
                Share on Android
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="apple">Share on Apple</BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="discord">
                Share on Discord
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="paypal">
                Share on PayPal
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="stripe">
                Share on Stripe
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="twitter">
                Share on Twitter
              </BrandedButton>
            </div>
            <div className="inline-flex m-2">
              <BrandedButton variant="amazon">
                Share on Amazon
              </BrandedButton>
            </div>

          </div>
        </div></>
    )
  }
  