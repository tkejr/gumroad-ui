"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { BrandedButton } from "@/components/ui/brandedButton";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex space-x-8">
        {" "}
        {/* Add flexbox and space between themes */}
        {/* Left Theme */}
        <div className="w-full max-w-2xl space-y-4 p-8 border border-gray-200 rounded-lg">
          <Alert iconName="info-circle-fill">
            <AlertDescription>
              Default alert. This is a default alert.
            </AlertDescription>
          </Alert>

          <Alert variant="success" onClose={() => {}}>
            <AlertDescription>
              Success! Your operation was successful.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive" onClose={() => {}}>
            <AlertDescription>Error! Something went wrong.</AlertDescription>
          </Alert>

          <Alert variant="warning" onClose={() => {}}>
            <AlertDescription>
              Warning! Please check your inputs.
            </AlertDescription>
          </Alert>

          <Alert variant="info" onClose={() => {}}>
            <AlertDescription>
              Info! Here is some important information.
            </AlertDescription>
          </Alert>
        </div>
        {/* Right Theme */}
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
        </div>
      </main>
    </div>
  );
}
