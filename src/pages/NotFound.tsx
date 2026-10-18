import { Link } from "react-router-dom";
import SignalField from "@/components/fx/SignalField";

const NotFound = () => (
  <div className="relative grid min-h-screen place-items-center overflow-hidden px-6 text-center">
    <div className="absolute inset-0 opacity-60" aria-hidden="true">
      <SignalField />
    </div>
    <div className="relative">
      <p className="eyebrow">Signal lost</p>
      <h1 className="text-gradient mt-3 text-8xl font-semibold tracking-tighter">404</h1>
      <p className="mt-4 text-muted-foreground">This page isn’t on the wire.</p>
      <Link to="/" className="mt-8 inline-block rounded-xl bg-foreground px-6 py-3 font-medium text-background">
        Return home
      </Link>
    </div>
  </div>
);

export default NotFound;
