import { Bot, ClipboardList, Cloud, Handshake, Headset, LayoutDashboard, type LucideIcon } from "lucide-react";
import type { ServiceId } from "@/data/site-content";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  "custom-business-software": LayoutDashboard,
  "saas-application-development": Cloud,
  "ai-workflow-automation": Bot,
  "managed-it": Headset,
  "technical-project-support": ClipboardList,
  "business-enablement": Handshake,
};
