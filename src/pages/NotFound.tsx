import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center pt-20">
        <Container>
          <div className="text-center">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="text-3xl font-bold text-primary mt-4">Page Not Found</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="mt-8">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFound;
