import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="page-shell"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
