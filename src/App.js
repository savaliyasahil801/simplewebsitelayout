import './App.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot, FaFacebookF, FaGooglePlusG, aBars, FaPizzaSlice, FaMartiniGlass } from "react-icons/fa6";
import { FaTwitter, FaLeaf, FaIceCream, FaStar,FaPhoneAlt } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { GiHamburger, GiOpenedFoodCan } from "react-icons/gi";
import { CiStar ,CiMail} from "react-icons/ci";


import img1 from './image/logo.png';
import img2 from './image/s-i-1.jpeg';
import img3 from './image/our1.jpeg';
import img4 from './image/our2.jpeg';
import img5 from './image/our3.jpeg';
import img6 from './image/our4.jpeg';
import img7 from './image/our5.jpeg';
import img8 from './image/our6.jpeg';
import img9 from './image/img.jpeg';
import img10 from './image/pizza1.png';
import img11 from './image/pizza2.png';
import img12 from './image/pizza3.png';
import img13 from './image/pizza4.png';
import img14 from './image/img2.jpeg';
import img15 from './image/cr1.jpeg';
import img16 from './image/cr2.jpeg';
import img17 from './image/cr3.jpeg';
import img18 from './image/cr4.jpeg';
import img19 from './image/i1.jpeg';
import img20 from './image/i2.jpeg';
import img21 from './image/i3.jpeg';
import img22 from './image/i4.jpeg';
import img23 from './image/i5.jpeg';
import img24 from './image/i6.jpeg';
import img25 from './image/i7.jpeg';
import img26 from './image/like.png';


