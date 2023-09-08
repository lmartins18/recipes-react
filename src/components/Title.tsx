interface Params {
  color?: "yellow" | "slate";
  className?: string;
}
export const Title = ({ color = "yellow", className = "" }: Params) => (
  <span className={`flex gap-3 text-xl ${className}`}>
    <p
      className={
        color === "slate"
          ? "text-slate-700 dark:text-slate-300"
          : "text-yellow-300"
      }
    >
      {" "}
      Le Gros Chef
    </p>
    <p>⏲️</p>
  </span>
);
