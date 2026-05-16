import Image from "next/image";

const sizes = {
  sm: { width: 28, height: 28, className: "h-7 w-auto" },
  md: { width: 84, height: 84, className: "brand-logo" },
  lg: { width: 900, height: 900, className: "relative mx-auto h-auto w-full max-w-[30rem] drop-shadow-2xl" },
  chat: { width: 42, height: 42, className: "h-10 w-auto rounded-full bg-white/10" }
};

export default function BrandLogo({
  size = "md",
  alt = "Harbor Systems lighthouse logo",
  priority = false,
  className = ""
}) {
  const config = sizes[size] || sizes.md;

  return (
    <Image
      src="/logo.svg"
      alt={alt}
      width={config.width}
      height={config.height}
      priority={priority}
      className={className || config.className}
    />
  );
}
