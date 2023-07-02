import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [leftArrow,setLeftArrow] = useState('hidden');
  const [rightArrow,setRightArrow] = useState('right');

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    if(currCardIdx == 1){
      setRightArrow('hidden')
    }
    if(currCardIdx < 2){
      setCurrCardIdx(currCardIdx + 1);
      setLeftArrow('left')
    }
  }
  function goBackward() {
    if(currCardIdx == 1){
      setLeftArrow('hidden')
    }
    if(currCardIdx > 0){
      setCurrCardIdx(currCardIdx - 1);
      setRightArrow('right')
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          title="Previous Image"
          className={leftArrow}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          title="Next Image"
          className={rightArrow}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
