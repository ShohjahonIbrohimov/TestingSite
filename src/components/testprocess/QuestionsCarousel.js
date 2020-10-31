import React, { useContext, Component } from "react";
import Slider from "react-slick";
import Question from "./Question";
import TestButtons from "./TestButtons";

let i = 0;

class QuestionsCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }

  next() {
    console.log("pressed");
    this.slider.slickNext();
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      accessibility: false,
      verticalSwiping: true,
      draggable: false,
    };

    const goTo = (e) => {
      // const index = parseInt(e.target.innerHTML);

      if (this.props.mathQuestions[e].selected === "") {
        this.slider.slickGoTo(e);
      } else {
        return;
      }
    };

    return (
      <div className='questions-carusel'>
        <div className='dots'>
          {this.props.mathQuestions.map((q, index) => {
            console.log(q);
            return (
              <span className='dot' onClick={() => goTo(index)}>
                {index + 1}
              </span>
            );
          })}
        </div>
        ;
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.props.mathQuestions.map((q) => (
            <Question
              key={q.number}
              qnum={q.number}
              question={q.question}
              answers={q.answers}
              next={this.next}
            />
          ))}
        </Slider>
        <TestButtons next={this.next} />
      </div>
    );
  }
}

export default QuestionsCarousel;
