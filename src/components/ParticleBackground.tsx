export default function ParticleBackground({ soft = false }: { soft?: boolean }) {
  const lineClass = soft ? "particle-lines particle-lines--soft" : "particle-lines";
  const fieldClass = soft ? "particle-field particle-field--soft" : "particle-field";

  return (
    <div className={fieldClass} aria-hidden="true">
      <svg className={lineClass} viewBox="0 0 1000 600" preserveAspectRatio="none">
        <line x1="80" y1="60" x2="420" y2="120" />
        <line x1="420" y1="120" x2="720" y2="180" />
        <line x1="180" y1="260" x2="520" y2="320" />
        <line x1="520" y1="320" x2="860" y2="220" />
        <line x1="120" y1="420" x2="380" y2="500" />
        <line x1="380" y1="500" x2="760" y2="420" />
        <line x1="260" y1="140" x2="180" y2="260" />
        <line x1="520" y1="320" x2="420" y2="120" />
        <line x1="760" y1="420" x2="860" y2="220" />
      </svg>
      {[...Array(12)].map((_, i) => (
        <span key={i} className="particle" />
      ))}
    </div>
  );
}
