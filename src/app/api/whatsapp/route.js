"use server";

import { Client, LocalAuth } from "whatsapp-web.js";
// Set the correct path to ffmpeg.exe
if (typeof window === "undefined") {
  const fluentFfmpeg = require("fluent-ffmpeg");
}
const allSessionsObject = {};

const client = new Client({
  puppeteer: {
    headless: false,
  },
  authStrategy: new LocalAuth({
    clientId: "YOUR_CLIENT_ID",
  }),
});

client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();
