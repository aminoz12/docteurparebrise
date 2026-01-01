export type ReservationPayload = {
  service: string;
  date: string; // yyyy-mm-dd
  time: string; // HH:mm
  location: "atelier" | "domicile";
  customerName?: string;
  customerPhone?: string;
  notes?: string;
};

const CALENDAR_TIMEZONE =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_TIMEZONE ?? "Europe/Paris";

/**
 * Build a Google Calendar "TEMPLATE" URL that opens a pre-filled event
 * in the user's browser. This works fully client-side without a backend.
 */
export function createCalendarEventUrl(payload: ReservationPayload): string {
  const { service, date, time, location, customerName, customerPhone, notes } =
    payload;

  const start = new Date(`${date}T${time}:00`);
  const end = new Date(start.getTime() + 45 * 60 * 1000); // +45 minutes by default

  const formatDate = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z";

  const text = `Rendez-vous ${service}`;

  const detailsLines = [
    `Service : ${service}`,
    `Lieu : ${location === "atelier" ? "Atelier" : "À domicile"}`,
    customerName ? `Client : ${customerName}` : null,
    customerPhone ? `Téléphone : ${customerPhone}` : null,
    notes ? `Notes : ${notes}` : null,
  ].filter(Boolean);

  const details = detailsLines.join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text,
    dates: `${formatDate(start)}/${formatDate(end)}`,
    details,
    ctz: CALENDAR_TIMEZONE,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
