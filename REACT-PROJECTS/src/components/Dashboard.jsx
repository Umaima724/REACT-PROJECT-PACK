import { Link } from "react-router-dom";
import {
  FaList,
  FaPalette,
  FaStar,
  FaImages,
  FaPlusCircle,
  FaQrcode,
  FaCloudSun,
  FaUtensils,
} from "react-icons/fa";
import "./dashboard.css";

const apps = [
  {
    name: "Accordion",
    icon: <FaList />,
    path: "/accordion",
    desc: "Expandable FAQ component",
  },
  {
    name: "Random Color",
    icon: <FaPalette />,
    path: "/random-color",
    desc: "Generate random colors",
  },
  {
    name: "Star Rating",
    icon: <FaStar />,
    path: "/star-rating",
    desc: "Interactive rating system",
  },
  {
    name: "Image Slider",
    icon: <FaImages />,
    path: "/image-slider",
    desc: "Responsive image carousel",
  },
  {
    name: "Load More",
    icon: <FaPlusCircle />,
    path: "/load-more",
    desc: "Pagination example",
  },
  {
    name: "QR Generator",
    icon: <FaQrcode />,
    path: "/qr-code",
    desc: "Generate QR Codes",
  },
  {
    name: "Weather App",
    icon: <FaCloudSun />,
    path: "/weather",
    desc: "Live weather information",
  },
  {
    name: "Food Recipe",
    icon: <FaUtensils />,
    path: "/food",
    desc: "Recipe finder",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="hero">
        <h1>React Mini Projects</h1>
        <p>
          A collection of reusable React components and applications built
          while learning React.
        </p>
      </div>

      <div className="cards">
        {apps.map((app) => (
          <Link to={app.path} key={app.path} className="card">
            <div className="icon">{app.icon}</div>

            <h2>{app.name}</h2>

            <p>{app.desc}</p>

            <button>Open Project →</button>
          </Link>
        ))}
      </div>
    </div>
  );
}