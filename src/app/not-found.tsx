import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sand-50 px-5 text-center">
      <p className="text-sm font-semibold tracking-[0.2em] text-cyan-500 uppercase">404</p>
      <h1 className="font-display mt-3 text-3xl text-navy-900">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}
