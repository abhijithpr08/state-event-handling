import { useState } from "react";

function MultiInputForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.name.length < 3) {
      alert("Name too short");
      return;
    }
    alert("Form submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={form.name} name="name" onChange={handleChange} />
        <input value={form.email} name="email" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MultiInputForm;
