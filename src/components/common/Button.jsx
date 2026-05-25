function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
}) {
    const baseStyles = 
        "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";

    const variants = {
        primary:
            "bg-primary text-black hover:scale-105 hover:bg-primary-dark",
        outline:
            "border border-white/30 text-white hover:bg-white hover:text-black",
        dark:
            "bg-white text-black hover:bg-white/90 hover:text-black/80",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-7 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={
                `${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                ${className}`
            }
            >
                {children}
            </button>
    );
}

export default Button;