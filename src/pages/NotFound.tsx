import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="grid min-h-screen place-items-center px-6 text-center">
    <div>
      <p className="label">Error 404</p>
      <h1 className="mt-4 font-serif text-6xl font-light tracking-tight">Page not found</h1>
      <Link to="/" className="mt-8 inline-block rounded-sm bg-ink px-5 py-3 text-sm text-paper">
        Return home
      </Link>
    </div>
  </div>
);

export default NotFound;
