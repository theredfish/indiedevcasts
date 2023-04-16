import Date from "components/date";
import H2 from "components/typo/h2";

export default async function Page() {
  return (
    <div className="blog-container md:text-lg">
      <H2>Privacy Policy</H2>
      <h3 className="text-xl text-slate-600">
        Last Update: <Date dateString="2023-04-19" />
      </h3>
      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">General</h3>
      <p>
        At Indiedevcasts ("we", "us", "our") respecting our website users'
        ("user", "you", "your") data is a priority. We limit our processing of
        personal data to only what is necessary to navigate our website. We
        respect your rights guaranteed by the European Regulation on the
        Protection of Personal Data (GDPR) of April 27, 2016.
      </p>
      <p className="mt-5">
        By voluntarily providing us with personal data through the usage of our
        website, you consent to the storage and processing of your data in
        accordance with this Privacy Policy. Except for the specific needs
        detailed below, Indiedevcasts does not access neither exploits your
        data.
      </p>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Data processing
      </h3>
      <h4 className="text-xl md:text-2xl mt-10 mb-5 capitalize">
        Website traffic
      </h4>
      <p>
        During your visit to the website, accessible at{" "}
        <a href="https://indiedevcasts.com">indiedevcasts.com</a>, we collect
        data to analyze overall trends of our website traffic. We use the
        service <a href="https://plausible.io/">plausible.io</a> provided by
        Plausible Insights OÜ Västriku tn 2, 50403, Tartu, Estonia. Their
        service does not collect any personal data and does not use cookies.
        These data necessary for the proper administration of the site include:
      </p>
      <ul className="list-inside list-disc mt-5">
        <li>Page URL to get page views;</li>
        <li>HTTP Referer to get the number of visitors from other sites;</li>
        <li>Your operating system (e.g Mac OS, Windows, ...);</li>
        <li>Your browser (e.g Chome, Firefox, ...) and its version;</li>
        <li>Your device type (e.g Desktop, mobile, tablet, ...);</li>
        <li>
          Your country, region and city (e.g United Kingdom, England, London).
        </li>
      </ul>
      <p className="mt-5">
        For more information about how the data is collected and processed by
        Plausible, you can refer to their{" "}
        <a href="https://plausible.io/data-policy">Data Policy</a> and their{" "}
        <a href="https://plausible.io/privacy">Privacy Policy</a>. This
        processing is carried out in the context of the legitimate interests of
        Indiedevcasts to analyze overall trends of its website traffic (Article
        6.1.f of the GDPR).
      </p>
      <h4 className="text-xl md:text-2xl mt-10 mb-5 capitalize">
        Mailing list
      </h4>
      <p>
        We use Mailchimp, service provided by The Rocket Science Group, LLC 675
        Ponce de Leon Ave NE Suite 5000 Atlanta, GA 30308 USA. By visiting our
        website you have the option to subscribe to our newsletter by providing
        your email address that we'll collect and use through Mailchimp to send
        you emails. During the registration process, managed by Mailchimp, you
        can opt-in to our promotional content regarding our video games, tools
        and services for video game developers. You can unsubscribe and update
        your preferences at any time by clicking on the link in the footer of
        our emails. Learn more about their{" "}
        <a className="link" href="https://mailchimp.com/legal/">
          Legal terms
        </a>{" "}
        on their website.
      </p>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">Cookies</h3>
      <p>
        Cookies are small text files that are placed on your device when you
        visit a website. They are commonly used to remember your preferences,
        login details, and other settings. The use of cookies is regulated under
        the General Data Protection Regulation (GDPR), which requires websites
        to obtain user consent before storing or accessing cookies on their
        device. There are different types of cookies, including session cookies,
        which are deleted when you close your browser, and persistent cookies,
        which remain on your device until they expire or are manually deleted.
        Some cookies are essential for the proper functioning of a website,
        while others are used for analytics, advertising, or other purposes. If
        a website uses cookies, it must provide clear and comprehensive
        information about the cookies it uses, their purpose, and the legal
        basis for their use. It is also necessary to obtain user consent before
        storing or accessing cookies on their device.
      </p>

      <h4 className="text-xl md:text-2xl mt-10 mb-5 capitalize">
        Our cookie policy
      </h4>
      <p>
        We take your privacy seriously and are committed to complying with the
        GDPR and other data protection laws. Since we do not use any cookies,
        you do not need to take any action or give your consent to the use of
        cookies on our website. If you have any questions about our privacy
        policy or the way we handle your personal data, please contact us
        through the contact details provided in our{" "}
        <a href="/legal-notice">Legal Notice</a>.
      </p>

      <h3 className="text-3xl md:text-4xl mt-10 mb-5 capitalize">
        Your rights
      </h3>
      <p>
        Exercising your rights is an essential aspect of data protection and
        privacy policies. Under the General Data Protection Regulation (GDPR),
        individuals have the right to access, rectify, erase, restrict, or
        object to the processing of their personal data. As a website user, you
        have the right to know what personal data is being collected, for what
        purpose, and how it will be processed. You also have the right to
        request access to your data, ask for corrections, and in some cases,
        request that your data be deleted or transferred. Additionally, if you
        believe that your data has been processed unlawfully, you have the right
        to file a complaint to the CNIL (the French data protection authority),
        or to a competent national Data Protection Authority that you can find
        on the{" "}
        <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en">
          European Data Protection Board website
        </a>
        . We are committed to protecting your personal data and we encourage you
        to exercise your rights.
      </p>

      <p className="mt-5">
        You can exercise these rights by writing to us at{" "}
        <a href="mailto:hello@indiedevcasts.com">hello@indiedevcasts.com</a> or
        to the address you will find in our{" "}
        <a href="/legal-notice">Legal Notice</a>, for the attention of Julian
        Didier (DPO). We will do our best to respond to your requests in a
        timely and efficient manner.
      </p>
    </div>
  );
}
