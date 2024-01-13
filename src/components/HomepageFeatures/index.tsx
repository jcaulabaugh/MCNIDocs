import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Getting Started",
    Svg: require("@site/static/img/mcni360-advanced_logo_blue.svg").default,
    description: <>Introduction</>,
  },
  {
    title: "Our Platform",
    Svg: require("@site/static/img/mcni360_logo_blue.svg").default,
    description: <>MCNi Platform User's Guide</>,
  },
  {
    title: "Mobile Sales",
    Svg: require("@site/static/img/mcni360-advanced_logo_blue.svg").default,
    description: <>Understanding Mobile Sales</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
