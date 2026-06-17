import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin } from "@/components/site/BrandIcons";
import { SectionHeader } from "./Section";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-28"
    >
      <SectionHeader
        eyebrow="Get in Touch"
        title={
          <>
            Let's turn data into{" "}
            <span className="text-gradient">decisions</span>.
          </>
        }
        sub="Open to entry-level, graduate, and trainee opportunities in Data Analytics, Business Intelligence, and Reporting .Open to Relocation and Remote Opportunities."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid items-stretch gap-6 lg:grid-cols-[1.4fr_0.8fr]"
      >
        {/* FORM */}
        <form
          action="https://formspree.io/f/mjgdzdlr"
          method="POST"
          className="rounded-3xl glass-strong p-6 md:p-8 glow-ring h-full"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Name"
              name="name"
              placeholder="Your name"
            />

            <Field
              label="Email"
              name="email"
              placeholder="you@company.com"
              type="email"
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            placeholder="Job Opportunity / Collaboration"
            className="mt-4"
          />

          <div className="mt-4">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about the role, opportunity, or project..."
              className="mt-1.5 w-full resize-none rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:bg-white/10"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>

        {/* CONTACT CARDS */}
        <div className="flex h-full flex-col justify-between gap-4">
          <a
            href="mailto:naazmulla9195@gmail.com"
            className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:bg-white/5 hover:scale-[1.01]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
              <Mail className="h-5 w-5" />
            </div>

            <div>
              <div className="text-xs text-muted-foreground">
                Email
              </div>

              <div className="text-sm font-medium break-all">
                naazmulla9195@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/naaz-m-1a764b388"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:bg-white/5 hover:scale-[1.01]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
              <Linkedin className="h-5 w-5" />
            </div>

            <div>
              <div className="text-xs text-muted-foreground">
                LinkedIn
              </div>

              <div className="text-sm font-medium break-all">
                linkedin.com/in/naaz-m-1a764b388
              </div>
            </div>
          </a>

          <a
            href="https://github.com/naaz-719"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all duration-300 hover:bg-white/5 hover:scale-[1.01]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30">
              <Github className="h-5 w-5" />
            </div>

            <div>
              <div className="text-xs text-muted-foreground">
                GitHub
              </div>

              <div className="text-sm font-medium break-all">
                github.com/naaz-719
              </div>
            </div>
          </a>

          <div className="rounded-2xl glass p-4">
            <div className="text-xs text-muted-foreground">
              Based in
            </div>

            <div className="mt-1 text-sm font-medium">
              Oman
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="mt-20 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Naaz Mulla · Turning data into insights, decisions, and business impact.
      </footer>
    </section>
  );
}

function Field({
  label,
  className = "",
  ...rest
}: {
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>

      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:bg-white/10"
      />
    </div>
  );
}