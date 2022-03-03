const ObjectCard: React.FC = () => {
  return (
    <div className="objects__item item-object">
      <div className="item-object__images">
        <img src="images/objects/1.jpg" alt="" />
      </div>
      <h6 className="item-object__title">
        <a className="item-object__link" href="object.html">
          Монтаж г.Туапсе
        </a>
      </h6>
    </div>
  );
};

export default ObjectCard;
