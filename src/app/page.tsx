"use client";
import React, { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(true);
  const [showWarningAlert, setShowWarningAlert] = useState(true);
  const [showInfoAlert, setShowInfoAlert] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-2xl space-y-4 p-8 border border-gray-200 rounded-lg">
      <Alert iconName="info-circle-fill" >
          <AlertDescription>
            Default alert. This is a default alert.
          </AlertDescription>
        </Alert>
        {showSuccessAlert && (
          <Alert variant="success" onClose={() => setShowSuccessAlert(false)}>
            <AlertDescription>
              Success! Your operation was successful.
            </AlertDescription>
          </Alert>
        )}
        {showDestructiveAlert && (
          <Alert
            variant="destructive"
            onClose={() => setShowDestructiveAlert(false)}
          >
            <AlertDescription>Error! Something went wrong.</AlertDescription>
          </Alert>
        )}
        {showWarningAlert && (
          <Alert variant="warning" onClose={() => setShowWarningAlert(false)}>
            <AlertDescription>
              Warning! Please check your inputs.
            </AlertDescription>
          </Alert>
        )}
        {showInfoAlert && (
          <Alert variant="info" onClose={() => setShowInfoAlert(false)}>
            <AlertDescription>
              Info! Here is some important information.
            </AlertDescription>
          </Alert>
        )}
      </main>
    </div>
  );
}
