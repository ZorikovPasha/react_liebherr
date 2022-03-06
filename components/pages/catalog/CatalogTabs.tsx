const CatalogTabs: React.FC = () => {

  const tabs = [
    { filter: "weight-40", text: "40 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-50", text: "50 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-65", text: "65 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-68", text: "68 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-70", text: "70 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-82.5", text: "82.5 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-84", text: "84 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-85", text: "85 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-90", text: "90 тонн", className: "catalog-tabs__item catalog-tabs__item--mobile" },
    { filter: "weight-93.8", text: "93.8 тонн", className: "catalog-tabs__item" },
    { filter: "weight-95", text: "95 тонн", className: "catalog-tabs__item" },
    { filter: "weight-112.5", text: "112.5 тонн", className: "catalog-tabs__item" },
    { filter: "weight-120", text: "120 тонн", className: "catalog-tabs__item" },
    { filter: "weight-131.6", text: "131.6 тонн", className: "catalog-tabs__item" },
    { filter: "weight-151", text: "150 тонн", className: "catalog-tabs__item" },
    { filter: "weight-160", text: "160 тонн", className: "catalog-tabs__item" },
    { filter: "weight-200", text: "200 тонн", className: "catalog-tabs__item" },
    { filter: "weight-250", text: "250 тонн", className: "catalog-tabs__item" },
    { filter: "weight-280", text: "280 тонн", className: "catalog-tabs__item" },
    { filter: "weight-300", text: "300 тонн", className: "catalog-tabs__item" },
    { filter: "weight-360", text: "360 тонн", className: "catalog-tabs__item" },
    { filter: "weight-400", text: "400 тонн", className: "catalog-tabs__item" },
    { filter: "weight-500", text: "500 тонн", className: "catalog-tabs__item" },
    { filter: "weight-750", text: "750 тонн", className: "catalog-tabs__item" },
  ];
  return (
    <section className="catalog-tabs">
      <div className="container">
        <h1 className="catalog-tabs__title">Каталог техники</h1>
        <div className="catalog-tabs__items">
          {tabs.map(({ filter, text, className }) => (
            <button 
              className={`${className}`} 
              data-filter={filter} 
              key={filter}
              >
              {text}
            </button>
          ))}
        </div>
        <button className="catalog-tabs__more">ещё</button>
      </div>
    </section>
  );
};

export default CatalogTabs;
