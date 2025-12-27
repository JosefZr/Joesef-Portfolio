import React from "react";
import styles from "./style.module.scss";

export default function Project({ index, title, manageModal, description, colors, link }) {
  const openLink = () => window.open(link, "_blank", "noopener,noreferrer");

  return (
    <div
      className={styles.project}
      style={{
        "--c1": colors?.[0],
        "--c2": colors?.[1],
        "--c3": colors?.[2],
      }}
      onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onMouseLeave={(e) => manageModal(false, index, e.clientX, e.clientY)}
      onMouseMove={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onClick={openLink}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") openLink();
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

