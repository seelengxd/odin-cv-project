function Work({ work }) {
  return (
    <div id="work">
      <div className="header">Work Experience</div>
      <div>
        {work.map((work, index) => (
          <div className="work" key={index}>
            <div>
              <p>
                <b>{work.role}</b> / {work.company}
              </p>
              <p> {work.date}</p>
            </div>
            <ul>
              {work.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
