import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_PUBLIC_KEY!,
  apiSecret: process.env.MAILJET_API_PRIVATE_KEY!,
});

// Airmob Specific Subject Categories
const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  technical: "Technical Support & Engineering",
  procurement: "Procurement & Supply Chain",
  partnership: "Strategic Partnership",
  hse: "HSE & Quality Assurance",
  careers: "Career Opportunity",
};

// If you decide to use a waitlist for a specific product launch (e.g. new lubricant line)
const userTypeLabels: Record<string, string> = {
  operator: "Field Operator",
  engineer: "Maintenance Engineer",
  procurement: "Procurement Officer",
  contractor: "Independent Contractor",
};

const AIRMOB_EMERALD = "#10b981"; // The Emerald-500 from your UI
const AIRMOB_DARK = "#040d0a"; // The dark background from your footer

export async function sendContactConfirmationEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const firstName = data.name.split(" ")[0];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background-color: ${AIRMOB_DARK}; padding: 40px; text-align: center; border-bottom: 4px solid ${AIRMOB_EMERALD}; }
        .content { padding: 40px; font-family: 'Segoe UI', Arial, sans-serif; color: #333333; }
        .footer { background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0; }
        .highlight-box { background-color: #f0fdf4; border-left: 4px solid ${AIRMOB_EMERALD}; padding: 20px; margin: 25px 0; }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f1f5f9;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <div class="container">
              <div class="header">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 3px;">AIRMOB</h1>
                <p style="color: ${AIRMOB_EMERALD}; margin: 10px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Excellence in Industrial Support</p>
              </div>

              <div class="content">
                <h2 style="color: ${AIRMOB_DARK}; margin: 0 0 20px; font-size: 22px;">Inquiry Received</h2>
                <p style="line-height: 1.6;">Dear ${firstName},</p>
                <p style="line-height: 1.6;">Thank you for contacting AIRMOB NIGERIA LIMITED. We have received your inquiry regarding <strong>${subjectLabel}</strong>.</p>
                
                <div class="highlight-box">
                  <p style="font-size: 14px; margin: 0 0 10px; color: #64748b; font-weight: 600;">Your Message Summary:</p>
                  <p style="margin: 0; font-style: italic;">"${data.message}"</p>
                </div>

                <p style="line-height: 1.6;">One of our specialized consultants is reviewing your request and will contact you within 24 business hours to discuss how we can support your operations.</p>
              </div>

              <div class="footer">
                <p style="color: #64748b; font-size: 13px; margin: 0 0 10px;">
                  &copy; ${new Date().getFullYear()} AIRMOB NIGERIA LIMITED.
                </p>
                <p style="color: #94a3b8; font-size: 11px; margin: 0; text-transform: uppercase;">
                  Lagos • Port Harcourt • Warri
                </p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: "AIRMOB Support",
          },
          To: [{ Email: data.email, Name: data.name }],
          Subject: `AIRMOB: Acknowledgement of Inquiry [${subjectLabel}]`,
          HTMLPart: htmlContent,
          TextPart: `Thank you for contacting AIRMOB. We have received your message regarding ${subjectLabel} and will respond shortly.`,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Confirmation Email Error:", error);
    return { success: false };
  }
}

export async function sendContactAdminNotificationEmail(data: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date;
}) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
      <div style="background-color: ${AIRMOB_EMERALD}; color: white; padding: 20px; text-align: center;">
        <h2>New Business Inquiry</h2>
      </div>
      <div style="padding: 20px; border: 1px solid #eee;">
        <p><strong>Ref ID:</strong> ${data.id}</p>
        <p><strong>Category:</strong> ${subjectLabel}</p>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Submitted:</strong> ${data.createdAt.toLocaleString()}</p>
        
        <h3>Message</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</div>
        
        <div style="margin-top: 25px;">
           <a href="mailto:${data.email}?subject=RE: AIRMOB Inquiry - ${subjectLabel}" 
              style="background-color: ${AIRMOB_DARK}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
              Reply to Client
           </a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: "AIRMOB Web Portal",
          },
          To: [
            { Email: process.env.ADMIN_EMAIL_ADDRESS!, Name: "AIRMOB Admin" },
          ],
          Subject: `[NEW INQUIRY] ${subjectLabel} from ${data.firstName} ${data.lastName}`,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Admin Notification Error:", error);
    return { success: false };
  }
}

