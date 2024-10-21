"use client";

import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Security() {
  useEffect(() => {
    const onScanSuccess = (decodedText: any, decodedResult: any) => {
      // Handle the scanned code as you like
      console.log(`Code matched: ${decodedText}`, decodedResult);
    };

    const onScanFailure = (error: any) => {
      // Handle scan failure, usually better to ignore and keep scanning.
      console.warn(`Code scan error: ${error}`);
    };

    // Create the QR code scanner instance
    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    // Render the scanner with success and failure callbacks
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    // Cleanup function to stop the scanner when component is unmounted
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear QR code scanner:", error);
      });
    };
  }, []);

  return (
    <main>
      <div>
        <h1 className="font-extrabold text-3xl pt-7 text-left">Security</h1>
      </div>
      <div>
        <p className="pb-1">
          Effortlessly view and reserve available facilities with a seamless
          booking experience.
        </p>
      </div>
      <div dir="ltr" className="px-6 mt-4 w-96 mb-28">
        {/* QR Code Scanner Placeholder */}
        <div id="reader" className="w-80 pb-9 " ></div>
      </div>

    </main>
  );
}
