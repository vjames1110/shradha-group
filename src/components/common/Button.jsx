function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
}) {
    const baseStyles = 
        "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-linear-to-r from-primary to-primary-dark text-white hover:shadow-[0_15px_35px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95",
        outline:
            "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors",
        secondary:
            "bg-linear-to-r from-secondary to-secondary-dark text-white hover:shadow-[0_15px_35px_rgba(124,58,237,0.4)] hover:scale-105",
        dark:
            "bg-text text-white hover:bg-opacity-90 hover:shadow-[0_15px_35px_rgba(15,23,42,0.3)]",
        ghost:
            "text-primary hover:bg-primary/10 active:bg-primary/20",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
    };

    return (
        <button
            className={
                `${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                ${className}`
            }
            disabled={disabled}
            >
                {children}
            </button>
    );
}

export default Button;