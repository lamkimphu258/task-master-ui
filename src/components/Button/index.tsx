"use client";

import { ReactNode } from "react";
import style from "./Button.module.css";

type Props = {
    children: ReactNode;
    type: String;
};

export default function Button({ children, type = "primary" }: Props) {
    return <button className={style[`${type}`]}> {children}</button>;
}
