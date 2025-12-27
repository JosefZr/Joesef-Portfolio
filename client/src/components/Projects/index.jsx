import styles from "./style.module.scss";
import { useState, useEffect, useRef, useMemo } from "react";
import Project from "./components/project";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Rounded from "../../common/RoundedButton";

const projects = [
  {
    title: "Build Ydn",
    src: "/images/buildydn.png",
    colors: ["#f97316", "#06b6d4", "#a855f7"],
    description: "Development",
    link: "https://lbdentalacademy.com/landing",
  },
  {
    title: "WC Marketing",
    src: "/images/wcmarketing.png",
    colors: ["#f43f5e", "#f59e0b", "#22c55e"],
    description: "Development",
    link: "https://wcmarketing.com",
  },
  {
    title: "Your Network",
    src: "/images/yourdentalnetwork.png",
    colors: ["#06b6d4", "#3b82f6", "#a855f7"],
    description: "Development",
    link: "https://yourdentalnetwork.com",
  },
  {
    title: "Residanat",
    src: "/images/residanat.png",
    colors: ["#111827", "#334155", "#0ea5e9"],
    description: "Development",
    link: "https://www.joinlbstomatology.com/residanat",
  },
  {
    title: "Students Hub",
    src: "/images/etudiant.png",
    colors: ["#22c55e", "#14b8a6", "#3b82f6"],
    description: "Development",
    link: "https://www.joinlbstomatology.com/etudiant",
  },
  {
    title: "Dentist Center",
    src: "/images/dentist.png",
    colors: ["#a855f7", "#ec4899", "#f97316"],
    description: "Development",
    link: "https://www.joinlbstomatology.com/dentist",
  },
  {
    title: "Lb Benyahia",
    src: "/images/lbbenyahia.png",
    colors: ["#1d4ed8", "#06b6d4", "#22c55e"],
    description: "Development",
    link: "https://lbbenyahia.com",
  },
  {
    title: "Sarl Bennour",
    src: "/images/bennour.png",
    colors: ["#0f766e", "#22c55e", "#3b82f6"],
    description: "Development & Design",
    link: "https://www.bennour-dz.org",
  },
  {
    title: "Freelancer Portfolio",
    src: "/images/salah.png",
    colors: ["#f59e0b", "#ef4444", "#8b5cf6"],
    description: "Development & Design",
    link: "https://sweileh-git-main-josefzr.vercel.app",
  },
  {
    title: "Light Stomatology",
    src: "/images/light.png",
    colors: ["#374151", "#6b7280", "#3b82f6"],
    description: "Development & Design",
    link: "https://light-stomatology-git-main-josefzrs-projects.vercel.app/fr",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

// 🔥 Animations for list reveal
const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [activeLink, setActiveLink] = useState("");

  // ✅ show 4 then add 3 each click
  const INITIAL_COUNT = 4;
  const STEP = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  const listRef = useRef(null);

  // projects that are currently visible
  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [visibleCount]
  );

  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  // ✅ IMPORTANT: we keep the "real" project index so modal slider always matches
  const manageModal = (active, realIndex, x, y) => {
    moveItems(x, y);
    setModal({ active, index: realIndex });
    setActiveLink(active ? projects[realIndex]?.link || "" : "");
  };

  const openActiveLink = () => {
    if (!activeLink) return;
    window.open(activeLink, "_blank", "noopener,noreferrer");
  };

  const onLoadMore = () => {
    // close modal if user clicked while hovering
    if (active) setModal((m) => ({ ...m, active: false }));

    setVisibleCount((prev) => Math.min(prev + STEP, projects.length));

    // smooth scroll a bit to show new items
    requestAnimationFrame(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  };

  return (
    <main
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
      className={styles.projects}
    >
      <div className={styles.body} ref={listRef}>
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="show"
          layout
          style={{ width: "100%" }}
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, realIndex) => (
              <motion.div
                key={project.link || project.title}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
              >
                <Project
                  index={realIndex}                 // ✅ real index for modal slider
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  colors={project.colors}
                  manageModal={manageModal}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ✅ Load more button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ opacity: projects.length > 4 ? 1 : 0 }}
      >
        {hasMore ? (
          <div onClick={onLoadMore} style={{ cursor: "pointer" }}>
            <Rounded>
              <p>More work</p>
            </Rounded>
          </div>
        ) : (
          <Rounded>
            <p>All projects loaded</p>
          </Rounded>
        )}
      </motion.div>

      {/* modal + cursor */}
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {projects.map((project, i) => {
              const { src, colors } = project;
              return (
                <div
                  className={styles.modal}
                  style={{
                    background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
                  }}
                  key={`modal_${i}`}
                >
                  <img src={src} width={300} height={0} alt="image" />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />

        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          onClick={openActiveLink}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openActiveLink();
          }}
          style={{ pointerEvents: active ? "auto" : "none" }} // ✅ so click works only when visible
        >
          View
        </motion.div>
      </>
    </main>
  );
}
