import Link from "next/link";
import React from "react";

import { breadCrumbsItemType } from "../../types/dataTypes";
interface IBreadCrumbsProps {
  items: breadCrumbsItemType[];
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ items }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {items && items.map(({ link, text }, idx) => {
            <li className="breadcrumbs__item">
              { idx !== items.length
                ? <Link href={link}>
                    <a className="breadcrumbs__link">
                      {text}
                    </a>
                  </Link>
                : <span className="breadcrumbs__link">{text}</span>}
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
