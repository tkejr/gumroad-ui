import Image from "next/image";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-2xl space-y-4 p-8 border border-gray-200 rounded-lg">
        <Alert variant="success">
          <AlertDescription>Write your message here.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertDescription>Write your message here.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertDescription>Write your message here.</AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertDescription>Write your message here.</AlertDescription>
        </Alert>

      </main>
    </div>
  );
}
