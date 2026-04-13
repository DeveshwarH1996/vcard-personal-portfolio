export default function Publications() {
  return (
    <>
      <article className="publications active" data-page="publications">

        <header>
          <h2 className="h2 article-title">Publications</h2>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Publications</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">RinneFormer - Transformer-based Real-world Cooperative Perception Algorithm</h4>
              <span>2026 (Accepted)</span>
              <p className="timeline-text">
                Intelligent Vehicles Symposium. Co-authored with Zhu, Y., Pulithaya, D. U., Yoon, M., Hollar, S.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Improvements to a Novel Autonomous Personal Rapid Transit (PRT) Prototype Vehicle</h4>
              <span>2024</span>
              <p className="timeline-text">
                International Design Engineering Technical Conferences and Computers and Information in Engineering Conference. Co-authored with Patil, N., Issa, J., Hollar, S.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">A Novel Approach for increased transaction security with Biometrics and One Time Password A complete implementation.</h4>
              <span>2024</span>
              <p className="timeline-text">
                International Journal for Advanced Intelligence Paradigms. Co-authored with Venkat, G., Vasudevan, S. K.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">What Does That Car Mean? The Influence of Vehicle Motion and Symbolic Patterns of LED Signals on Pedestrians' Interpretation of a Vehicle's Intent</h4>
              <span>2022</span>
              <p className="timeline-text">
                Proceedings of the Human Factors and Ergonomics Society Annual Meeting. Co-authored with Chu, Y., Hollar, S., Feng, F.
              </p>
            </li>

          </ol>

        </section>

      </article>

    </>
  );
}
