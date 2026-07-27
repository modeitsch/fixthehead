// ---------------------------------------------------------------------------
// EDIT THESE when your accounts are ready. Leave any value as "" to keep
// showing the "coming soon" fallback for that piece.
// ---------------------------------------------------------------------------
export const CONFIG = {
  // Once you create a Calendly (or Cal.com) account, paste your scheduling
  // link here, e.g. "https://calendly.com/your-name/one-on-one-session"
  CALENDLY_URL: "",

  // Once you create a Stripe account, create a Payment Link for the session
  // price and paste it here, e.g. "https://buy.stripe.com/xxxxxxxx"
  STRIPE_PAYMENT_LINK: "",

  // Zelle is usually tied to your bank's email/phone - fill in what clients
  // should send Zelle payments to.
  ZELLE_RECIPIENT: "", // e.g. "you@example.com" or "(555) 123-4567"

  // Fallback contact info, used until the calendar/payment links exist.
  CONTACT_EMAIL: "", // e.g. "hello@fixthehead.com"
  CONTACT_PHONE: "", // e.g. "(555) 123-4567"
};
