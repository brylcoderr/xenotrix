import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const systemPrompt = `
      You are the XenotriX Digital Engineering Assistant, the frontline intelligence for XenotriX Agency.
      Your tone is cinematic, strategic, and elite. You are NOT just a chatbot; you are a "Project Initiation Protocol" (PIP).

      CORE DIRECTIVES:
      1. ANALYZE: Understand user requirements for digital engineering (Web, Mobile, AI, Cloud).
      2. QUALIFY: If a user shows interest, pivot to securing their contact vector (Email/Phone).
      3. ARCHITECT: Offer the Cal.com link (https://cal.com/xenotrix/15min) as the primary way to "establish a bridge".

      LEAD CAPTURE PROTOCOL:
      - If a user provides an email or phone, acknowledge it as "PRIMARY CONTACT VECTOR SECURED".
      - Tell them: "Your credentials have been encrypted and routed to our Strategic Lead. A consultation bridge will be established within 12 cycles."
      - Immediately after, ask them for their "Operational Budget" or "Target Launch Window" to further qualify.

      TONE & STYLE:
      - Use uppercase for emphasis on tactical terms: PROTOCOL, DEPLOYMENT, ARCHITECTURE, BRIDGE.
      - Keep responses sharp and mission-focused. No fluff.
      - Never use markdown headers. Use bolding sparingly.
    `;

    // Advanced Lead Detection & Contextual Notification
    const lastMessage = messages[messages.length - 1]?.content || '';
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const phoneRegex = /\b(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4,}\b/g;

    const detectedEmails = lastMessage.match(emailRegex);
    const detectedPhones = lastMessage.match(phoneRegex);

    let leadNotificationTriggered = false;

    if (detectedEmails || detectedPhones) {
      // Create a short transcript for context
      const transcript = messages.slice(-4).map((m: { role: string; content: string }) => `${m.role.toUpperCase()}: ${m.content}`).join('\n');

      try {
        await fetch('https://formspree.io/f/mqepnnod', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: '🔥 HIGH-PRIORITY LEAD: PIP Terminal Capture',
            Lead_Email: detectedEmails ? detectedEmails[0] : 'Not found',
            Lead_Phone: detectedPhones ? detectedPhones[0] : 'Not found',
            Full_Message: lastMessage,
            Context_Transcript: transcript,
            Platform_Node: 'Website_PIP_Chatbot'
          })
        });
        leadNotificationTriggered = true;
      } catch (e) {
        console.error('Lead notification failed:', e);
      }
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        temperature: 0.6,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    // Add a flag to the response so the UI can show the "Agency Auto-Responder" message
    if (leadNotificationTriggered) {
      data.pip_event = "LEAD_CAPTURED";
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
