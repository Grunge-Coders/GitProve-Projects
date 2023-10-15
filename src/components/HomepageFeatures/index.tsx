import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Forge Digital Masterpieces",
    Svg: require("@site/static/img/build.svg").default,
    description: (
      <>
        Dive into a world where every project is a canvas. With GitProve, you're
        not just coding; you're crafting digital art, one project at a time.
      </>
    ),
  },
  {
    title: "Prove Your Skills",
    Svg: require("@site/static/img/prove.svg").default,
    description: (
      <>
        Constructive criticism is the blacksmith of growth. With each project,
        validate your skills, earn recognition, and stand out in the developer
        community.
      </>
    ),
  },
  {
    title: "Learn and Collaborate",
    Svg: require("@site/static/img/learn.svg").default,
    description: (
      <>
        Learning is a two-way street. Engage with peers, collaborate on
        projects, and grow together in a community that values shared knowledge.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
