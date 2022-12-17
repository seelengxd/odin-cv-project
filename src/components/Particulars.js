function Particulars({ name, email, phone, github }) {
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
