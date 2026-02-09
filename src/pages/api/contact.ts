import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });
    const { cfToken,formType, ...formData } = req.body;
  try {

    if (formType !== "subscription") {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: cfToken,
        }),
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return res.status(400).json({ message: "Security check failed." });
      }
    }


    const googleUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!googleUrl) return res.status(500).json({ message: "Server configuration missing" });
    
    const response = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, 
      body: JSON.stringify({ formType, ...formData }),
      redirect: 'follow' 
    });

    const responseText = await response.text();

    try {
      const data = JSON.parse(responseText);
      return res.status(200).json(data);
    } catch (err) {
      console.error("Received HTML instead of JSON. Check script permissions.");
      return res.status(500).json({ error: "Google Script permission error (HTML received)." });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}