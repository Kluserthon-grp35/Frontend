import type { ReactNode, CSSProperties } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant: string
    size: string
}