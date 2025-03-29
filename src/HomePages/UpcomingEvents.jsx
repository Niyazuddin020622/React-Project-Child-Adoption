import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const events = [
  {
    id: 1,
    title: "Adoption Awareness Webinar",
    date: "March 15, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Online (Zoom)",
    description:
      "Learn about the adoption process and legal guidelines from experts.",
    image: "https://familiesofjoy.org/wp-content/uploads/2021/03/Talk04.png",
  },
  {
    id: 2,
    title: "Meet & Greet with Adoptive Parents",
    date: "April 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Community Center, Delhi",
    description:
      "Hear real adoption stories and connect with families who have adopted.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.VdVIIYlXx6WlGkhPLuCy3wHaD7&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    title: "Legal Adoption Process Workshop",
    date: "April 20, 2025",
    time: "11:00 AM - 1:00 PM",
    location: "Family Court, Mumbai",
    description:
      "A detailed session with legal experts on adoption rights and documentation.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.QW50kFY1BitPAfLCW1AfwgHaD_&pid=Api&P=0&h=180",
  },
];

function UpcomingEvents() {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">📅 Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card shadow-lg border-0 event-card">
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="text-muted">
                  📅 {event.date} | ⏰ {event.time} <br />
                  📍 {event.location}
                </p>
                <p className="card-text">{event.description}</p>
                <Link to="/eventregister" className="btn btn-primary">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
