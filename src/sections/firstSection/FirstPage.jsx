import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import FirstBanner from "../../components/FirstBanner";
import NewTrend from "../../components/SubTrends/NewTrend";
import BannerAds from "../../components/AdsBanner/BannerAds";
import StreamEv from "../../components/SubTrends/StreamEv";
import Footer from "../../components/Footer";
import ChangeLo from "../../components/SubTrends/ChangeLo";

const FirstPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <FirstBanner />
      <NewTrend value={true} genre={28} genrname='New & Trending' />
      <BannerAds />
      <StreamEv />
      <NewTrend genre={12} genrname='Advanture' />
      <NewTrend genre={16} genrname='Animation' />
      <NewTrend genre={35} genrname='Comedy' />
      <NewTrend genre={80} genrname='Crime' />
      <NewTrend value={true} genre={14} genrname='Fantasy' />
      <ChangeLo />
      <Footer />
    </>
  );
};

export default FirstPage;
