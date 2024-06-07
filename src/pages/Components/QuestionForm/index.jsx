import './style.css';
import { Header } from '../Menu/menu';
import { Footer } from '../Footer';

export const QuestionForm = () => {
  return (
    <div className="main">
      <Header />
      <div className="uvod">
        <h1>Nerozhodná veverka</h1>
      </div>
      <div className="question-form">
        <h3>tady bude otázka</h3>
        <div class="cardcontainer">
          <div class="container">
            <div class="card">
              <div class="front">front</div>
              <div class="back">back</div>
            </div>
          </div>
          <div class="container">
            <div class="card">
              <div class="front">front</div>
              <div class="back">back</div>
            </div>
          </div>
          <div class="container">
            <div class="card">
              <div class="front">front</div>
              <div class="back">back</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bottom-line">
        <Footer />
      </div>
    </div>
  );
};
