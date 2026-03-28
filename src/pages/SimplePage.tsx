import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";

type SimplePageProps = {
  title: string;
  description?: string;
};

export function SimplePage({ title, description }: SimplePageProps) {
  useEffect(() => {
    document.title = `${title} | Mahi Solar Energy`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);

  return (
    <>
      <div className="container mx-auto max-w-2xl px-4 pt-28 pb-16">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
        <p className="mb-8 text-muted-foreground">
          {description ??
            "This page is coming soon. For enquiries, please reach out through our contact channels."}
        </p>
        <Link to="/" className="font-medium text-primary underline-offset-4 hover:underline">
          ← Back to home
        </Link>
      </div>
      <Footer />
    </>
  );
}
