type Props = { compact?: boolean; placement?: "home" | "sidebar" | "article-end" };
export default function AdSlot({ compact = false, placement }: Props) {
  const position = placement || (compact ? "sidebar" : "home");
  return <aside className={`ad-slot ${compact ? "ad-compact" : ""} ad-${position}`} data-ad-placement={position} aria-label="Espacio reservado para publicidad">
    <span>PUBLICIDAD</span><div>Espacio publicitario</div><small>Sin anuncios activos</small>
  </aside>;
}
