function Particulars({ particulars }) {
  const { name, email, phone, github } = particulars;
  return (
    <div id="particulars">
      <h1>{name}</h1>
      <p>
        {email} | {phone} | github.com/{github}{" "}
      </p>
    </div>
  );
}

export default Particulars;
