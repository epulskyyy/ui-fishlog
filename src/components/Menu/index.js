import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { baseMenu } from "./listOfMenu";
import "./styles.scss";

function Menu() {
  const [submenu, setsubmenu] = useState();
  const loc = useLocation();
  const onChangeSubmenu = (key) => {
    if (key === submenu) setsubmenu(false);
    else setsubmenu(key);
  };
  const isCollapseSubmenu = (key, itemSubmenu) => {
    if (submenu == null) {
      if (itemSubmenu.some((someItem) => someItem.path === loc.pathname)) {
        return true;
      }
      return false;
    } else if (!submenu) {
      return false;
    } else if (submenu === key) {
      return true;
    }
  };

  return (
    <div className="col-xl-2 col-lg-3 col-md-4 fl_menu">
      <ul className="fl_nav  ">
        {baseMenu.map((item, key) =>
          item.submenu ? (
            <li key={key} className="fl_nav__item fl_nav__item__sub">
              <button
                className="fl_nav__link"
                onClick={() => onChangeSubmenu(key)}
              >
                <i className={item.iconName} /> {item.label}
              </button>
              <Collapse in={isCollapseSubmenu(key, item.submenu)}>
                <ul className="fl_nav">
                  {item.submenu.map((itemSub, keySub) => (
                    <li key={keySub}>
                      <Link
                        to={itemSub.path}
                        className={
                          "fl_nav__link__sub " +
                          (itemSub.path === loc.pathname ? "active" : "")
                        }
                      >
                        <i className={itemSub.iconName} /> {itemSub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </li>
          ) : (
            <li key={key} className="fl_nav__item">
              <Link
                to={item.path}
                className={
                  "fl_nav__link " + (item.path === loc.pathname ? "active" : "")
                }
              >
                <i className={item.iconName} /> {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Menu;
