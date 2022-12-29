import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { __removeWishList } from "../Redux/modules/listSlice";

export const UserSolid = () => {
  return (
    <>
      <FontAwesomeIcon icon={faUser} />
    </>
  );
};

export const HeartSolid = (itemId) => {
  return (
    <>
      <FontAwesomeIcon icon={faHeart} />
    </>
  );
};
