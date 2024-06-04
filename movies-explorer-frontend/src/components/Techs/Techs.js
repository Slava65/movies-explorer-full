function Techs() {
  return (
    <div className="techs">
      <h3 className="techs__title">Технологии</h3>
      <hr className="techs__line"></hr>
      <h4 className="techs__subtitle">7 технологий</h4>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li>
          <div className="techs__tech"><p>HTML</p></div>
        </li>
        <li>
          <div className="techs__tech"><p>CSS</p></div>
        </li>
        <li>
          <div className="techs__tech"><p>JS</p></div>
        </li>
        <li>
          <div className="techs__tech"><p>React</p></div>
        </li>
        <li>
          <div className="techs__tech"><p>Git</p></div>
        </li>
        <li>
          <div className="techs__tech"><p>Express.js</p></div>
        </li>
        <li>
          <div className="techs__tech"><p>mongoDB</p></div>
        </li>
      </ul>
    </div>
  );
}

export default Techs;
