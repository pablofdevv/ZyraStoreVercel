export function GradientBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#D6F0E4",
          backgroundImage: `
            radial-gradient(circle at 65.44% 45.18%, rgba(251, 233, 240, 1) 0%, rgba(251, 233, 240, 0) 45.3%),
            radial-gradient(circle at 28.2% 73.9%, rgba(205, 231, 240, 1) 0%, rgba(205, 231, 240, 0) 56.85%),
            radial-gradient(circle at 52.5% 19.29%, rgba(230, 214, 245, 1) 0%, rgba(230, 214, 245, 0) 68.75%),
            radial-gradient(circle at 79.87% 84.43%, rgba(214, 240, 228, 1) 0%, rgba(214, 240, 228, 0) 80.3%)
          `,
          filter: "blur(12px)",
          transform: "scale(1.05)",
        }}
      />
    </div>
  );
}