function App() {
  return (
    <>
      <div className='container'>
        <div className='main_per'>
          <div className='flex'>
            <div className='box0 logo text-center'>
              <img src={img1}></img>
            </div>
            <div className='hed'>
              <ul className='b top_info flex'>
                <li><a><BsFillTelephoneFill></BsFillTelephoneFill>+1 718-999-3939</a></li>
                <li><a><FaLocationDot></FaLocationDot>514 S. Magnolia St. Orlando, FL 32806</a></li>
                <ul className='icon flex'>
                  <li><a><FaFacebookF></FaFacebookF></a></li>
                  <li><a><FaTwitter></FaTwitter></a></li>
                  <li><a><ImInstagram></ImInstagram></a></li>
                  <li><a><FaGooglePlusG></FaGooglePlusG></a></li>
                </ul>
              </ul>

              <header className='d-flex item-center h'>
                <ul className='box1 main_menu flex'>
                  <li><a>Home </a></li>
                  <li><a>About us </a></li>
                  <li><a>Typography </a></li>
                  <li><a>Contacts</a></li>
                </ul>
                <div className='bar'>
                  <aBars></aBars>
                </div>
              </header>

            </div>

          </div>
        </div>
      </div>

      {/* photo */}

      <div className='photo'>
        <img src={img2}></img>
        <div className='content'>
          <h4>PERFECT PIZZA</h4>
          <p>Experience the taste of a perfect pizza at
            PizzaHouse, one of the best restaurants!</p>
          <button>
            <li><a>VIEW OUR MENU </a></li>
          </button>
        </div>
      </div>

      {/* photo end */}

      {/* our menu start */}

      <section className='spacery'>
        <div className='container'>
          <div className='head_sec text-center'>
            <div className='head_title ov-flow'>
              <h3> OUR MENU</h3>
            </div>
          </div>
          <div className='d-flex m24 flex-wrap bb ov-flow'>

            <div className='w-33 ov-flow' id='slaider1'>
              <div className='box'>
                <img src={img3}></img>
                <div className='layer'></div>
                <div className='ic'><i><FaLeaf></FaLeaf></i></div>
                <h2 className='text'>salads</h2>
              </div>
            </div>

            <div className='w-33 ov-flow' id='slaider1'>
              <div className='box'>
                <img src={img4}></img>
                <div className='layer'></div>
                <div className='ic'><i><FaPizzaSlice></FaPizzaSlice></i></div>
                <h2 className='text'>Pizzas</h2>
              </div>
            </div>

            <div className='w-33 ov-flow' id='slaider1'>
              <div className='box'>
                <img src={img5}></img>
                <div className='layer'></div>
                <div className='ic'><i><GiHamburger></GiHamburger></i></div>
                <h2 className='text'>Burgers</h2>
              </div>
            </div>

            <div className='w-33 ov-flow' id='slaider1'>
              <div className='box'>
                <img src={img6}></img>
                <div className='layer'></div>
                <div className='ic'><i><FaIceCream></FaIceCream></i></div>
                <h2 className='text'>Desserts</h2>
              </div>
            </div>

            <div className='w-33 ov-flow' id='slaider1'>
              <div className='box'>
                <img src={img7}></img>
                <div className='layer'></div>
                <div className='ic'><i><FaMartiniGlass></FaMartiniGlass></i></div>
                <h2 className='text'>drinks</h2>
              </div>
            </div>

            <div className='w-33 ov-flow' id='slaider1'>
              <div className='box'>
                <img src={img8}></img>
                <div className='layer'></div>
                <div className='ic'><i><GiOpenedFoodCan></GiOpenedFoodCan></i></div>
                <h2 className='text'>Seafood</h2>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* our menu start */}

      {/*------ Best atmosphere ------- */}

      <div className='atmos'>
        <img src={img9}></img>
        <div className='layer2'></div>
        <div className='content2 ov-flow'>
          <h2>Best atmosphere</h2>
          <p>PizzaHouse is the place of the best pizza and high-quality service.</p>
          <h5>
            <li className='line'></li> Ben Smith, Founder
          </h5>
          <button className='btn'>view our services</button>
        </div>
      </div>

      {/* ---------------------------- */}

      {/* ------------------- SELECTED PIZZAS ------------------  */}
      <div className='spacery'>
        <div className='container'>
          <div className='head_sec text-center'>
            <div className='head_title heding'>
              <h3> SELECTED PIZZAS</h3>
            </div>
          </div>
          <div className='d-flex bh'>
            <div className='lb d-flex'>
              <div className='w-25'>
                <div className='box2 effect2'>
                  <img src={img10}></img>
                  <div className='contant'>
                    <div className='star'>
                      <i><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        <FaStar></FaStar><CiStar></CiStar></i>
                    </div>
                    <h5>Margherita Pizza</h5>
                    <h6>$24.00</h6>
                  </div>
                </div>
              </div>
              <div className='w-25'>
                <div className='box2 effect2'>
                  <p className='n'>NEW</p>
                  <img src={img11}></img>
                  <div className='contant'>
                    <div className='star'>
                      <i><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        <FaStar></FaStar><FaStar></FaStar></i>
                    </div>
                    <h5>Mushroom Pizza</h5>
                    <h6>$24.00</h6>
                  </div>
                </div>
              </div>
              <div className='w-25'>
                <div className='box2 effect2'>
                  <img src={img12}></img>
                  <div className='contant'>
                    <div className='star'>
                      <i><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        <FaStar></FaStar><CiStar></CiStar></i>
                    </div>
                    <h5>Hawaiian Pizza</h5>
                    <h6>$24.00</h6>
                  </div>
                </div>
              </div>
              <div className='w-25'>
                <div className='box2 effect2'>
                  <p className='s'>SALE</p>
                  <img src={img13}></img>
                  <div className='contant'>
                    <div className='star'>
                      <i><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                        <FaStar></FaStar><FaStar></FaStar></i>
                    </div>
                    <h5>Pesto Pizza</h5>
                    <h6>$40.00 $24.00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------  */}

      {/* --------------- 30% on all salads & drinks ---------------  */}

      <div className='dis'>
        <img src={img14}></img>
        <div className='layer3'></div>
        <div className='content3'>
          <h2>-30% on all salads & drinks</h2>
          <p>Taste some of the best PizzaHouse salads!</p>
          <button className='btn'>CONTACT US</button>
        </div>
      </div>

      {/* ------------------------------------------------------------  */}

      {/* ----------- WHAT PEOPLE SAY -------------   */}

      <div className='container'>
        <div className='title'>WHAT PEOPLE SAY </div>
        <div id='tast'>
          <div className='d-flex '>
            <div className='box5'>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur consectetur dicta
                pariatur
                cum obcaecati, quisquam vel praesentium explicabo exercitationem nisi impedit doloremque saepe
                aliquid repellendus sint consequuntur architecto est?</h4>
              <img src={img15}></img>
            </div>
            <div className='box5'>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur consectetur dicta
                pariatur
                cum obcaecati, quisquam vel praesentium explicabo exercitationem nisi impedit doloremque saepe
                aliquid repellendus sint consequuntur architecto est?</h4>
              <img src={img16}></img>
            </div>
            <div className='box5'>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur consectetur dicta
                pariatur
                cum obcaecati, quisquam vel praesentium explicabo exercitationem nisi impedit doloremque saepe
                aliquid repellendus sint consequuntur architecto est?</h4>
              <img src={img17}></img>
            </div>
            <div className='box5'>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur consectetur dicta
                pariatur
                cum obcaecati, quisquam vel praesentium explicabo exercitationem nisi impedit doloremque saepe
                aliquid repellendus sint consequuntur architecto est?</h4>
              <img src={img18}></img>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------   */}

      {/* ---------------------- images ------------------------  */}

      <div className='d-flex'>
        <div className='main'>
          <div className='cover cover1'>
            <img src={img19} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
          <div className='cover cover2'>
            <img src={img20} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
          <div className='cover cover3'>
            <img src={img21} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
          <div className='cover cover4'>
            <img src={img22} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
          <div className='cover cover5'>
            <img src={img23} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
          <div className='cover cover6'>
            <img src={img24} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
          <div className='cover cover7'>
            <img src={img25} ></img>
            <div className='ht'>
              <h5>BEST INGREDIENTS</h5>
              <p>TASTY PIZZA</p>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------  */}

      {/* futtor start */}

      <div className='futtor'>
        <div className='container d-flex'>
          <div className='w-33'>
            <ul className='p1'>
              <h2 style={{ textAlign: 'center' }}>What We Offer</h2>
              <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                <a>Pizzas</a>
                <a>Drinks</a>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>Burgers</p> <p>Seafood</p>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>Salads</p> <p>Drinks</p>
              </li>
            </ul>
          </div>

          <div className='w-33'>
            <ul className='p1'>
              <h2 style={{ textAlign: 'center' }}>What We Offer</h2>
              <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                <a>Pizzas</a> <a>Drinks</a>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>Burgers</p> <p>Seafood</p>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>Salads</p> <p>Drinks</p>
              </li>
            </ul>
          </div>


          <div className='w-33 '>
            <ul className='p1'>
              <h2>Newsletter</h2>
              <div>
                <p>Sign up today for the latest news and updates.</p>
              </div>
              <div className='email'>
                <p><input type='text' placeholder='Enter your E-mail'></input>
                  <button>SUBSCRIRE</button></p>
              </div>
            </ul>
          </div>
        </div>
        <hr></hr>

        <div className='container'>
          <div className='d'>
            <div className='w-20'>
              <img src={img1}></img>
            </div>
            <div className='w-20'>
              <img src={img26}></img>9.4k
            </div>
            <div className='futtortext'>
                <FaPhoneAlt className='icon'></FaPhoneAlt>+1 718-999-3939
            </div>
            <div className='futtortext'>
                <CiMail className='icon'></CiMail>info@demolink.org
            </div>
            <div>
              <FaFacebookF className='sicon'></FaFacebookF>
              <FaTwitter className='sicon'></FaTwitter>
              <ImInstagram className='sicon'></ImInstagram>
              <FaGooglePlusG className='sicon'></FaGooglePlusG>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className='container d-flex end'>
            <a>514 S. Magnolia St. Orlando, FL 32806</a>
            <a>© 2023. All Rights Reserved. Design by TemplateMonster</a>
        </div>
      </div>

      {/* futtor end */}
    </>
  );
}

export default App;
