import type { IconProps } from "../../types";

export const BootstrapIcon = ({ name, className }: IconProps) => {
    return <i className={`bi bi-${name} ${className}`}></i>;
}
