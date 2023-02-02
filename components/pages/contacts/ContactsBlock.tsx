const ContactsBlock: React.FC = () => {
  return (
    <div className="contacts__content">
      <a className="contacts__address rel after" href="#">
        г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12{" "}
      </a>
      <div className="contacts__box flex jcsb">
        <div className="contacts__phones rel after">
          <a className="contacts__phone" href="tel:+74999299666">
            +7 (499)929-96-66
          </a>
          <a className="contacts__phone" href="tel:+79853645518">
            +7 (985)364-55-18
          </a>
          <a className="contacts__phone" href="tel:+79852262030">
            +7 (985)226-20-30
          </a>
        </div>
        <div className="contacts__time">
          <a className="contacts__mail rel after" href="mailto:evro-k@yandex.ru">
            evro-k@yandex.ru
          </a>
          <p className="contacts__schedule rel after">10:00 - 17:00</p>
        </div>
      </div>
      <div className="contacts__requisite rel">
        <p className="contacts__sub">Реквизиты:</p>
        <p>ООО &quot;Компания Еврокран&quot; </p>
        <div className="contacts__requisite-box">
          <p>ИНН:</p>
          <p>7718999293</p>
          <p>ОГРН:</p>
          <p>5147746130593</p>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
