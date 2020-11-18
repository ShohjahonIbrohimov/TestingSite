import React from "react";
import Button from "../global/Button";
import CarouselUnivers from "../universities/CarouselUnivers";
import { Link } from "react-router-dom";

const Center = (centers, routerProps) => {
  let centerID = routerProps.match.params.id;
  let center = centers.filter((center) => center._id === centerID);
  const centerImg = {
    backgroundImage: `url(${center[0].mainImage})`,
  };

  return (
    <div className='center'>
      <div className='container'>
        <header>
          <div className='center-img' style={centerImg}></div>
          <div className='brief-about-center'>
            <div className='stars-cont'>
              <h1>{center[0].centerName}</h1>
              <div className='stars'>
                <i className='far fa-star'></i>
                <i className='far fa-star'></i>
                <i className='far fa-star'></i>
              </div>
            </div>
            <span className='position-in-site'>SAYTDA 1-RAQAMLI</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur minus mollitia, nam ipsum doloremque accusamus
              doloribus atque recusandae aut quidem! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus, impedit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur minus mollitia, nam ipsum doloremque accusamus
              doloribus atque recusandae aut quidem! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellendus, impedit.
            </p>
            <Link to='/centers'>
              <Button
                text='ortga'
                bgClass='orange'
                arrowBack={true}
                px={0.5}
                py={2}
              />
            </Link>
          </div>
        </header>
        <div className='about-center'>
          <h1>Markaz haqida</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos quos similique earum nostrum, repudiandae laudantium
            eligendi? Repudiandae quaerat saepe non? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Cupiditate, natus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae temporibus porro repudiandae quae magni nostrum? Ea
            maiores quas tempore quos, illum magnam doloremque accusantium aut
            deserunt nihil culpa iste deleniti eos ipsum optio ad a. Numquam
            voluptates facere itaque. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsam commodi suscipit quaerat provident quod
            fugiat reprehenderit assumenda ab illo animi.
          </p>
        </div>
        <div className='courses-in-center'>
          <h1>Markazda macvjud kurslar</h1>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              inventore accusantium corporis ad assumenda illo quo molestias sit
              ex dolores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              inventore accusantium corporis ad assumenda illo quo molestias sit
              ex dolores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              inventore accusantium corporis ad assumenda illo quo molestias sit
              ex dolores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              inventore accusantium corporis ad assumenda illo quo molestias sit
              ex dolores.
            </li>
          </ul>
        </div>

        <div className='center-entrance-exams'>
          <h1>Markazga qabul-saralash jarayonlari</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos quos similique earum nostrum, repudiandae laudantium
            eligendi? Repudiandae quaerat saepe non? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Cupiditate, natus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae temporibus porro repudiandae quae magni nostrum? Ea
            maiores quas tempore quos, illum magnam doloremque accusantium aut
            deserunt nihil culpa iste deleniti eos ipsum optio ad a. Numquam
            voluptates facere itaque. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsam commodi suscipit quaerat provident quod
            fugiat reprehenderit assumenda ab illo animi.
          </p>
        </div>
        <div className='center-pics'>
          <h1>Fotolavhalar</h1>
          <CarouselUnivers />
        </div>
      </div>
    </div>
  );
};

export default Center;
