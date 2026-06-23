import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "../../lib/validations";
import { cx } from "../../lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";
const contactEmail = "saktiselginov4@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [expanded, setExpanded] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (values.website) {
      setStatus("success");
      reset();
      return;
    }

    setStatus("loading");

    try {
      const endpoint = `https://formsubmit.co/ajax/${contactEmail}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          _replyto: values.email,
          subject: values.subject,
          message: values.message,
          _subject: `Portfolio Contact: ${values.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed.");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={cx("contact-form card", expanded && "expanded")} onSubmit={handleSubmit(onSubmit)} noValidate>
      <button
        className="contact-form-toggle"
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <span>
          <Send size={18} />
          Contact Form
        </span>
        <ChevronDown size={20} />
      </button>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="contact-form-body">
        <div className="field-grid">
          <label>
            <span>Full Name</span>
            <input type="text" placeholder="Your name" autoComplete="name" {...register("name")} />
            {errors.name ? <small>{errors.name.message}</small> : null}
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="email@example.com" autoComplete="email" {...register("email")} />
            {errors.email ? <small>{errors.email.message}</small> : null}
          </label>
        </div>

        <label>
          <span>Subject</span>
          <input type="text" placeholder="Project collaboration" {...register("subject")} />
          {errors.subject ? <small>{errors.subject.message}</small> : null}
        </label>

        <label>
          <span>Message</span>
          <textarea rows={7} placeholder="Tell me about your idea..." {...register("message")} />
          {errors.message ? <small>{errors.message.message}</small> : null}
        </label>

        {status === "success" ? <p className="form-message success">Your message has been sent successfully.</p> : null}
        {status === "error" ? <p className="form-message error">Failed to send message. Please try again.</p> : null}

        <button className="button button-primary contact-form-submit" type="submit" disabled={status === "loading"}>
          <Send size={18} /> {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
