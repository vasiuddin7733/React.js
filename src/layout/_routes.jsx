import * as React from "react";

const LandingPage = React.lazy(() => import("../containers/_landing-page.jsx"));
const Lehrkrafte = React.lazy(() => import("../containers/_lehrkrafte.jsx"));
const Elternseite = React.lazy(() =>
  import("../containers/_erziehungsberechtigte.jsx"),
);
const DualeAusbildung = React.lazy(() =>
  import("../containers/_duale-ausbildung.jsx"),
);
const News = React.lazy(() => import("../containers/_news.jsx"));
// const NewsDetails = React.lazy(() => import("../containers/_news-details.jsx"));
const Presse = React.lazy(() => import("../containers/_presse.jsx"));
const PresseDetails = React.lazy(() =>
  import("../containers/_presse-details.jsx"),
);
const Uberuns = React.lazy(() => import("../containers/_uber_uns.jsx"));
const Schuler = React.lazy(() => import("../containers/_schuler.jsx"));
const Datenschutz = React.lazy(() => import("../containers/_datenschutz.jsx"));
const AGB = React.lazy(() => import("../containers/_agb.jsx"));
const Impressum = React.lazy(() => import("../containers/_impressum.jsx"));
const Betriebe = React.lazy(() => import("../containers/_betriebe.jsx"));
const Partner = React.lazy(() => import("../containers/_partner.jsx"));
// const PartnerDetails = React.lazy(() =>
//   import("../containers/_partner-details.jsx"),
// );
const Kontakt = React.lazy(() => import("../containers/_kontakt.jsx"));
const Validation = React.lazy(() => import("../containers/_validation.jsx"));

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    main: () => <LandingPage />,
  },
  {
    path: "/schueler",
    exact: true,
    label: "Schüler*innen",
    main: () => <Schuler />,
  },
  {
    path: "/ausbilder",
    exact: true,
    label: "Ausbilder*innen",
    main: () => <Betriebe />,
  },
  {
    path: "/lehrkraefte",
    exact: true,
    label: "Lehrkräfte",
    main: () => <Lehrkrafte />,
  },
  {
    path: "/erziehungsberechtigte",
    exact: true,
    label: "Erziehungsberechtigte",
    main: () => <Elternseite />,
  },
  {
    path: "/partner",
    exact: true,
    label: "Partner*innen",
    main: () => <Partner />,
  },
  {
    path: "/news",
    exact: true,
    label: "News & Events",
    main: () => <News />,
  },
  {
    path: "/duale-ausbildung",
    exact: true,
    label: "Duale Ausbildung",
    main: () => <DualeAusbildung />,
  },
  // {
  //   path: "/news/:newsSlug",
  //   exact: true,
  //   label: "News Details",
  //   main: () => <NewsDetails />,
  // },
  {
    path: "/presse",
    exact: true,
    label: "Presse",
    main: () => <Presse />,
  },
  {
    path: "/presse/:presseIndex",
    exact: true,
    label: "Presse Details",
    main: () => <PresseDetails />,
  },
  {
    path: "/ueber_uns",
    exact: true,
    label: "Über uns",
    main: () => <Uberuns />,
  },
  {
    path: "/datenschutz",
    exact: true,
    label: "Datenschutz",
    main: () => <Datenschutz />,
  },
  {
    path: "/agb",
    exact: true,
    label: "AGB",
    main: () => <AGB />,
  },
  {
    path: "/impressum",
    exact: true,
    label: "Impressum",
    main: () => <Impressum />,
  },
  // {
  //   path: "/partner-details/:partnerIndex",
  //   exact: true,
  //   label: "Partner Details",
  //   main: () => <PartnerDetails />,
  // },
  {
    path: "/kontakt",
    exact: true,
    label: "Kontakt",
    main: () => <Kontakt />,
  },
  {
    path: "/validation",
    exact: true,
    main: () => <Validation />,
  },
];
