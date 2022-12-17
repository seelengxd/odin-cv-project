function Input({ label, value, onChange }) {
  return (
    <div class="field">
      <label>{label}:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
