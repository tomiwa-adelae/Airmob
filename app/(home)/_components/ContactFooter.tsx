"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { ADDRESS, PHONE_NUMBER } from "@/constants";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Send,
  Linkedin,
  Instagram,
} from "lucide-react";
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
import { Loader } from "@/components/Loader";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export const ContactFooter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // You can call your API route here
    alert("Message sent successfully!");
    form.reset();
  }

  return (
    <footer className="pt-16 lg:pt-24 pb-12 bg-[#040d0a] text-white overflow-hidden relative">
      {/* Background decoration - matching the Header & Innovation sections */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {/* Left: Contact Info & Brand */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Get In <span className="text-emerald-400">Touch.</span>
              </h2>
              <p className="text-gray-400 text-sm text-lg max-w-md leading-relaxed">
                Ready to partner with a leader in Nigeria's energy sector? Reach
                out to us today to discuss how we can power your next project.
              </p>
            </div>

            <div className="space-y-4">
              {/* Headquarters */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-all">
                  <MapPin className="text-emerald-400 size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-50 text-sm uppercase tracking-wider mb-0.5">
                    Headquarters
                  </h4>
                  <p className="text-gray-400 text-sm">{ADDRESS}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-all">
                  <IconPhone className="text-emerald-400 size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-50 text-sm uppercase tracking-wider mb-0.5">
                    Phone Number
                  </h4>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-gray-400 hover:text-emerald-500 hover:underline text-sm"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-white/5 border text-primary border-white/10 rounded-lg hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all duration-300"
                  >
                    <Icon className="size-5" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Right: The Modernized Form */}
          <div className="bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-2xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-emerald-400/80">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
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
                            placeholder="john@example.com"
                            {...field}
                            className="bg-white/5 border-white/10 focus-visible:ring-emerald-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-400/80">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+234..."
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-emerald-400/80">
                        Message
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
                  disabled={form.formState.isSubmitting}
                  className="w-full"
                >
                  {form.formState.isSubmitting ? (
                    <Loader text="Sending..." />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 tracking-wide">
          <p className="uppercase text-sm">
            © {new Date().getFullYear()} AIRMOB NIGERIA LIMITED.
          </p>
          <div className="flex gap-4 uppercase">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
