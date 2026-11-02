import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTitle("");
    setDescription("");
    setPriority("MEDIUM");
  };

  return (
    <div className="card auth-card" style={{ maxWidth: 560 }}>
      <h2>Create a new ticket</h2>
      {success && (
        <div className="alert alert-success">
          Ticket submitted successfully! <Link to="/tickets">View my tickets</Link>
        </div>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" placeholder="Short summary of the issue" value={title}
          onChange={(e) => setTitle(e.target.value)} required />
        <label>Description</label>
        <textarea rows="5" placeholder="Describe your issue in detail" value={description}
          onChange={(e) => setDescription(e.target.value)} required />
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <button className="btn" type="submit">Submit ticket</button>
      </form>
    </div>
  );
}