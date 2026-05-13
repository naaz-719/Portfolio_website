import { motion } from "framer-motion";
import { Mail, Send, Linkedin as L0, Twitter as T0 } from "lucide-react";
import { SectionHeader } from "./Section";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-28">
      <SectionHeader eyebrow="Get in touch" title={<>Let's build <span className="text-gradient">something measurable</span>.</>}
        sub="Open to data analyst & data scientist roles across the GCC and remote." />

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="grid gap-6 lg:grid-cols-5">
        <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 rounded-3xl glass-strong p-6 glow-ring">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@company.com" type="email" />
          </div>
          <Field label="Subject" placeholder="Let's collaborate" className="mt-4" />
          <div className="mt-4">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea rows={5} placeholder="Tell me about the role or project…"
              className="mt-1.5 w-full resize-none rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none ring-0 focus:bg-white/10" />
          </div>
          <button type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] md:w-auto">
            Send message <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="lg:col-span-2 space-y-3">
          <a href="mailto:hello@aaliyah.dev" className="flex items-center gap-3 rounded-2xl glass p-4 hover:bg-white/5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30"><Mail className="h-4 w-4" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-medium">hello@aaliyah.dev</div>
            </div>
          </a>
          {[
            { i: Linkedin, l: "LinkedIn", v: "/in/aaliyah-data" },
            { i: Github, l: "GitHub", v: "@aaliyah-data" },
            { i: Twitter, l: "X / Twitter", v: "@aaliyah_data" },
          ].map((s) => (
            <a key={s.l} href="#" className="flex items-center gap-3 rounded-2xl glass p-4 hover:bg-white/5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30"><s.i className="h-4 w-4" /></div>
              <div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
                <div className="text-sm font-medium">{s.v}</div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aaliyah · Crafted with care, caffeine, and clean SQL.
      </footer>
    </section>
  );
}

function Field({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...rest}
        className="mt-1.5 w-full rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:bg-white/10" />
    </div>
  );
}
