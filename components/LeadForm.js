// components/LeadForm.js
export default function LeadForm() {
  return (
    <form
      action="https://formspree.io/f/mpqaobyo"
      method="POST"
    >
      <input type="text" name="name" placeholder="Full name" required />
      <input type="email" name="email" placeholder="Email address" required />
      <select name="application">
        <option>Study Permit</option>
        <option>Express Entry</option>
      </select>

      {/* Hidden redirect to the PDF in /public */}
      <input type="hidden" name="_redirect" value="/checklist.pdf" />
      <button type="submit">Send My Checklist</button>
    </form>
  );
}
