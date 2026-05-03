export default function Header() {
    return (
        <header style={{ padding: "1.6rem 2.8rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, color: "#2c2416" }}>
                Nova Writes
            </span>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9b8b79" }}>
                Est. 2026
            </span>
        </header>
    )
}