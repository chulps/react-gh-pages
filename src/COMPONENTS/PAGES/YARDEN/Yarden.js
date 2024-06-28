import React, { Component } from "react";
import YardenLogo from "../../../IMG/YardenLogo";
import YardenMark from "../YARDEN/YardenMark";
import YardenLogoGeometry from "./YardenLogoGeometry";
import YardenLogoType from "./YardenLogotype";
import plantSelectionScreen from "./plant_selection.png";
import changeDateScreen from "./change_date.png";
import GardenMap from "./gardenmap.png";
import oldLogo from "./old_yarden_logo.jpg";
import theInvite from "./theinvite.jpeg";
import YardenVerticalLockup from "./YardenVerticalLockup";
import YardenHorizontalLockup from "./YardenHorizontalLockup";
import "./Yarden.css";
import yardenWebsiteScreenshot from "./yarden_website_screenshot.png";
import yardenWebsiteRedesign2 from "./yarden_website_fullscreen.png";
import yardenProductsPage from "./yarden_products_page.jpg";
import YardenAppStoreQRCode from "./YardenAppStoreQRCode";
import { Helmet } from "react-helmet";
import truckBack from "../../../IMG/yarden_truck_back.jpg";
import truckFront from "../../../IMG/yarden_truck_front.jpg";
import truckLeft from "../../../IMG/yarden_truck_left_side.jpg";
import truckRight from "../../../IMG/yarden_truck_right_side.jpg";
import customerDBPlants from "./CustomerDBPlants.png";
import customerDBQuotes from "./CustomerDBQuotes.png";
import customerDBOrders from "./CustomerDBOrders.png";
import customerDBSettings from "./CustomerDBSettings.png";
import applications from "./biz-dash-applications.png";
import automation from "./biz-dash-automation.png";
import materials from "./biz-dash-materials.png";
import orders from "./biz-dash-orders.png";
import qrCodes from "./biz-dash-qr-codes.png";
import templates from "./biz-dash-templates.png";

const bizDashImages = [
  applications,
  automation,
  materials,
  orders,
  qrCodes,
  templates,
];

// ai images
const aiImages = [
  {
    name: "assessment",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/assessment.png",
  },
  {
    name: "productAndServicesHero",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/product_and_services_hero.png",
  },
  {
    name: "babyPhoto",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/baby_photo.png",
  },
  {
    name: "shield",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/shield.png",
  },
  {
    name: "organic",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/organic.png",
  },
  {
    name: "garden",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/pricing-garden.png",
  },
  {
    name: "aijason",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/homepage_images/aijason.png",
  },
  {
    name: "careAndMaintenance",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/cleaning.png",
  },
  {
    name: "customGardenBed",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/custom_garden_bed.png",
  },
  {
    name: "hose",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/hose.png",
  },
  {
    name: "largeGardenBed",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/4x8garden_bed.png",
  },
  {
    name: "lumber",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/lumber.png",
  },
  {
    name: "mediumGardenBed",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/4x4garden_bed.png",
  },
  {
    name: "productAndServicesHero",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/product_and_services_hero.png",
  },
  {
    name: "smallGardenBed",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/2x4garden_bed.png",
  },
  {
    name: "soil",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/soil.png",
  },
  {
    name: "harvest",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/harvest.png",
  },
  {
    name: "gardener",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/careers_page_images/careers_gardener.png",
  },
  {
    name: "installation",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/installation.png",
  },
  {
    name: "maintenance",
    url: "https://yarden-garden.s3.us-west-1.amazonaws.com/products_%26_services_page_photos/maintenance.png",
  },
];

