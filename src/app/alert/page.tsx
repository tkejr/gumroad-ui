// app/about/page.tsx
"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
export default function AlertsPage() {
  return (
    <>
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
    </>
  );
}
