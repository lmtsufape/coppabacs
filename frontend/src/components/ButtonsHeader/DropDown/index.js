"use client"

import Image from "next/image";
import style from "../index.module.scss";
import { useState, cloneElement } from "react";

const Dropdown = ({ children }) => {
  
  const [open, setOpen] = useState(false);
  
  const handleChildren = () =>
    Array.isArray(children)
      ? children.map((child) =>
          cloneElement(child, {
            onClick: () => {
              setOpen(false);
              if (child.props.onClick) child.props.onClick();
            },
          })
        )
      : cloneElement(children, {
          onClick: () => {
            setOpen(false);
            if (children.props.onClick) children.props.onClick();
          },
        });
  
  return (
    <>
      <div className={style.dropdown}>
        <div className={style.botaoDropdown}>
          <Image onClick={() => setOpen(!open)}
            src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
        </div>
        {open && (
          <div className={style.dropdown}>
            <ul className={style.botaoDropdown__lista}>
              { handleChildren() }
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;