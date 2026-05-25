function SectionHeading({
    subtitle,
    title,
    descritpion,
    align = "left",
}) {
    return (
        <div className={
            `max-w-3xl mb-16
            ${align === "center" ? "mx-auto text-center" : ""}`
        }
        >
            <span className="uppercase tracking-[4px] text-primary text-sm font-medium">
                {subtitle}
            </span>

            <h2 className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            leading-tight
            mt-4
            mb-6">
                   {title} 
            </h2>

            <p className="text-mutedtext-lg leading-relaxed">
                {descritpion}
            </p>
        </div>
    );
}

export default SectionHeading;