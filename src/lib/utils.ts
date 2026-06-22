import type { Project } from "../types";

export const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

export const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};
