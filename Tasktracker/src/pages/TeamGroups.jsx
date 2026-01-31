import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function TeamGroups() {
  const [groups, setGroups] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [members, setMembers] = useState([
    { name: "You", role: "Admin" }
  ]);

  const [memberName, setMemberName] = useState("");
  const [memberRole, setMemberRole] = useState("Developer");

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(stored);
  }, []);

  const addMember = () => {
    if (!memberName) return;
    setMembers([...members, { name: memberName, role: memberRole }]);
    setMemberName("");
    setMemberRole("Developer");
  };

  const createGroup = () => {
    if (!title || !startDate || !dueDate) return;

    const newGroup = {
      id: Date.now().toString(),
      title,
      description,
      startDate,
      dueDate,
      members,
      tasks: []
    };

    const updated = [...groups, newGroup];
    setGroups(updated);
    localStorage.setItem("groups", JSON.stringify(updated));

    // reset
    setTitle("");
    setDescription("");
    setStartDate("");
    setDueDate("");
    setMembers([{ name: "You", role: "Admin" }]);
  };

  const timeLeft = (date) => {
    const diff = new Date(date) - new Date();
    if (diff <= 0) return "Overdue";
    const hrs = Math.floor(diff / (1000 * 60 * 60));
    return `Due in ${hrs} hrs`;
  };

  return (
    <div className="page">
      <h2>Team Groups</h2>

      {/* CREATE GROUP */}
      <div className="card form-row">
        <input placeholder="Project Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />

        {/* MEMBER INPUT */}
        <input placeholder="Member Name" value={memberName} onChange={e => setMemberName(e.target.value)} />
        <select value={memberRole} onChange={e => setMemberRole(e.target.value)}>
          <option>Developer</option>
          <option>Tester</option>
          <option>Designer</option>
        </select>

        <button onClick={addMember}>Add Member</button>
        <button onClick={createGroup}>Create Group</button>
      </div>

      {/* MEMBER PREVIEW */}
      <div className="card">
        <strong>Members:</strong>
        {members.map((m, i) => (
          <span key={i}> {m.name} ({m.role}) </span>
        ))}
      </div>

      {/* GROUP LIST */}
      {groups.map(group => (
        <div className="card" key={group.id}>
          <h3>{group.title}</h3>
          <p>{group.description}</p>

          <div className="badges">
            <span>Members: {group.members.length}</span>
            <span>{timeLeft(group.dueDate)}</span>
          </div>

          <div>
            {group.members.map((m, i) => (
              <span key={i}>{m.name} ({m.role}) </span>
            ))}
          </div>

          <button onClick={() => navigate(`/groups/${group.id}`)}>
            Open Group Tasks →
          </button>
        </div>
      ))}
    </div>
  );
}