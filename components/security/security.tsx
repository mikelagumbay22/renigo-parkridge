"use client";

import { SetStateAction, useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Security() {
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    const onScanSuccess = (decodedText: SetStateAction<string>, decodedResult: any) => {
      // Update state with the scanned data
      setScannedData(decodedText);
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

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!scannedData) {
      alert("No data to upload. Please scan a QR code first.");
      return;
    }

    try {
      // Perform the data upload (e.g., sending to a backend server)
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: scannedData }),
      });

      if (response.ok) {
        alert("Data uploaded successfully!");
        setScannedData(""); // Clear the input after successful upload
      } else {
        alert("Failed to upload data.");
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("An error occurred while uploading data.");
    }
  };

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
        <div id="reader" className="w-80 pb-9"></div>
      </div>
      <div className="px-6">
        {/* Input and Submit Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={scannedData}
            onChange={(e) => setScannedData(e.target.value)}
            placeholder="Scanned QR Code Data"
            className="border p-2 mb-28"
            readOnly
          />

        </form>
      </div>
    </main>
  );
}
