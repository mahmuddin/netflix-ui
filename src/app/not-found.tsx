import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link href="/">Go back to home</Link>
        </div>
    );
}