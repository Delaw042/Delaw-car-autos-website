// FadeSlideUnderlineLink.jsx
export default function FadeSlideUnderlineLink({
  color = "black",
  hoverColor = "red",
  center = false,
  active = false,
  className = "",
  children,
}) {
  const colorMap = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-700",
    blue: "text-blue-500",
    red: "text-red-500",
  };

  const textColor = colorMap[color] || "text-black";
  const hoverColorClasses =
    hoverColor === "red"
      ? "hover:text-red-500 after:bg-red-500"
      : `hover:text-${hoverColor} after:bg-${hoverColor}`;

  return (
    <span
      className={`
        relative inline-block cursor-pointer
        ${textColor} ${hoverColorClasses} ${className}
        transition-colors duration-300 ease-in-out
        after:content-[''] after:absolute 
        ${center ? "after:left-1/2 after:-translate-x-1/2 after:origin-center" : "after:left-0 after:origin-left"} 
        after:bottom-0 after:h-[2px] after:w-full
        after:transition-transform after:duration-300 after:ease-in-out
        ${
          active
            ? "text-red-500 after:scale-x-100 after:opacity-100"
            : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
        }
      `}
    >
      {children}
    </span>
  );
}
