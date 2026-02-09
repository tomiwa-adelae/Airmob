import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { proposalSchema } from "@/lib/validations/proposal";
import {
  sendProposalConfirmationEmail,
  sendProposalAdminNotificationEmail,
} from "@/lib/email";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = proposalSchema.parse(json);

    // 1. Save to Database
    const proposal = await prisma.technicalProposal.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        businessLine: body.businessLine,
        details: body.details,
      },
    });

    // 2. Dispatch Emails
    try {
      await Promise.all([
        sendProposalConfirmationEmail({
          fullName: body.fullName,
          email: body.email,
          businessLine: body.businessLine,
          details: body.details,
        }),
        sendProposalAdminNotificationEmail({
          id: proposal.id,
          fullName: body.fullName,
          email: body.email,
          businessLine: body.businessLine,
          details: body.details,
          createdAt: proposal.createdAt,
        }),
      ]);
    } catch (emailError) {
      // Log the error but don't fail the API response
      console.error("PROPOSAL_EMAIL_ERROR:", emailError);
    }

    return NextResponse.json(proposal, { status: 201 });
  } catch (error: any) {
    console.error("PROPOSAL_POST_ERROR:", error);

    // Zod validation error handling
    if (error.name === "ZodError") {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Internal Server Error. Please contact support." },
      { status: 500 },
    );
  }
}
