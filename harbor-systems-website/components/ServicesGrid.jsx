import { Bot, ChartNoAxesCombined, DatabaseZap, FileSearch, Network, RefreshCw } from "lucide-react";

export const services = [
  {
    title: "Operational Intelligence Audit",
    text: "A structured map of workflows, bottlenecks, disconnected tools, reporting gaps, and a practical 90-day improvement roadmap.",
    icon: FileSearch
  },
  {
    title: "Workflow Automation",
    text: "Automated approvals, notifications, follow-ups, data entry, reporting flows, and task routing across existing tools.",
    icon: RefreshCw
  },
  {
    title: "AI Operational Assistants",
    text: "Private assistants that answer questions, summarize records, draft communications, and surface insight from organizational context.",
    icon: Bot
  },
  {
    title: "Connected Data Systems",
    text: "CRM, donation, attendance, accounting, form, spreadsheet, and email systems connected into a cleaner operating layer.",
    icon: DatabaseZap
  },
  {
    title: "Leadership Dashboards",
    text: "Role-aware visibility into attendance, donations, volunteers, finance, communications, alerts, and operational trends.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Integration Architecture",
    text: "Reliable API and no-code infrastructure using tools like Make, Zapier, Airtable, databases, and AI providers.",
    icon: Network
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, text, icon: Icon }) => (
        <div key={title} className="premium-card">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
            <Icon size={23} />
          </div>
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
        </div>
      ))}
    </div>
  );
}
