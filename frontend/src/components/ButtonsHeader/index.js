"use client";

import style from "./index.module.scss";
import { useState, cloneElement } from "react";
import Dropdown from "./DropDown";
import DropdownButton from "./DropDown/DropdownButton";

const ButtonsHeader = ({ children, bcStyle }) => {
  const css = bcStyle? bcStyle : style;
  const [open, setOpen] = useState(false);

  const handleChildren = () =>
    Array.isArray(children)
      ? children.map((child) =>
          cloneElement(child, {
            bcStyle: css,
            onClick: () => {
              setOpen(false);
              if (child.props.onClick) child.props.onClick();
            },
            asDropdownButton: true,
          })
        )
      : cloneElement(children, {
          onClick: () => {
            setOpen(false);
            if (children.props.onClick) children.props.onClick();
          },
          asDropdownButton: true,
        });

    const createDropdownButtons = (child) => (
      <DropdownButton
        key={child.key || child.props.text}
        text={child.props.text}
        imageSrc={child.props.imageSrc}
        hrefLink={child.props.hrefLink}
        onClick={child.props.onClick}
      />
    );

  const dropdownButtons = Array.isArray(children)
    ? children.map(createDropdownButtons)
    : createDropdownButtons(children);

  return (
    <>
      <div className={css.header}>
        <div className={css.header_buttonContainer}>
          <Dropdown>{dropdownButtons}</Dropdown>
          <div className={css.botoes}>{handleChildren()}</div>
        </div>
      </div>
    </>
  );
};

export default ButtonsHeader;
