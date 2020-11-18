import React from "react";
import univer1 from "../../assets/univers/univer1.jpg";
import Button from "../global/Button";
import { Link } from "react-router-dom";

const Batafsil = () => {
  const univerBg = {
    backgroundImage: `${univer1}`,
  };
  return (
    <div className='container batafsil-wrap'>
      <div className='batafsil-img'>
        <img src={require("../../assets/home/batafsilbg.png")} alt='' />
      </div>
      <div className='batafsil-text'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          aperiam illo quibusdam delectus voluptas quia, vel cum debitis,
          voluptates voluptatem hic et, natus tempora odio atque laborum ut
          aspernatur itaque veniam incidunt magnam. Accusantium velit, earum
          deleniti nihil omnis dolorum. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Porro, consequuntur. Voluptas quo voluptates
          reprehenderit omnis. Dolorum sit facilis rerum harum dolor vero cum
          quis eligendi accusantium iste veritatis consequuntur officiis ratione
          voluptas reprehenderit nihil autem modi, ipsam itaque sequi enim
          debitis odit? Ipsam ea explicabo reiciendis a magni, libero quaerat.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          aperiam illo quibusdam delectus voluptas quia, vel cum debitis,
          voluptates voluptatem hic et, natus tempora odio atque laborum ut
          aspernatur itaque veniam incidunt magnam. Accusantium velit, earum
          deleniti nihil omnis dolorum. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Porro, consequuntur. Voluptas quo voluptates
          reprehenderit omnis. Dolorum sit facilis rerum harum dolor vero cum
          quis eligendi accusantium iste veritatis consequuntur officiis ratione
          voluptas reprehenderit nihil autem modi, ipsam itaque sequi enim
          debitis odit? Ipsam ea explicabo reiciendis a magni, libero quaerat.
        </p>
      </div>
      <Link to='/'>
        <Button text='ortga' size={0.9} arrowBack={true} bgClass='orange' />
      </Link>
    </div>
  );
};

export default Batafsil;
