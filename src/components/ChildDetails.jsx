import React from "react";
import { useParams, Link } from "react-router-dom";
import "../CSS/ChildDetails.css";

const ChildDetails = () => {
  const { id } = useParams();

  // Static data for children (Replace this with API call in real apps)
  const children = [
    {
      id: 1,
      name: "Nitya Ansari",
      age: 6,
      photo:
        "https://anakoskaphotography.com/wp-content/uploads/2018/09/professional-picture-of-a-cute-baby-boy-in-white.jpg",
      description:
        "John loves drawing, playing outdoors, and has a fascination with animals. ",
      background:
        "John is a very cheerful child who dreams of becoming an artist.",
      hobbies: "Drawing, playing with pets, cycling.",
      additionalInfo:
        "John's favorite animal is a dog, and he enjoys spending time at the zoo.",
    },
    {
      id: 2,
      name: "Vidhya",
      age: 8,
      photo:
        "https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
      description:
        "Jane enjoys reading books, solving puzzles, and playing chess.",
      background: "Jane excels in academics and loves spending time in nature.",
      hobbies: "Reading, solving riddles, and playing chess.",
      additionalInfo:
        "Jane is curious about science and loves attending nature camps.",
    },
    {
      id: 3,
      name: "Aaryan",
      age: 5,
      photo:
        "https://cdn.pixabay.com/photo/2016/05/31/11/26/baby-1426651_1280.jpg",
      description: "Alice is energetic and loves dancing and playing sports.",
      background:
        "Alice is very social and always ready to try new activities.",
      hobbies: "Dancing, soccer, and painting.",
      additionalInfo:
        "Alice loves to perform and is excited about joining a family that appreciates creativity.",
    },
  ];

  const child = children.find((child) => child.id === parseInt(id));

  if (!child) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">🚫 Child Not Found</h2>
        <p className="text-muted">
          The child you are looking for doesn't exist or may have been adopted.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Not Found"
          className="img-fluid not-found-img"
        />
        <Link to="/available-children" className="btn btn-primary mt-3">
          🔙 Back to Available Children
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={child.photo}
            alt={`${child.name}'s photo`}
            className="child-details-img"
          />
        </div>

        {/* Details Section */}
        <div className="col-md-6">
          <h2 className="mb-4">{child.name}</h2>
          <p>
            <strong>Age:</strong> {child.age}
          </p>
          <p>
            <strong>Description:</strong> {child.description}
          </p>
          <p>
            <strong>Background:</strong> {child.background}
          </p>
          <p>
            <strong>Hobbies:</strong> {child.hobbies}
          </p>
          <p>
            <strong>Additional Info:</strong> {child.additionalInfo}
          </p>

          {/* Buttons */}
          <div className="btn-group mt-3">
            <Link
              to={{
                pathname: "/adopt-now",
                state: { name: child.name, age: child.age, photo: child.photo },
              }}
              className="btn btn-success mt-2"
            >
              ✅ Proceed to Adopt
            </Link>

            <Link to="/available-children" className="btn btn-secondary mt-2  ">
              🔙 Back to List
            </Link>
          </div>
        </div>
      </div>
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis consequatur suscipit nobis exercitationem repellendus accusamus non aliquid! Rem reprehenderit voluptate dolorum, id placeat laborum. Cumque quis quidem nesciunt maiores, nobis ea consectetur dolor placeat dolores. Accusamus, obcaecati? Enim omnis inventore esse, praesentium illum ad odio excepturi non reprehenderit quisquam ratione dolorum suscipit dolore alias fugit illo expedita eum asperiores quae aut dolores ipsa iusto officia nemo. Accusantium nostrum magni ex quibusdam deleniti, adipisci, ipsam facere dolore quaerat inventore sed culpa doloremque modi molestias cupiditate harum assumenda debitis in maiores! Architecto ut error modi nesciunt, animi quod nemo perspiciatis! A sit, beatae doloremque ab maiores odio, exercitationem explicabo quasi atque, non repudiandae numquam? Totam enim quibusdam magnam? Nesciunt, maiores sit distinctio neque suscipit sint, blanditiis est cum possimus quas molestiae ratione fuga soluta sapiente ex similique tenetur dolore? Voluptas quo alias adipisci libero quidem consectetur assumenda totam ipsa iure sunt odit quibusdam soluta, repellendus accusantium dolores beatae officia culpa velit molestiae recusandae cumque reprehenderit. Commodi sunt totam earum autem neque est aut distinctio magnam accusantium quibusdam molestias cum, laboriosam voluptatibus architecto laudantium laborum. Accusantium vero asperiores et nihil ad dolorum, debitis quaerat, itaque atque repellendus sequi, odit maiores voluptatibus esse iure consectetur! Veniam accusamus nam similique qui. Magni, quas. Sed mollitia eos dolores, sequi labore quis iusto, aspernatur optio excepturi voluptatem corporis magnam animi, officiis necessitatibus accusantium. Earum optio eius in unde harum. Necessitatibus et, dolorum veniam ex recusandae quam vitae non modi sit, nulla, quia eaque. Incidunt ea beatae maiores impedit sapiente, ut pariatur veniam magni temporibus rerum iure, saepe aliquam. Iure dolorum doloribus iste. Modi quibusdam fugit quae odit, asperiores quam voluptas accusamus provident dolores, voluptate possimus illum error? Eligendi dignissimos quis voluptatum neque cupiditate sed, laboriosam aliquam veniam. Tenetur magni soluta tempore corrupti! Repellendus labore dolorem debitis iure blanditiis libero, nobis illum, ex exercitationem atque saepe facilis fugiat quis aperiam at nesciunt et repellat veniam laboriosam accusantium tempore harum? Numquam, quia! Ullam, voluptates esse, optio ipsam dolorum veniam est qui nemo mollitia magni neque nisi cum. Exercitationem quisquam repellat impedit voluptatum ratione architecto inventore delectus maiores provident, vitae voluptas quibusdam? Quia modi quas commodi, accusantium natus praesentium eum pariatur dolorem doloribus corrupti, placeat maiores vitae reiciendis quaerat labore molestiae. Voluptatem fuga saepe a nam qui! Nam magni consequatur tenetur molestias repellat mollitia rem eveniet non provident deleniti iure, itaque maxime ipsam, architecto quo excepturi natus neque explicabo aliquam culpa maiores, esse ratione earum. Possimus, quibusdam beatae esse laboriosam id tempora fugit pariatur sunt, nostrum deserunt est provident architecto eius enim incidunt, ipsam quasi maxime natus sint quaerat error. Corporis, optio molestias sequi voluptates aliquam voluptate earum amet repudiandae quaerat, labore quibusdam excepturi recusandae nisi expedita adipisci tempora dignissimos modi ipsa error, debitis repellendus!
    </div>
  );
};

export default ChildDetails;
