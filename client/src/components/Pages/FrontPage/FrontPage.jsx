import React from "react";
import styles from './FrontPage.module.css'
import {Button1} from "../../SiteButtons/Button1/Button1";
import {Button2} from "../../SiteButtons/Button2/Button2";
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Item from "./Item/Item";
import Slider from "../../Slider/Slider";
import Slider2 from "../../Slider/Slider2";
import {Link} from 'react-router-dom'

const FrontPage = (props) => {
  return (
    <div>
      <section className={styles.introBlock}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className={styles.introText} >
                <h1>
                  One Box <br />
                  <span>Unlimited Choice</span>
                </h1>
                <p>DECIDED TO RENT THE DRESS?</p>
                <Link to="/catalog">
                <Button2 style={{border:'none'}}>
                      Rent now 
                </Button2>
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.worksBlock}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <SiteHeadline text="How it works" />
            </div>
          </div>
          <div className={styles.worksList}>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <Item
                  img="images/svg/pickit.svg"
                  headline="Pick IT"
                  text="Browse to find your unique outfit and rent it for up to 7 days per dress."
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <Item
                  img="images/svg/dressit.svg"
                  headline="Dress IT"
                  text="It’s your time to shine! Share your experience, review the dress and get discount for the next rental. Tag us @dressitbox on insta"
                />
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <Item
                  img="images/svg/ownit.svg"
                  headline="Own IT"
                  text="Having a separation anxiety with recently rented piece? No worries – if you really want to keep it you can buy it at reduced price."
                />
                <div className={styles.icon}>
                  <p>Or</p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <Item
                  img="images/svg/returnit.svg"
                  headline="Return it"
                  text=" Time to say ‘Goodbye’! Place the outfit back in the box youreceived it in, place the return label on it and leave it at your nearest post office."
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <Link to="/catalog">
                <Button1>
                      Rent now 
                </Button1>
                </Link>
            </div>
          </div>


        </div>
      </section>
      <section className={styles.styleBlock}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <SiteHeadline text="Few of our styles" />
            </div>
            <div className="col-12 col-md-6 ">
              <div className={styles.styleBtn}>
              <Link to="/catalog">
                <Button2>
                     Follow us
                </Button2>
                </Link>
              </div>
            </div>
          </div>


          <div className={styles.slider}>
            <div className="row">
              <Slider id="multiCarousel" a="#multiCarousel" />
            </div>
          </div>
          <div className={styles.btnWidth}>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
              <Link to="/catalog">
                <Button2  style={{width:'100%'}}> 
                      ALL CATALOG
                </Button2>
             </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsBlock}>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <SiteHeadline text="Benefits" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={styles.benefitsText}>
                <p>Decided to rent the dress? You’ve just</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <Item
                img="images/svg/Vector.svg"
                headline="Saved 165l of water"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <Item
                img="images/svg/Vector (1).svg"
                headline="Reduced 14kg of co2 emmissions"
              />
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <Item
                img="images/svg/Vector (2).svg"
                headline="Reduced 1kg of textile waste"
              />
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <Item
                img="images/svg/Vector (3).svg"
                headline="Saved 1.5 kg of oil and gas consumption"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <Link to="/catalog">
                <Button1 >
                      Rent now 
                </Button1>
                </Link>
              
            </div>
          </div>
        </div>
      </section>

      <section className={styles.galleryBlock}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <SiteHeadline text="Follow Us on Instagram" />
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.styleBtn}>
              <Link to="/catalog">
                <Button2 >
                      Follow us
                </Button2>
                </Link>
              
              </div>
            </div>
          </div>

          <div className={styles.slider}>
            <div className="row">
              <Slider2 id="multiCarousel2" a="#multiCarousel2" />
            </div>
          </div>
          <div className="row">
          <div className="col-12">
            <div className={styles.galleryText}>
              <p>Follow us on Instagram @dressitbox</p>
            </div>
          </div>
        </div>
        </div>

       
      </section>
    </div>
  );
}


export default FrontPage

