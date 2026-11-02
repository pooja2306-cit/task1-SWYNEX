import { Link } from "react-router-dom";

const tickets = [
  { id: 1, title: "Cannot reset my password", description: "The reset link shows an error.", status: "OPEN", priority: "HIGH" },
  { id: 2, title: "Invoice not received", description: "I did not get my October invoice.", status: "IN_PROGRESS", priority: "MEDIUM" },
  { id: 3, title: "Update billing address", description: "Please change my billing address.", status: "RESOLVED", priority: "LOW" },
];

export default function MyTickets() {
  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">My Tickets</h2>
        <Link className="btn" to="/tickets/new">+ New Ticket</Link>
      </div>

      {tickets.map((t) => (
        <div className="card ticket-card" key={t.id}>
          <div>
            <h3><Link to={`/tickets/${t.id}`}>{t.title}</Link></h3>
            <p>{t.description}</p>
          </div>
          <div>
            <span className={`badge status-${t.status}`}>{t.status.replace("_", " ")}</span>
            <span className={`badge priority-${t.priority}`}>{t.priority}</span>
          </div>
        </div>
      ))}
    </div>
  );
}