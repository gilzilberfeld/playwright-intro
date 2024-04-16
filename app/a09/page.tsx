"use client";

import { useState } from "react";

export default function App1() {

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 9 - Frames</h1>
      <p className="m-3">In this app, an iframe contains App1 (a01).</p>
      <iframe src="/a01" width="400" height="600" title="The Frame" />
    </main>
  );
}
