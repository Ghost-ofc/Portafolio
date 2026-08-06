"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-md"
      noValidate
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="from_name">{t("name")}</FieldLabel>
          <Input
            id="from_name"
            name="from_name"
            placeholder={t("namePlaceholder")}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="from_email">{t("email")}</FieldLabel>
          <Input
            id="from_email"
            name="from_email"
            type="email"
            placeholder={t("emailPlaceholder")}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="message">{t("message")}</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder={t("messagePlaceholder")}
            rows={4}
            required
          />
        </Field>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("sending") : t("send")}
        </Button>
        {status === "success" && (
          <FieldError className="text-primary">{t("success")}</FieldError>
        )}
        {status === "error" && <FieldError>{t("error")}</FieldError>}
      </FieldGroup>
    </form>
  );
}
