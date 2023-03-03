import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
    variant: "white" | "green" | "lightGreen";
    children: ReactNode;
    text: string;
};

export function Card({ variant, children, text }: Props) {
    return (
        <div className={clsx("p-6 md:p-10 font-bold flex-1", {
            "bg-white rounded-t-[5px]": variant === "white",
            "bg-green": variant === "green",
            "bg-lightGreen": variant === "lightGreen",
        })}>
            <h2 className={clsx({
                "text-white text-lg pb-[1.125rem] tracking-[0.014rem]": variant === "green" || variant === "lightGreen",
                "text-green text-xl md:text-2xl pb-6 tracking-[0.0.016rem] md:tracking-[0.019rem]": variant === "white"
            })}>{text}</h2>

            {children}
        </div>
    );
}