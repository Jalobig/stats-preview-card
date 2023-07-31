import React, { useEffect } from "react";
import classes from "./Card.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeroDesktop from "../../images/image-header-desktop.jpg";
import HeroMobile from "../../images/image-header-mobile.jpg";
import useAnimateNumber from "use-animate-number";

const Card = (props) => {
  const options = {
    duration: 1000,
    enterance: true,
    direct: false,
    disabled: false,
    decimals: 0,
  };

  const media = useMediaQuery("only screen and (max-width: 950px)");
  const [companiesNum, setCompaniesNum] = useAnimateNumber(0, options);
  const [templatesNum, setTemplatesNum] = useAnimateNumber(0, options);
  const [queriesNum, setQueriesNum] = useAnimateNumber(0, options);
  useEffect(() => {
    setCompaniesNum(10);
    setTemplatesNum(314);
    setQueriesNum(12);
  }, []);

  return (
    <div className={classes.card}>
      {media && (
        <div className={classes.card__imggroup}>
          <img
            src={HeroMobile}
            alt="People working in an office"
            className={classes["card__img--mobile"]}
          />
          <span></span>
        </div>
      )}
      <div className={classes.card__info}>
        <h1 className={classes["card__heading--1"]}>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className={classes["card__paragraph"]}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className={classes.card__row}>
          <div className={classes.card__group}>
            <h1 className={classes["card__stats-heading--1"]}>
              {companiesNum}k+
            </h1>
            <h3 className={classes["card__heading--3"]}>companies</h3>
          </div>
          <div className={classes.card__group}>
            <h1 className={classes["card__stats-heading--1"]}>
              {templatesNum}
            </h1>
            <h3 className={classes["card__heading--3"]}>templates</h3>
          </div>
          <div className={classes.card__group}>
            <h1 className={classes["card__stats-heading--1"]}>
              {queriesNum}M+
            </h1>
            <h3 className={classes["card__heading--3"]}>queries</h3>
          </div>
        </div>
      </div>
      {!media && (
        <div className={classes.card__imggroup}>
          <img
            src={HeroDesktop}
            alt="People working in an office"
            className={classes["card__img--desktop"]}
          />
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Card;
