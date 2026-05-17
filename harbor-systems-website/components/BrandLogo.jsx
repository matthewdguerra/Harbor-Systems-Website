import Image from "next/image";

const sizes = {
  xs:   { width: 24,  height: 24,  className: "h-6 w-6 object-contain" },
  sm:   { width: 32,  height: 32,  className: "h-8 w-8 object-contain" },
  md:   { width: 44,  height: 44,  className: "h-11 w-11 object-contain" },
  lg:   { width: 480, height: 480, className: "h-auto w-full max-w-[22rem] object-contain drop-shadow-2xl" },
  chat: { width: 36,  height: 36,  className: "h-9 w-9 rounded-xl object-contain" },
  hero: { width: 56,  height: 56,  className: "h-14 w-14 object-contain" }
};

export default function BrandLogo({
  size = "md",
  alt = "Harbor Systems lighthouse",
  priority = false,
  className = ""
}) {
  const config = sizes[size] || sizes.md;

  return (
    <Image
      src="/lighthouse.png"
      alt={alt}
      width={config.width}
      height={config.height}
      priority={priority}
      className={className || config.className}
    />
  );
}
