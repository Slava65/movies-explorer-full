function AboutProject() {
  return (
    <section className="aboutproject">
      <h3 className="aboutproject__title">О проекте</h3>
      <hr className="aboutproject__line"></hr>
      <div className="aboutproject__description">
        <div className="aboutproject__parts">
            <h4 className="aboutproject__description-title">Дипломный проект включал 5 этапов</h4>
            <p className="aboutproject__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutproject__parts">
            <h4 className="aboutproject__description-title">На выполнение диплома ушло 5 недель</h4>
            <p className="aboutproject__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutproject__diagramm">
        <div className="aboutproject__diagramm-backend">
            <p className="aboutproject__diagramm-backend-duration">1 неделя</p>
            <p className="aboutproject__diagramm-backend-lable">Back-end</p>
        </div>
        <div className="aboutproject__diagramm-frontend">
            <p className="aboutproject__diagramm-frontend-duration">4 недели</p>
            <p className="aboutproject__diagramm-frontend-lable">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
