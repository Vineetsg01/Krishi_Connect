import React from "react";
import "./about.scss";
import img from "../assets/mandala.gif";
import img2 from "../assets/flower.gif";
import img3 from "../assets/cycle.gif";


function About() {
  return (
    <div className="about">
      <div className="bg-image">
        <h1 className="text">About Us</h1>
      </div>
      {/* Our story */}
      <div className="our-story">
        <div className="text">
          <h2>Our Story</h2>
          <div className="tagline">
            <div className="line"></div>
            <span className="tagline-text">THE HIGH STRESS FAVOURITE</span>
          </div>
          <p className="para">
            Fresh vegetables are nature's vibrant bounty, offering a symphony of
            flavors, textures, and colors to tantalize the senses. From the
            crisp crunch of a perfectly ripe bell pepper to the tender bite of
            leafy greens, each vegetable brings its own unique essence to the
            table. Bursting with essential nutrients and antioxidants, these
            wholesome delights not only nourish the body but also inspire
            culinary creativity.
          </p>
          <p className="para2">
            Whether tossed into a crisp salad, roasted to caramelized
            perfection, or lightly steamed to preserve their natural goodness,
            fresh vegetables elevate any dish with their purity and vitality.
            Embrace the abundance of the earth and savor the crisp, vibrant
            essence of fresh vegetables in every meal.
          </p>
        </div>
        <div className="image">
          <img
            src="https://vagen-store-demo.myshopify.com/cdn/shop/files/about1.jpg?v=1692931735"
            alt=""
          />
        </div>
      </div>

      {/* Who we are */}
      <div className="who-we-are">
        <div className="image">
          <img
            src="	https://vagen-store-demo.myshopify.com/cdn/shop/files/about2.jpg?v=1692931735"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Who We Are?</h2>
          <div className="tagline">
            <div className="line"></div>
            <span className="tagline-text">THE HIGH STRESS FAVOURITE</span>
          </div>
          <p className="para">
            Welcome to our agricultural e-commerce platform, where we bridge the
            gap between farmers and consumers with convenience and efficiency.
            At our core, we are a dedicated team passionate about
            revolutionizing the way agricultural products are bought and sold.
            By leveraging technology and innovation, we provide a seamless
            online marketplace where farmers can showcase their high-quality
            produce and consumers can easily access a diverse range of fresh,
            sustainably sourced goods.
          </p>
          <p className="para2">
            With a commitment to transparency, reliability, and fair trade, we
            strive to empower both farmers and consumers, fostering a thriving
            community built on trust and collaboration. Join us in redefining
            the future of agriculture, one click at a time.
          </p>
        </div>
      </div>

      {/* design-inovation-journey */}
      <div className="design-innovation-journey">
        <div className="design">
          <img src={img} alt="icon" />
          <h2>Design</h2>
          <div className="line"></div>
          <p>
            Our agricultural e-commerce website design embodies simplicity and
            functionality, ensuring a seamless user experience for farmers and
            consumers alike.
          </p>
        </div>
        <div className="innovation">
          <img src={img2} alt="icon" />
          <h2>Innovation</h2>
          <div className="line"></div>
          <p>
            Cultivating connectivity: revolutionizing agricultural trade with a
            seamless e-commerce platform for farmers and buyers alike.
          </p>
        </div>
        <div className="journey">
          <img src={img3} alt="icon" />
          <h2>Journey</h2>
          <div className="line"></div>
          <p>
            From seed to sale, our agricultural e-commerce website nurtures the
            journey of cultivation, connecting farmers with markets globally.
          </p>
        </div>
      </div>

      {/* reviews */}
      <div className="happy-clients">
        <h2>Happy Clients</h2>
        <div className="reviews">
          <div className="review">
            <p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </p>
            <p>
              A golden orb of tropical delight, its succulent flesh embodies a
              harmonious blend of sweetness and tang, leaving a lingering taste
              of sunshine on the palate.
            </p>
            <div className="client-info">
              <img
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Krati Saini</p>
            </div>
          </div>

          <div className="review">
            <p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </p>
            <p>
              The unsung heroes of the plate, offering a kaleidoscope of
              nutrients, textures, and tastes to elevate any dish and nourish
              the body from root to leaf
            </p>
            <div className="client-info">
              <img
                src="https://images.unsplash.com/photo-1552848045-b6cc7e357289?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Rahul Verma</p>
            </div>
          </div>

          <div className="review">
            <p>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half-full checked"></span>
            </p>
            <p className="comment">
              A vibrant tapestry of nature's sweetness, bursting with vitamins,
              antioxidants, and a spectrum of flavors, ensuring both health and
              indulgence in every bite.
            </p>
            <div className="client-info">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <p>Scarllet Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;