class Yarden extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div id="yarden">
        <Helmet>
          <title>Yarden</title>
        </Helmet>
        {/* yarden top section */}
        <section className="pt3">
          <label>Project:</label>
          <h1>Yarden&trade;</h1>
        </section>

        {/* intro section */}
        <section className="md-two-columns gap2 md-gap3 lg-gap4 pb4">
          <div>
            <p>
              Yarden is a gardening company supported by tech. It makes use of
              customer facing and internal products that allow the company to
              run on a very lean business model with a small team and steady
              growth.
            </p>
          </div>
          <div className="two-columns gap2">
            <div>
              <label>Title:</label>
              <h5>Product Design Lead</h5>
            </div>
            <div>
              <label>City:</label>
              <h5>San Francisco (Remote)</h5>
            </div>
            <div>
              <label>When:</label>
              <h5>2021 - Present Day</h5>
            </div>
            <div>
              <label>Country:</label>
              <h5>
                <span role="img" aria-label="USA">
                  🇺🇸
                </span>
                &nbsp;USA
              </h5>
            </div>
          </div>
        </section>

        {/* responsibilities section */}
        <section className="mb4 lg-two-columns gap4">
          {/*  */}
          <div className="flex-center">
            <div className="half md-third lg-whole xl-half">
              <YardenVerticalLockup />
            </div>
          </div>
          {/* responsibilities copy */}
          <div>
            <label>Responsibilities:</label>
            <h2 className="mb1">What do I do here?</h2>
            <p>
              TL;DR -- <i>Lead the design of everything we do!</i>
            </p>

            <br />
            <div
              className="sm-two-columns"
              style={{ gap: "var(--unit2) var(--unit3)" }}
            >
              <div>
                <h5>Branding:</h5>
                <small>
                  Lead the brand of the company and the design of all branded
                  materials. This includes print and web assets.
                </small>
              </div>

              <div>
                <h5>Product:</h5>
                <small>
                  Understand business objectives and architect solutions based
                  on input from CEO, CTO, and internal data, and maintain our
                  product pipeline.
                </small>
              </div>

              <div>
                <h5>Design System:</h5>
                <small>
                  Establish a design token system of colors, typography,
                  spacing, and scaling for a consistent experience across all
                  products. This system is used to build a constantly evolving
                  component library.
                </small>
              </div>

              <div>
                <h5>UI/UX Design:</h5>
                <small>
                  Use data to inform design decisions and utilize our design
                  system to design and build quickly and at high fidelity
                </small>
              </div>

              <div>
                <h5>Web and Mobile Development:</h5>
                <small>
                  Work along side devs with a very hands-on approach, insuring
                  the design and feasability of our products.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* story section */}
        <section>
          <div className="sm-two-columns gap2 lg-gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <div>
                  <label>Story:</label>
                  <h2 className="mb1">How I Started here.</h2>
                </div>
                <p>
                  In Spring 2021, my former colleague from &nbsp;
                  <a href="/clicktool/">Clicktool</a>, Isaac, called me to hang
                  out. He was working at Snapchat and I was at CRI Genetics. We
                  were both sharing stories and telling jokes about our new jobs
                  and things that we've been doing since our time at Clicktool.
                </p>
                <p>
                  Later, while we were eating Korean BBQ, consuming a mountain
                  of grilled meat and banchan, Isaac told me about his project,
                  "Yarden", a little gardening company he started with a friend,
                  and invited me to join the team!
                </p>
              </div>
            </div>

            <div className="flex-center flex-vertical">
              <label className="ghost md-block">&nbsp;</label>
              <h3 className="mb2 ghost md-block">&nbsp;</h3>
              <img
                loading="lazy"
                width="100%"
                src={theInvite}
                className="shadowDown"
                alt="Chuck and Isaac"
                style={{ borderRadius: "var(--unit2)" }}
              />
              <small className="mt0">Actual photo from that day...</small>
            </div>
          </div>
        </section>

        {/* rebrand section */}
        <section className="mt4">
          <div className="mb4">
            <div className="md-two-columns gap3 lg-gap4">
              <div className="flext-center flex-vertical">
                <div className="flex-center flex-vertical bg-white p3">
                  <img
                    loading="lazy"
                    src={oldLogo}
                    alt="old yarden logo"
                    width="50%"
                  />
                </div>
                <small className="flex-center">The original Yarden logo.</small>
              </div>

              <div>
                <label>Challenge #1:</label>
                <h2 className="mb1">Rebrand the Company</h2>
                <p>
                  This was the logo from when the company was established. As I
                  came here the topic of trademarking this logo was on the table
                  and naturally, I saw an opportunity to make an impact.
                </p>
                <p>
                  It took some fighting and several hours of meetings... as it
                  should be! Changing your brand after 4 years in business is
                  risky! But I convinced my colleagues to give me a chance...
                </p>
              </div>
            </div>
          </div>

          <div className="lg-two-columns">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <label>My proposal:</label>
                <h3>Yarden's New Logo System</h3>

                <p className="m-none my1">
                  Before I could start on this project I had to figure out what
                  my limitations are. There must be a trace of the old brand but
                  it has to be re-thought to fit the needs of a new brand.
                </p>

                <div className="my2">
                  <YardenLogoGeometry />
                </div>

                <label>Requirements:</label>
                <div className="two-columns sm-three-columns md-two-columns gap2">
                  <small>
                    1. Make a reference to the imagery and colors from the
                    original Yarden logo. We have to keep the pitchfork and the
                    color green.
                  </small>
                  <small>
                    2. Printed signage is a big part of our marketing so the
                    branding needs to be bold, bright, and readable from a
                    distance.
                  </small>
                  <small>
                    3. It has to work as an app icon for the app store and the
                    iPhone home screen. The mark has to fit well occupy the
                    space of a square or circle very well.
                  </small>
                  <small>4. Use the letter "Y" somehow</small>
                  <small>
                    5. We are gonna trademark this... so it needs to be simple,
                    solid, and timeless.{" "}
                    <span role="img" aria-label="nervous laughter">
                      😅
                    </span>
                  </small>
                </div>
              </div>
            </div>

            <div className="gap3">
              <div className="flex-center flex-vertical">
                <div className="fourth mt4">
                  <YardenMark />
                </div>
                <small className="mt2">Mark</small>
              </div>

              <hr className="my3" />

              <div className="flex-center flex-vertical">
                <div className="half">
                  <YardenLogoType />
                </div>
                <small className="mt2">Logotype</small>
              </div>

              <hr className="my3" />

              <div className="flex-center flex-vertical">
                <div className="half">
                  <YardenHorizontalLockup />
                </div>
                <small className="mt2">Horizontal Lockup</small>
              </div>

              <hr className="my3" />

              <div className="flex-center flex-vertical">
                <div className="third">
                  <YardenVerticalLockup />
                </div>
                <small className="mt2">Vertical Lockup</small>
              </div>
            </div>
          </div>
        </section>

        {/* color system section */}
        <section>
          <div className="py4 lg-two-columns gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <label>Color Palette</label>
                <h3>Yarden's new color system</h3>
                <p className="my1">
                  At this time the color system is more of a suggestion than a
                  strict rule. Designers are free to use any color, illustration
                  or photography to get the job done.
                </p>
              </div>
            </div>

            <div className="color-cells-container gap2">
              <div className="p3" style={{ background: "#ffffff" }}>
                <label>#ffffff</label>
                <h2>White</h2>
                <p>
                  Looks clean everywhere. Highly visible and easy to use a lot
                  of this color. In our UI we especially make use of a light
                  theme.
                </p>
              </div>

              <div
                className="p3"
                style={{ background: "#000000", color: "white" }}
              >
                <label>#000000</label>
                <h3>Black</h3>
                <p>
                  Highest visibility possible on a white background. Designer's
                  could feel free to make a dark theme.
                </p>
              </div>

              <div className="p3" style={{ background: "#00ff00" }}>
                <label>#00ff00</label>
                <h2>Green</h2>
                <p>
                  Say what you wanna say about this color. But one thing you can
                  say is, <i>"I can see it."</i> Even though we're a tech
                  company, physical signage is a big part of our advertising, so
                  this is a color that when used in small amounts can still be
                  effective.
                </p>
              </div>

              <div
                className="p3"
                style={{ background: "#330099", color: "white" }}
              >
                <label>#330099</label>
                <h2>Blurple</h2>
                <p>
                  We gotta balance out this green somehow so lets have a nice
                  cool purple. Designers could make a purple theme if they wish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* fleet section */}
        <section>
          <div className="py4 lg-two-columns gap4">
            <div>
              <div style={{ position: "sticky", top: "var(--unit4)" }}>
                <label>Fleet</label>
                <h3>Branded Trucks</h3>
                <p className="my1">
                  A big part of Yarden's marketing relies on physical signage.
                  One of the most visible assets that we have is our fleet of
                  trucks. Each truck is outfitted with cut vinyl stickers and qr
                  codes with tracking capabilities. When a qr code on the truck
                  is scanned we can see an approximate location and other data
                  that we use to inform our targeting for our marketing
                  campaigns.
                </p>
              </div>
            </div>

            <div className="color-cells-container gap2">
              <img
                loading="lazy"
                src={truckFront}
                alt="truck front"
                className="whole shadowDown"
                style={{ borderRadius: "var(--unit1)" }}
              />
              <img
                loading="lazy"
                src={truckBack}
                alt="truck back"
                className="whole shadowDown"
                style={{ borderRadius: "var(--unit1)" }}
              />
              <img
                loading="lazy"
                src={truckLeft}
                alt="truck left"
                className="whole shadowDown"
                style={{ borderRadius: "var(--unit1)" }}
              />
              <img
                loading="lazy"
                src={truckRight}
                alt="truck right"
                className="whole shadowDown"
                style={{ borderRadius: "var(--unit1)" }}
              />
            </div>
          </div>
        </section>

        {/* website section */}
        <section className="lg-two-columns gap3 lg-gap4">
          <div>
            <img
              loading="lazy"
              className="whole shadowDown"
              src={yardenWebsiteScreenshot}
              alt="website screenshot"
              style={{ borderRadius: "var(--unit1)" }}
            />
          </div>
          <div>
            <label>Challenge #2.0:</label>
            <h2>Redesign the website</h2>
            <p className="pt1 pb2">
              There was a need to update the marketing website as we updated the
              brand. Before the mobile app was released this was the main entry
              for our customers to interact with Yarden. Today, we're
              experimenting with guiding our users toward using our mobile app.{" "}
              <a href="www.yardengarden.com">Visit the Yarden website</a>.
            </p>

            <div className="two-columns gap2">
              <div>
                <h5>A/B Testing</h5>
                <small>
                  In marketing A/B testing is crucial. This is a skill I picked
                  up while working at CRI Genetics. I use Google Optimize to
                  split traffic, and Google Analytics to collect and analyze
                  data.
                </small>
              </div>

              <div>
                <h5>User Analytics</h5>
                <small>
                  We use our internal data from Strype, Google Analytics, and
                  Hotjar.
                </small>
              </div>

              <div>
                <h5>Design System</h5>
                <small>
                  In software development, design systems make prototyping and
                  front-end development go faster by using design tokens.
                </small>
              </div>

              <div>
                <h5>Component Library</h5>
                <small>
                  Maintain React Component Libraries for the website, web app,
                  and React Native for the mobile app..
                </small>
              </div>
            </div>
          </div>
        </section>

        <section className="lg-two-columns gap3 lg-gap4 mt4">
          <div>
            <div style={{ position: "sticky", top: "var(--unit4)" }}>
              <label>Challenge #2.1:</label>
              <h2>Redesign the website again!</h2>
              <p className="pt1 pb2">
                In 2023 we decided that our product is in a good place and we
                want to focus more on our marketing. After trying different
                advertising platforms driving traffic to our site, we had to be
                honest with ourselves about a few things...
                <a href="www.yardengarden.com">Visit the NEW Yarden website</a>.
              </p>

              <div className="two-columns gap2">
                <div>
                  <h5>Site not converting</h5>
                  <small>
                    The site just wasn't converting no matter how much traffic
                    we drove to it.
                  </small>
                </div>

                <div>
                  <h5>Site is not useful...</h5>
                  <small>
                    We studied our users and found that our site design wasn't
                    helpful at all. Lots of users were simply lost.
                  </small>
                </div>

                <div>
                  <h5>Site is boring</h5>
                  <small>
                    Our site was not keeping our users engaged. We needed to
                    make it more fun and interactive.
                  </small>
                </div>

                <div>
                  <h5>Not enough info</h5>
                  <small>
                    When we looked at our competitors, we realized that we were
                    not giving our users enough information to make a decision.
                  </small>
                </div>

                <div>
                  <h5>How about some AI?</h5>
                  <small>
                    Make use of the the OpenAI API to act as a virtual assistant
                    to help answer user's questions.
                  </small>
                </div>

                <div>
                  <h5>No images of the product.</h5>
                  <small>
                    Use the AI text-to-image tool, Midjourney, to generate high
                    quality images of our garden beds.
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="gap3">
            <div>
              <label>Homepage</label>
              <img
                loading="lazy"
                className="whole shadowDown"
                src={yardenWebsiteRedesign2}
                alt="website screenshot"
                style={{ borderRadius: "var(--unit1)" }}
              />
            </div>

            <div>
              <label>Products & Services</label>
              <img
                loading="lazy"
                className="whole shadowDown"
                src={yardenProductsPage}
                alt="website screenshot"
                style={{ borderRadius: "var(--unit1)" }}
              />
            </div>
          </div>
        </section>

        {/* AI images section */}
        <section className="lg-two-columns gap3 lg-gap4 mt4">
          <div className="gap2 two-columns">
            {aiImages.map((image, index) => (
              <div>
                <label>{image.name}</label>
                <img
                  loading="lazy"
                  key={index}
                  className="whole shadowDown aiImage"
                  src={image.url}
                  alt="website screenshot"
                  style={{ borderRadius: "var(--unit1)" }}
                />
              </div>
            ))}
          </div>
          <div>
            <div style={{ position: "sticky", top: "var(--unit3)" }}>
              <label>Challenge #2.1.1:</label>
              <h2>Consistent Branding With AI Generated Images</h2>
              <p className="pt1 pb2">
                Product photography presents a unique challenge for our brand.
                Some customers are not comfortable with the idea of us using
                photographs of their property for marketing purposes. Also,
                every garden is different, making it a challenge to keep a
                consistent look and feel when viewing images of our product.
                This makes it difficult for our potential customers to imagine
                themselves with a garden, but not just any garden... a Yarden
                garden.
                <br />
                <br />
                With careful prompting and a little Photoshop magic, we were
                able to create a consistent look and feel for our product images
                that accurately represented what our potential customers could
                expect when they make a purchase.
              </p>

              <div className="md-two-columns gap2">
                <div>
                  <h5>White Space</h5>
                  <small>
                    White space is important for our brand. Our customers are
                    used to seeing e-commerce brands show their products in such
                    a way. Since the idea of gardening this way is quite new, we
                    need to close that gap and allow the user to see the garden
                    as a product they can buy online and allow them to use their
                    own imagination to complete the story of the images that
                    they see.
                  </small>
                </div>

                <div>
                  <h5>Depictions of Gardeners</h5>
                  <small>
                    Any time a Yarden employee is depicted in our brand, they
                    should be pictured wearing the purple Yarden t-shirt. This
                    will help with our storytelling and make the brand more
                    personal. Since part of our service requires our gardeners
                    to visit our customer's homes, we need to make sure that our
                    gardeners are easily identifiable from the moment our
                    gardener sets foot on the property.
                  </small>
                </div>

                <div>
                  <h5>Depictions of Gardens</h5>
                  <small>
                    Part of Yarden's promise to our customers is that they are
                    guaranteed to grow more food than they can eat. The problem
                    we wish to create for our customers is that they are
                    overwhelmed by the success of their garden, and forced to
                    give some of the food away to their neighbors and friends
                    while spreading the story of our company. Therefor, gardens
                    must be depicted as if they are overflowing with food while
                    also representing the actual dimensions and materials that
                    are used in real life.
                  </small>
                </div>

                <div>
                  <h5>Depictions of Harvests</h5>
                  <small>
                    Following the same logic as depictions of the gardens,
                    harvest boxes must be depicted as boxes of rich, vibrant,
                    colorful cornucopias of overwhelming success. This is really
                    the thing that we're selling! We want our customers to see
                    that we are serious about growing food and that we are not
                    just another landscaping company that is hear to mow lawns
                    and blow dead leaves away.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* the apps section */}
        <section className="lg-two-columns gap3 my4">
          <div>
            <label>Challenge #infinity:</label>
            <h2>The Apps</h2>
            <p className="py1">
              Yarden relies heavily on contracted workers to build and maintain
              our gardens. This means that we have to build something kind of
              like "Uber" for Gardenening, which has a customer-facing app, and
              a business-facing app. The customer facing app will be used to
              manage their interactions with the company and its
              representatives, while the gardeners will use the business-facing
              app to manage their work, get paid, and interactions with the
              customer, among other things.
            </p>

            <div className="md-two-columns gap2">
              <div>
                <h5>The Customer Facing App</h5>
                <small>
                  Our customers need a way to manage their accounts and interact with our business, so we made an app for web and iPhone that helps the customer handle any interactions with us. They can choose their crops, ask questions, schedule maintenance, manage their subscriptions, and order add-ons through the app.
                </small>
              </div>

              <div>
                <h5>The Business Facing App</h5>
                <small>
                  Our gardeners need a way to track their work and get paid, so we made an app for web and iPhone that helps the gardener handle any interactions with the customer and with administrative tasks.
                </small>
              </div>
            </div>
          </div>

          <div className="flex p3">
            <div>
              <img
                loading="lazy"
                width={"100%"}
                style={{
                  filter: "drop-shadow(0 6px 12px var(--transBlueC-25))",
                }}
                src={aiImages[0].url}
                alt="change date screen"
              />
            </div>
          </div>
        </section>

        <section className="lg-two-columns gap4 my4">
          <div>
            <div style={{ position: "sticky", top: "var(--unit4)" }}>
              <label>Challenge #infinity.1.1:</label>
              <h3>The Customer Facing Web-app</h3>
              <p>
                While we encourage our users to download our mobile app... some
                of them are simply resistant to the idea of downloading yet
                ANOTHER app on their phone. Also, our team is small and we don't
                have the resources to manage an iPhone app, AND an Android app,
                so we resolved to simply have a web app to fill in that gap. We
                are currently rebuilding our old web app so that it has all the
                same features as the iPhone app.
              </p>
            </div>
          </div>

          <div className="gap2">
            <img
              loading="lazy"
              className="app-img"
              src={customerDBSettings}
              alt="customer DB settings"
            />
            <img
              loading="lazy"
              className="app-img"
              src={customerDBPlants}
              alt="customer DB plants"
            />
            <img
              loading="lazy"
              className="app-img"
              src={customerDBQuotes}
              alt="customer DB quotes"
            />
            <img
              loading="lazy"
              className="app-img"
              src={customerDBOrders}
              alt="customer DB orders"
            />
          </div>
        </section>

        <section className="lg-two-columns gap4 my4">
          <div className="gap2">
            {bizDashImages.map((img, index) => (
              <img
                loading="lazy"
                key={index}
                className="app-img"
                src={bizDashImages[index]}
                alt="business dashboard"
              />
            ))}
          </div>
          <div>
            <div style={{ position: "sticky", top: "var(--unit4)" }}>
              <label>Challenge #infinity.1.2:</label>
              <h3>The Business Facing Web-app</h3>
              <small>
                [DISCLAIMER*: Some parts of this app can't be shared online
                because it contains personal data from our users]
              </small>
              <p>
                The purpose of this side of the app is to manage our contract
                workers. Through this the gardeners are able to manage their
                orders and keep track of interactions between them and the
                customer, harvest data, and many other aspects of their work. On
                the administrative side we can also track customer issues and
                generally handle all customer service internally.
              </p>
            </div>
          </div>
        </section>

        {/* mobile app section */}
        <section className="lg-two-columns my4">
          <div>
            <label>Challenge #infinity.2.0:</label>
            <h2>Launch the mobile app</h2>
            <p className="py1">
              It took us about a 6 months to build and launch the Yarden Mobile
              app. In summer 2022 it was deployed the the App Store. There is a
              business facing side for our gardeners and administration, and a
              customers' side. We are currently building new features and
              seeking investors.
            </p>
            <div className="flex p3">
              <div>
                <img
                  loading="lazy"
                  width={"100%"}
                  style={{
                    filter: "drop-shadow(0 6px 12px var(--transBlueC-25))",
                  }}
                  src={changeDateScreen}
                  alt="change date screen"
                />
              </div>
              <div>
                {" "}
                <img
                  loading="lazy"
                  width={"100%"}
                  style={{
                    filter: "drop-shadow(0 6px 12px var(--transBlueC-25))",
                  }}
                  src={plantSelectionScreen}
                  alt="plant selection screen"
                />
              </div>
            </div>
          </div>

          <div className="flex-center flex-vertical">
            <div className="width4 my3">
              <YardenAppStoreQRCode />
            </div>
            <div>
              <YardenLogo />
            </div>
            <p>
              Download Yarden on the{" "}
              <a href="https://apps.apple.com/gb/developer/yarden-garden-inc/id1626672981">
                App Store
              </a>
            </p>
          </div>
        </section>

        {/* garden map section */}
        <section>
          <div>
            <label>Challenge #infinity.2.1:</label>
            <h3>The "Garden Map"</h3>
          </div>

          <div className="gap3 lg-two-columns lg-gap4 pb4">
            <div>
              <p>
                When we first released the app, we were really proud, this is my
                first ever mobile app. The excitement of finally having an app
                on the app store quickly wears off after we see how it's being
                used.
              </p>
              <p>
                It was time to empathize with our customers and our gardeners to
                figure out how to improve the product.
              </p>
              <div className="md-two-columns gap3 mt3">
                <div>
                  <h5>Customer Boredom</h5>
                  <small>
                    After downloading the app and setting up an appointment,
                    customers didn't really find the app useful.
                  </small>
                </div>
                <div>
                  <h5>Mental Connection</h5>
                  <small>
                    After garden beds are installed, users are left with an app
                    that doesn't do much and a box full of dirt on the ground.
                    We need an abstract way to connect the two things in some
                    way.
                  </small>
                </div>
                <div>
                  <h5>Gardening Tools</h5>
                  <small>
                    Gardener's need a way to share information about what's
                    growing in user's gardens without having to put together a
                    big presentation.
                  </small>
                </div>
                <div>
                  <h5>Project Management</h5>
                  <small>
                    Gardeners also need a way to plan the layout of a garden,
                    and know where everything will go before they plant it.
                  </small>
                </div>
              </div>
            </div>
            <div className="flex-center flex-vertical">
              <img
                loading="lazy"
                src={GardenMap}
                alt="Garden Map"
                width="60%"
              />
              <small>This is the gardener's view...</small>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Yarden;
