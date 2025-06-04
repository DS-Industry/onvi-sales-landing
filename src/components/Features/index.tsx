"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pl-10 pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Функции"
          title="Основные характеристики приложения"
          paragraph="ONVI — это не просто приложение для поиска моек самообслуживания. Это ваш надежный помощник в уходе за автомобилем, который предлагает множество функций для удобства и выгоды."
        />
        <div className="mt-12 mb-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
