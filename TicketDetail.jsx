import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const tickets = {
  1: { title: "Cannot reset my password", description: "The reset link shows an error.", status: "OPEN", priority: "HIGH", assignedTo: "Unassigned" },
  2: { title: "Invoice not received", description: "I did not get my October invoice.", status: "IN_PROGRESS", priority: "MEDIUM", assignedTo: "Agent Meena" },
  3: { title: "Update billing address", description: "Please change my billing address.", status: "RESOLVED", priority: "LOW", assignedTo: "Agent Meena" },
};

export default function TicketDetail() {
  const { id } = useParams();
  const ticket = tickets[id];

  const [comments, setComments] = useState([
    { author: "Asha", body: "The link says it has expired." },
    { author: "Agent Meena", body: "Thanks, looking into it now." },
  ]);
  const [reply, setReply] = useState("");

  if (!ticket) {
    return (
      <div className="card">
        <p>Ticket not found.</p>
        <Link to="/tickets">Back to my tickets</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    setComments([...comments, { author: "You", body: reply }]);
    setReply("");
  };

  return (
    <div>
      <p><Link to="/tickets">&larr; Back to tickets</Link></p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>#{id} {ticket.title}</h2>
        <p>{ticket.description}</p>
        <span className={`badge status-${ticket.status}`}>{ticket.status.replace("_", " ")}</span>
        <span className={`badge priority-${ticket.priority}`}>{ticket.priority}</span>
        <p className="meta">Assigned to: {ticket.assignedTo}</p>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Comments</h3>
        {comments.map((c, i) => (
          <div className="comment" key={i}>
            <strong>{c.author}</strong>
            <p>{c.body}</p>
          </div>
        ))}

        <form className="form" onSubmit={handleSubmit} style={{ marginTop: 16 }}>
          <textarea rows="3" placeholder="Write a reply..." value={reply}
            onChange={(e) => setReply(e.target.value)} />
          <div><button className="btn" type="submit">Send reply</button></div>
        </form>
      </div>
    </div>
  );
}