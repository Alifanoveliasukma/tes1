import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './image/202.png';
import image1 from './image/2.png';
import image3 from './image/3.png';
import iconvid from './image/icon-vid.png';
import './App.css';

function App() {
  return (
        <>
        {/* Navbar */}
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container">

                <a class="navbar-brand" href="#">
                <img src={logo} className="" alt="logo"></img>
                </a>

                <button class="navbar-toggler" type="button">
                  <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <div class="menu">
                      <a class="nav-link active"href="#">Home</a>
                      <a class="nav-link" href="#service">Services</a>
                      <a class="nav-link" href="#">Shop</a>
                      <a class="nav-link" href="#aboutPlantsasri">About Me</a>
                      <a class="nav-link" href="#contact">Contact Me</a>
                    </div>

                    <div class="getStarted">
                        <div class="polygon">
                            <div class="clipath"></div>
                        </div>
                        <div class="buttonWrapper">
                          <a href="#" class="nav-link">Get Started</a>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
          </nav>
          {/* header */}
        <div className="container-1">
          <div className='row'>
              <div className='col'>
                <div className='text-1'>
                  <p>Membuat <span>hidup</span> seseorang menjadi <span>lebih baik</span> dengan memberikan milikmu.</p>
                </div>
              <div>
                <div className='text-2'>
                  <p>“Aku dan orang yang menanggung anak yatim (kedudukannya) di surga seperti ini”, kemudian beliau shallallahu 'alaihi wa sallam mengisyaratkan jari telunjuk dan jari tengah beliau shallallahu 'alaihi wa sallam, serta agak merenggangkan keduanya.” (HR. Bukhari)</p>
                </div>
              </div>
              <button className='button1'>Donasi Sekarang</button> 
              <button className='button2'><img src={iconvid} className="" alt="logo"></img>Lihat Video</button> 
              </div>
              <div className='col'>
              <img src={image1} className="img-1" alt="image"></img>           
              </div>
          </div>

        </div>
        <div className='body'>
            <div className='blog-post'>
              <div className='blog-post_img'>
                <img src={image3} className="" alt=""></img>
              </div>
              <div className='blog-post_info'>
                <div className='blog-post_date'>
                    <span className='span-1'>Tentang Kami</span>
                    <span className='span-3'>Apa Sih Sahabat Peduli Yatim Tuh ?</span>
                
                  <p className='blog-post_text'>
                  Sahabat Peduli Yatim adalah sebuah komunitas sosial agama, dengan konsep mengadakan santunan dari masjid ke masjid setiap bulannya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default App;