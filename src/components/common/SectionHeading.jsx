function SectionHeading({
    subtitle,
    title,
    description,
    align = "left",
}) {
    return (
        <div className={
            `max-w-3xl mb-16
            ${align === "center" ? "mx-auto text-center" : ""}`
        }
        >
            <span className="inline-flex items-center gap-3 uppercase tracking-[0.22em] text-primary text-xs font-semibold">
                <span className="h-px w-8 bg-primary/60" />
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

            {description && <p className="text-muted text-lg leading-relaxed">{description}</p>}
        </div>
    );
}

export default SectionHeading;
