export const Title = ({ color = "yellow" }: { color?: "yellow" | "slate" }) => (
  <span className="flex gap-3 text-xl">
    <p className={color === "slate" ? "text-slate-700" : "text-yellow-300"}> Le Gros Chef</p>
    <p>⏲️</p>
  </span>
);
