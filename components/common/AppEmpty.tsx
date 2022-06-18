import React from 'react'

export const AppEmpty = () => {
  return (
    <div className="empty">
      <div className="empty__images">
        <img src="static/images/empty.webp" alt="" />
      </div>
      <p className="empty__text">К сожалению, ничего не нашлось..</p>
    </div>
  )
}
