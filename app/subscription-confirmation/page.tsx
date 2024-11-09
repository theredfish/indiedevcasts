import H2 from "components/typo/h2";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="blog-container text-lg h-full">
      <H2>Subscription</H2>
      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Your rock! Thank you so much ❤️!
      </h3>
      <p>
        Your subscription directly supports the creation of articles, streams,
        and games. Over the coming months, your support will unlock access to
        premium, subscribers-only content! I'm incredibly grateful for your
        early support. Each step gets me closer to becoming a full-time indie
        game developer!
      </p>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Special thanks
      </h3>
      <p className="mt-2">
        If you provided a handle for special thanks, it'll be added to the{" "}
        <Link href="/support">support page</Link> within a few days. Your name
        will also be featured at the end of my streams! If you need to update
        this information please reach out at{" "}
        <a href="mailto:hello@indiedevcasts.com">hello@indiedevcasts.com</a>.
      </p>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Verify your email
      </h3>
      <p className="mt-2">
        Please check your inbox for a subscription confirmation email with all
        the links you'll need to manage your subscription. If you don't see it,
        be sure to check your spam folder. If you need any assistance, feel free
        to contact support at{" "}
        <a href="mailto:hello@indiedevcasts.com">hello@indiedevcasts.com</a>.
      </p>
      <br />
      <p>
        You're all set! You can now head back to the{" "}
        <Link href="/">homepage</Link>!
      </p>
    </div>
  );
}
