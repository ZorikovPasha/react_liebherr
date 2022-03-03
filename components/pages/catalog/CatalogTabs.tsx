const CatalogTabs: React.FC = () => {
  return (
    <section className="catalog-tabs">
      <div className="container">
        <h1 className="catalog-tabs__title">Каталог техники</h1>
        <div className="catalog-tabs__items">
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-40">
            40 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-50">
            50 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-65">
            65 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-68">
            68 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-70">
            70 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-82-5">
            82,5 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-40">
            82,5 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-84">
            84 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-85">
            85 тонн
          </button>
          <button className="catalog-tabs__item catalog-tabs__item--mobile" data-filter=".weight-90">
            90 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-93-8">
            93,8 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-95">
            95 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-112-5">
            112,5 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-120">
            120 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-131-6">
            131,6 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-150">
            150 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-160">
            160 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-200">
            200 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-250">
            250 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-280">
            280 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-300">
            300 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-350">
            350 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-400">
            400 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-50">
            500 тонн
          </button>
          <button className="catalog-tabs__item" data-filter=".weight-750">
            750 тонн
          </button>
        </div>
        <button className="catalog-tabs__more">ещё</button>
      </div>
    </section>
  );
};

export default CatalogTabs;
