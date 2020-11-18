import React, { useState } from "react";
import Button from "../global/Button";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareResult = () => {
  const [copied, setcopied] = useState(false);
  const [value, setvalue] = useState("http://www.abitur.uz//result/1125686");

  return (
    <div className='share-result'>
      <img
        className='shareResultsImg'
        src={require("../../assets/results/shareResultsImg.png")}
        alt=''
      />
      <div className='sharing'>
        <p>Natijalaringizni yaqinlaringiz bilan baham ko'ring</p>
        <div className='social-media-links'>
          <img src={require("../../assets/results/facebook.png")} alt='' />
          <img src={require("../../assets/results/instagram.png")} alt='' />
          <img src={require("../../assets/results/oddnaklasniki.png")} alt='' />
          <img src={require("../../assets/results/telegram.png")} alt='' />
        </div>
        <div className='shareable-link'>
          http://www.abitur.uz//result/1125686
        </div>
        <div className='share-btns'>
          <div className='share-btn'>
            <CopyToClipboard text={value} onCopy={() => setcopied(true)}>
              <button className='copy-button'>
                {copied ? "Nusxa olindi" : "Linkni nusxa olish"}
              </button>
            </CopyToClipboard>
          </div>
          <div className='share-btn'>
            <Link to='/'>
              <Button bgClass='uzbGreen' text='Bosh sahifa' size={0.9} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareResult;
