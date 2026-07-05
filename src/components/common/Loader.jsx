import { motion } from "framer-motion";

function Loader({ 
  variant = "spinner", 
  size = "md",
  text = "Loading...",
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {variant === "spinner" && (
        <motion.div
          className={`${sizeClasses[size]} border-4 border-primary/20 border-t-primary rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {variant === "dots" && (
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`${sizeClasses[size]} bg-primary rounded-full`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      )}

      {variant === "pulse" && (
        <motion.div
          className={`${sizeClasses[size]} bg-linear-to-r from-primary to-secondary rounded-lg`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {text && (
        <p className="text-muted text-sm font-medium">{text}</p>
      )}
    </div>
  );
}

export default Loader;
