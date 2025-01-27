import "../CSS/Home_Hero.css";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Every Child Deserves a Loving Home</h1>
          <p className="hero-subtext">
            Join us in creating brighter futures. Start your adoption journey
            today.
          </p>
          <div className="form-container">
            <select className="dropdown">
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="girl">Girl</option>
              <option value="boy">Boy</option>
            </select>
            <select className="dropdown">
              <option value="" disabled selected>
                Select Age Group
              </option>
              <option value="infant">Infant (0-2 years)</option>
              <option value="toddler">Toddler (2-5 years)</option>
              <option value="teen">Teen (6+ years)</option>
            </select>
            <select className="dropdown">
              <option value="" disabled selected>
                Select Location
              </option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
            </select>
            <button className="search-button">Find Children</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        {/* Card 1: In Focus */}
        <div className="card">
          <h5 className="card-title">In Focus</h5>
          <ul className="list-group">
            <li className="list-group-item">
              Comprehensive adoption benefits for children.
            </li>
            <li className="list-group-item">
              Initiatives for building stronger, secure families.
            </li>
            <li className="list-group-item">
              Nationwide support and resources for families.
            </li>
            <li className="list-group-item">
              Educational programs for family development.
            </li>
            <li className="list-group-item">
              Affordable healthcare services for families in need.
            </li>
            <li className="list-group-item">
              Expert counseling for parents and guardians.
            </li>
          </ul>
        </div>

        {/* Card 2: Media Resources */}
        <div className="card">
          <h5 className="card-title">Media Resources</h5>
          <ul className="list-group">
            <li className="list-group-item">
              Success stories of adoptive families
            </li>
            <li className="list-group-item">Promoting awareness campaigns</li>
            <li className="list-group-item">Resources for parents-to-be</li>
          </ul>
        </div>

        {/* Card 3: Legal Information */}
        <div className="card">
          <h5 className="card-title">Legal Information</h5>
          <ul className="list-group">
            <li className="list-group-item">
              Legal guidelines for adopting parents
            </li>
            <li className="list-group-item">
              Legal responsibilities of adoption agencies
            </li>
            <li className="list-group-item">
              International adoption legalities
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Pure Love</h1>
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#ff6f61",
              marginBottom: "10px",
            }}
          >
            "A Bond Beyond Words"
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#555",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Experience the joy of unconditional love as two hearts become one.
            The start of a forever family begins here.
          </p>

          <video
            width="100%"
            height="650px"
            controls
            controlsList="nodownload nofullscreen"
            autoPlay
            loop
            muted
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              display: "block",
              objectFit: "cover",
            }}
          >
            <source
              src="https://video-previews.elements.envatousercontent.com/files/b26795b6-e1d4-491c-b66b-29bde92854a9/video_preview_h264.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="adoption-container">
        {/* Why Adopt Section */}
        <div className="adoption-section">
          <div className="adoption-content1">
            <h2>Why Adopt?</h2>
            <p>
              Adopting a child is an extraordinary way to make a difference in
              someone's life. It offers an opportunity to provide a loving,
              stable home to a child in need. Adoption allows you to share your
              love, values, and life experiences with a child who can benefit
              from them. Adoptive parents create families, not out of biological
              necessity, but through choice and commitment. In doing so, they
              bring immeasurable joy to both their lives and the lives of the
              children they welcome. Adoption breaks barriers, offers a fresh
              start, and builds new connections, making the world a more
              compassionate place. Each adoption story is unique, filled with
              hope, growth, and endless possibilities. By adopting, you help
              raise a new generation of individuals who will contribute
              positively to society. It’s not just about changing a child’s life
              — it’s about enriching your own. Together, families grow stronger,
              communities become more united, and futures are brighter. Adoption
              is not just a gift for children in need; it’s a life-changing
              experience for those who open their hearts to parenthood in its
              most pure form.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-photo/portrait-affectionate-loving-family_23-2151025303.jpg?t=st=1737826101~exp=1737829701~hmac=161aed35be64a348450c37f32d4b417beeca61c7301dd8f0516d7c143e415dc1&w=996"
            alt="Why Adopt"
            className="adoption-image1"
          />
        </div>

        {/* Success Stories Section */}
        <div className="adoption-section row-left">
          <img
            src="https://img.freepik.com/free-photo/happy-see-each-other-family-have-good-time-parkland-young-painter-teaching-how-draw_146671-16231.jpg?t=st=1737826283~exp=1737829883~hmac=ebbe52df1eb2f6f70a9207b9fb8206b351735f2e5dfe7b8b5a14bcb246302f7f&w=996"
            alt="Success Stories"
            className="adoption-image2"
          />
          <div className="adoption-content2">
            <h2>Success Stories</h2>
            <p>
              Adoption is a journey of growth, love, and transformation. Each
              success story begins with a child finding a family that embraces
              them with open arms. These stories are a testament to the strength
              of love, the power of second chances, and the endless potential
              for change. Families who adopt often speak of the profound impact
              it has on their lives, as they witness their children flourish and
              thrive. From overcoming initial challenges to celebrating
              milestones, each moment becomes a cherished memory. Children who
              were once uncertain about their future now have the opportunity to
              dream, to achieve, and to succeed. They grow into confident,
              compassionate individuals, empowered by the unwavering support of
              their adoptive families. For adoptive parents, these stories
              reflect the joy of seeing their children succeed in ways they
              never imagined. It is a bond that goes beyond biology, a
              connection built on care, dedication, and unconditional love. The
              journey of adoption is one of transformation — not just for the
              child, but for the family as well. These success stories inspire
              hope, reminding us all that love can overcome any obstacle, and
              every child deserves a chance to shine.
            </p>
          </div>
        </div>

        {/* How Adoption Works Section */}
        <div className="adoption-section row-right">
          <div className="adoption-content3">
            <h2>How Adoption Works</h2>
            <p>
              Adoption is a legal process through which a person or couple
              becomes the permanent, legal parent(s) of a child. The first step
              is usually deciding the type of adoption that suits your family —
              whether domestic, international, or through foster care. The
              process begins with an application, where prospective parents
              provide detailed information about themselves, their background,
              and their lifestyle. Next, a home study is conducted, which
              assesses the readiness of the family to adopt, ensuring the
              environment is safe and supportive. Once the home study is
              approved, families can begin matching with children. Adoption
              agencies or legal professionals work to find the best match based
              on the child's needs and the family’s capabilities. This process
              may take some time, as each child and family are unique. After a
              match is made, there is a transition period where the child gets
              to know the family, often starting with visits or temporary
              placements. Once the child has adjusted, the legal adoption
              process is completed, giving the parents full parental rights.
              Finally, adoption is officially finalized in court, and the child
              becomes a permanent member of the family. From that moment on, the
              family provides love, care, and support, marking the beginning of
              a new chapter in their lives.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-photo/great-family_1157-5332.jpg?t=st=1737826338~exp=1737829938~hmac=26d88275c272280d301a9294e0fcc7c16cc97d8289bf2b1d2d8e0501f2e15bcf&w=996"
            alt="How Adoption Works"
            className="adoption-image3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
