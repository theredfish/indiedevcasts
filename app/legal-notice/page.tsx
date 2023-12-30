import Date from "components/date";
import H2 from "components/typo/h2";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="blog-container text-lg">
      <H2>Legal Notice</H2>
      <h3 className="text-xl text-slate-600">
        Last Update: <Date dateString="2023-12-30" />
      </h3>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5">Legal Information</h3>
      <p>
        This website is hosted by Vercel Inc., located at 440 N Barranca Ave
        #4133 Covina, CA 91723.
      </p>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5">Contact</h3>
      <ul className="list-inside list-disc mt-4">
        <li>
          <a href="mailto:hello@indiedevcasts.com">hello@indiedevcasts.com</a>
        </li>
      </ul>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5">Policies</h3>
      <p>
        All information provided by you in connection with the Website shall be
        subject to the <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </div>
  );
}
