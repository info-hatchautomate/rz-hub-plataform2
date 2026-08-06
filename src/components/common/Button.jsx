/**
 * Button — botón homologado del RZ Hub.
 * Paleta única: #e61876 (primary) con hover #a91054 (primary-dim).
 *
 * Variantes:
 *  - primary: relleno rosa, texto blanco.
 *  - outline: borde rosa, texto rosa; al hover se rellena.
 *  - subtle:  fondo rosa al 10%; al hover se rellena.
 */
const VARIANTS = {
  primary: "btn-primary",
  outline: "btn-outline",
  subtle: "btn-subtle",
};

const SIZES = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const classes = ["btn-base", VARIANTS[variant] || VARIANTS.primary, SIZES[size] ?? "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
