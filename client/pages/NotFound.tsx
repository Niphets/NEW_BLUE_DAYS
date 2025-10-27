import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/5 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            404
          </h1>
          <div className="text-6xl mb-6">🎭</div>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          It looks like this page doesn't exist. But don't worry, let's get you back to planning your perfect event!
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
