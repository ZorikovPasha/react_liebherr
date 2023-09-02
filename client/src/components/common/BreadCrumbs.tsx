import Link from 'next/link'
import React from 'react'

import { breadCrumbsItemType } from '../../types/dataTypes'
interface IBreadCrumbsProps {
  items: breadCrumbsItemType[]
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ items }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {items.map(({ link, text, id }, idx) => (
            <li className="breadcrumbs__item rel" key={id}>
              {idx !== items.length - 1 ? (
                <Link href={link}>
                  <a className="breadcrumbs__link">{text}</a>
                </Link>
              ) : (
                <span className="breadcrumbs__link">{text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BreadCrumbs
