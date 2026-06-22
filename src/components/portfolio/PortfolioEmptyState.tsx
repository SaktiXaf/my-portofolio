import { Inbox } from "lucide-react";
import { Card } from "../ui/Card";

interface PortfolioEmptyStateProps {
  title: string;
  message?: string;
}

export function PortfolioEmptyState({ title, message }: PortfolioEmptyStateProps) {
  return (
    <Card className="empty-state">
      <Inbox size={28} />
      <h3>{title}</h3>
      {message ? <p>{message}</p> : null}
    </Card>
  );
}
