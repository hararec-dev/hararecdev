import type { IconProps } from "../types";

export const BootstrapIcon = ({ name, size = "2rem", className }: IconProps) => {
    return <i className={`bi bi-${name} ${className}`} style={{ fontSize: size }}></i>;
}
