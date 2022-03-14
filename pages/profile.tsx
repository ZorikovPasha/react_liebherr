import { NextPage } from "next";
import React from "react";
import { BreadCrumbs } from "../components";

const Profile: NextPage = () => {
  const breadCrumbs = [
    { id: 1, link: "/", text: "Главная" },
    { id: 2, link: "", text: "Профиль" },
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
    </>
  );
};

export default Profile;
