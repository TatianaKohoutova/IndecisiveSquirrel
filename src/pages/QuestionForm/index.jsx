import './style.css';

export const QuestionForm = () => {
  return (
    <div className="main">
      <div className="uvod">
        <h1>Nerozhodná veverka</h1>
      </div>
      <div className="question-form">
        <h3>tady bude otázka</h3>
        <div class="cardcontainer">
          <div class="container">
            <div class="card">
              <div class="front">
                <p>front image</p>
              </div>
              <div class="back">
                <p>back description</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card">
              <div class="front">
                <p>front image</p>
              </div>
              <div class="back">
                <p>back description</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card">
              <div class="front">
                <p>front image</p>
              </div>
              <div class="back">
                <p>back description</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bottom-line"></div>
    </div>
  );
};
