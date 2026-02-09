"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  IconFileDownload,
  IconMessageDots,
  IconArrowRight,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { ProposalFormValues, proposalSchema } from "@/lib/validations/proposal";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";
import { Loader } from "@/components/Loader";
import { ComingSoon } from "@/components/ComingSoon";

export const TechnicalResources = () => {
  const [pending, startTransition] = useTransition();
  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      fullName: "",
      email: "",
      businessLine: "",
      details: "",
    },
  });

  async function onSubmit(data: ProposalFormValues) {
    startTransition(async () => {
      const response = await fetch("/api/proposals", {
        method: "POST",
        body: JSON.stringify(data),
      });

      console.log(response);

      if (response.ok) {
        toast.success("Proposal submitted to the engineering team.");
        form.reset();
      }
    });
  }

  return (
    <section id="technical-proposal" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Document Downloads */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                Technical Resources
              </h3>
              <p className="text-muted-foreground">
                Access our technical specifications, safety data sheets, and
                corporate capability statements for your project planning.
              </p>
            </div>

            <div className="relative grid gap-2.5">
              <ComingSoon />
              {[
                { name: "Industrial Lubricant TDS", size: "1.2 MB" },
                { name: "Upstream Support Capability", size: "2.4 MB" },
                { name: "Safety & Compliance Manual", size: "3.1 MB" },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 md:p-5 rounded-2xl border border-green-100 hover:border-green-200 hover:bg-green-50/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                      <IconFileDownload size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-base text-slate-900">
                        {doc.name}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">
                        PDF • {doc.size}
                      </p>
                    </div>
                  </div>
                  <IconArrowRight
                    size={20}
                    className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Inquiry Form */}
          <div className="bg-[#040d0a] rounded-2xl p-6 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <IconMessageDots className="text-green-500 size-6 md:size-10" />
                <h3 className="text-lg md:text-2xl font-bold">
                  Request a Technical Proposal
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                Looking for a specific solution? Our technical team will analyze
                your requirements and provide a detailed operational framework.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-400/80">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Samuel Adeleke "
                            {...field}
                            className="bg-white/5 border-white/10 focus-visible:ring-emerald-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-400/80">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="samuel@example.com"
                            {...field}
                            className="bg-white/5 border-white/10 focus-visible:ring-emerald-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessLine"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-400/80">
                          Select Business Line
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 focus-visible:ring-emerald-500">
                              <SelectValue placeholder="Select business line" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Exploration Support">
                              Exploration Support
                            </SelectItem>
                            <SelectItem value="Lubricant Production">
                              Lubricant Production
                            </SelectItem>
                            <SelectItem value="Industrial Solutions">
                              Industrial Solutions
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-400/80">
                          Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="bg-white/5 border-white/10 focus-visible:ring-emerald-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={form.formState.isSubmitting || pending}
                    className="w-full"
                  >
                    {" "}
                    {form.formState.isSubmitting || pending ? (
                      <Loader text="Sending..." />
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