// Technical Proposal Email Data Types
interface ProposalEmailData {
  fullName: string;
  email: string;
  businessLine: string;
  details: string;
}

interface ProposalAdminEmailData extends ProposalEmailData {
  id: string;
  createdAt: Date;
}

// 1. User Confirmation Email
export async function sendProposalConfirmationEmail(data: ProposalEmailData) {
  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background-color: ${AIRMOB_DARK}; padding: 30px; text-align: center; border-bottom: 4px solid ${AIRMOB_EMERALD};">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px;">AIRMOB TECHNICAL</h1>
      </div>
      <div style="padding: 40px; color: #334155;">
        <h2 style="color: ${AIRMOB_DARK};">Proposal Request Received</h2>
        <p>Hello ${data.fullName},</p>
        <p>Thank you for requesting a technical proposal for <strong>${data.businessLine}</strong>. Our engineering team has received your specifications.</p>
        
        <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid #e2e8f0;">
          <p style="margin: 0; font-size: 13px; color: #64748b; font-weight: bold; text-transform: uppercase;">Project Brief Received:</p>
          <p style="margin: 10px 0 0; line-height: 1.6; font-style: italic;">${data.details}</p>
        </div>

        <p><strong>Next Steps:</strong> Our technical department will conduct an initial feasibility review based on these details. You can expect a follow-up or a formal Request for Information (RFI) within 2-3 business days.</p>
        <p>Regards,<br>AIRMOB Engineering Team</p>
      </div>
    </div>
  `;

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL_ADDRESS!,
          Name: "AIRMOB Technical",
        },
        To: [{ Email: data.email, Name: data.fullName }],
        Subject: `Technical Proposal Request: ${data.businessLine}`,
        HTMLPart: htmlContent,
      },
    ],
  });
}

// 2. Admin Notification Email
export async function sendProposalAdminNotificationEmail(
  data: ProposalAdminEmailData,
) {
  const htmlContent = `
    <div style="font-family: sans-serif; color: #1e293b; padding: 20px; border: 2px solid ${AIRMOB_EMERALD}; border-radius: 12px;">
      <h2 style="color: ${AIRMOB_EMERALD}; border-bottom: 1px solid #eee; padding-bottom: 10px;">NEW TECHNICAL PROPOSAL</h2>
      <p><strong>Ref ID:</strong> ${data.id}</p>
      <p><strong>Business Line:</strong> ${data.businessLine}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      
      <table style="width: 100%; text-align: left;">
        <tr><th style="padding: 5px 0;">Lead Name:</th><td>${data.fullName}</td></tr>
        <tr><th style="padding: 5px 0;">Email:</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><th style="padding: 5px 0;">Date:</th><td>${data.createdAt.toLocaleString()}</td></tr>
      </table>

      <h3 style="margin-top: 30px;">Project Specifications:</h3>
      <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; white-space: pre-wrap; font-family: monospace;">${data.details}</div>
      
      <div style="margin-top: 30px; text-align: center;">
        <a href="mailto:${data.email}?subject=RE: Technical Proposal - ${data.businessLine}" 
           style="background-color: ${AIRMOB_DARK}; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">
           Contact Lead for Clarification
        </a>
      </div>
    </div>
  `;

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL_ADDRESS!,
          Name: "AIRMOB Web Alerts",
        },
        To: [
          {
            Email: process.env.ADMIN_EMAIL_ADDRESS!,
            Name: "AIRMOB Engineering",
          },
        ],
        Subject: `[ACTION REQUIRED] New Proposal Request: ${data.businessLine}`,
        HTMLPart: htmlContent,
      },
    ],
  });
}
