/**
 * Estilos por roleType — todos comparten la paleta rosa de marca
 * (#e61876 / #a91054) para mantener el sistema homologado.
 * Se diferencian sólo por intensidad, nunca por matiz.
 */
export const ROLE_STYLES = {
  Mentor: {
    badge: "bg-primary text-white",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "border-primary",
    hoverBorder: "",
    backPanel: "bg-primary text-white",
  },
  Aliado: {
    badge: "bg-primary-dim text-white",
    accent: "text-primary-dim",
    accentBg: "bg-primary-dim/10",
    accentBorder: "border-primary-dim",
    hoverBorder: "",
    backPanel: "bg-primary-dim text-white",
  },
  Tallerista: {
    badge: "bg-primary/80 text-white",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    accentBorder: "border-primary/70",
    hoverBorder: "",
    backPanel: "bg-gradient-to-br from-primary to-primary-dim text-white",
  },
};

export const ROLE_ORDER = ["Mentor", "Tallerista", "Aliado"];

export function styleFor(role) {
  return ROLE_STYLES[role] ?? ROLE_STYLES.Mentor;
}
