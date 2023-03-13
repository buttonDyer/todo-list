import React from "react";

import s from "./Header.module.scss";

function Header() {
  return (
    <>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.title}>Keeper</div>
        </div>
      </div>
      <div className={s.shadowHeader} />
    </>
  );
}

export default Header;
