import { useState } from "react";
import { Link } from "react-router-dom";

const tickets = [
  { id: 1, title: "Cannot reset my password", status: "OPEN", priority: "HIGH", assignedTo: "Unassigned" },
  { id: 2, title: "Invoice not received", status: "IN_PROGRESS", priority: "MEDIUM", assignedTo: "Agent Meena" },
  { id: 3, title: "Update billing address", status: "RESOLVED", priority: "LOW", assignedTo: "Agent Meena" },
];

export default function AgentQueue() {
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const filtered = tickets.filter(
    (t) => (!status || t.status === status) && (!priority || t.priority === priority)
  );

  return (
    <div>
      <h2 className="page-title">Agent Queue</h2>

      <div className="filters">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All statuses</option>
          <option value="OPEN">Open</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="RESOLVED">Resolved</option>
          <option value="CLOSED">Closed</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">All priorities</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Title</th><th>Status</th><th>Priority</th><th>Assigned to</th></tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="4" className="empty">No tickets match these filters.</td></tr>
            ) : (
              filtered.map((t) => (
                <tr key={t.id}>
                  <td><Link to={`/tickets/${t.id}`}>{t.title}</Link></td>
                  <td><span className={`badge status-${t.status}`}>{t.status.replace("_", " ")}</span></td>
                  <td><span className={`badge priority-${t.priority}`}>{t.priority}</span></td>
                  <td>{t.assignedTo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}