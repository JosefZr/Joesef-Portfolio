import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Close } from "@radix-ui/react-dialog";

const ease = "cubic-bezier(0.19, 1, 0.22, 1)";

/* ------------------------- layout + scroll behavior ------------------------ */

const NavbarComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  will-change: transform, padding, background-color, box-shadow;
  transform: translateZ(0);

  padding: ${({ $scrolled }) => ($scrolled ? "0px 3%" : "12px 5%")};

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255,255,255,0.72)" : "transparent"};

  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(10px)" : "none"};

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 10px 35px rgba(0,0,0,0.08)" : "none"};

  border-bottom: ${({ $scrolled }) =>
    $scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent"};

  transition:
    padding 420ms ${ease},
    background-color 420ms ${ease},
    box-shadow 420ms ${ease},
    border-color 420ms ${ease},
    backdrop-filter 420ms ${ease};
`;

const Nav = styled.div`
  max-width: 95rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Url = styled.a`
  width: 5rem;
  display: inline-flex;
`;

const Navigation = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.5rem;
   @media (max-width: 900px) {
    display: none;
  }
`;

const ListLeft = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-block: ${({ $scrolled }) => ($scrolled ? "6px" : "12px")};
  transform: ${({ $scrolled }) => ($scrolled ? "scale(0.98)" : "scale(1)")};
  transform-origin: left center;

  transition:
    padding 420ms ${ease},
    transform 420ms ${ease};
`;

const ListRight = styled.ul`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  transform: ${({ $scrolled }) => ($scrolled ? "scale(0.98)" : "scale(1)")};
  transform-origin: right center;
  transition: transform 420ms ${ease};
`;

const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 9px 15px;
  background: #000;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(3, 3, 3, 0.56);
    color: #fff;
  }
`;

/* ------------------------------ dropdown bits ----------------------------- */

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

const Trigger = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 10px 14px;
  color: #222;
  user-select: none;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  transition: color 200ms ${ease};

  &:hover {
    color: rgba(34, 34, 34, 0.65);
  }
`;

const Caret = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  transition: transform 220ms ${ease};
  transform: rotate(0deg);

  ${({ $open }) =>
    $open &&
    css`
      transform: rotate(180deg);
    `}

  /* simple chevron using borders */
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform-origin: center;
  transform: ${({ $open }) =>
    $open ? "rotate(-135deg)" : "rotate(45deg)"};
`;

const MegaLeft = styled.div`
  padding: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`;

const MegaCard = styled(Link)`
  text-decoration: none;
  border-radius: 14px;
  padding: 14px;
  background: transparent;
  transition: background 200ms ${ease};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const MegaTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-weight: 650;
  font-size: 14px;
  color: #111;
`;

const MegaDesc = styled.p`
  margin: 6px 0 0 0;
  font-size: 13px;
  line-height: 1.35;
  color: rgba(0, 0, 0, 0.6);
`;

const Arrow = styled.span`
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 200ms ${ease}, transform 200ms ${ease};
  ${MegaCard}:hover & {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const MegaRight = styled.div`
  background: #f7f8fa;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;

const RightImage = styled.img`
  width: 100%;
  height: 96px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
`;

const RightTitle = styled.div`
  font-weight: 650;
  font-size: 14px;
  color: #111;
`;

const RightLink = styled.a`
  font-size: 12px;
  font-weight: 750;
  color: #111;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 900; /* below navbar(1000) but above page */
  background: rgba(10, 10, 10, 0.18);

  /* blur the whole page behind */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  opacity: 0;
  pointer-events: none;
  transition: opacity 220ms ${ease};
`;

// when open
const OverlayOpen = css`
  opacity: 1;
  pointer-events: auto;
`;

// wrapper that centers relative to viewport, not only the li
const MegaWrap = styled.div`
  position: fixed;          /* ✅ fixed -> always centered in screen */
  top: 72px;                /* adjust based on navbar height */
  left: 60%;
  transform: translateX(-50%);
  width: min(920px, calc(100vw - 48px));
  z-index: 1200;            /* above overlay + navbar content */
  pointer-events: none;
`;

// panel pops + shadow + small border
const MegaPanel = styled.div`
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.10);

  /* stronger “floating” */
  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.24),
    0 10px 30px rgba(0, 0, 0, 0.10);

  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 320px;
  opacity: 0;
  transform: translateY(-10px) scale(0.985);
  transition:
    opacity 220ms ${ease},
    transform 220ms ${ease};
  
  ${({ $open }) =>
    $open &&
    css`
      opacity: 1;
      transform: translateY(0) scale(1);
    `}
`;

/* ------------------------------ mobile menu ----------------------------- */
/* ------------------------------ mobile sheet (like screenshot) ----------------------------- */

const MobileActions = styled.div`
  display: none;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const MenuBtn = styled.button`
  border: 0;
  background: transparent;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: #111;
  font-weight: 800;
`;

const CloseBtn = styled.button`
  border: 0;
  background: transparent;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: #111;
  font-weight: 900;
  font-size: 22px;
  line-height: 1;
`;

const MobileSheet = styled.div`
  position: fixed;   /* ✅ was absolute */
  inset: 0;
  z-index: 1400;


  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px);
  transition: opacity 220ms ${ease}, transform 220ms ${ease};

  ${({ $open }) =>
    $open &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `}

  @media (min-width: 901px) {
    display: none;
  }
`;
const MobileSheetInner = styled.div`
  height: 100%;
  width: 100%;
  padding: 43px 18px 28px;
`;

const MobileTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const MobileBrand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #111;
  font-weight: 800;
  font-size: 16px;
`;

const BrandDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #111;
  display: inline-block;
`;

const MobileTopRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const MobileLang = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(0,0,0,0.65);
  font-weight: 650;
  font-size: 14px;
  user-select: none;
`;

const MobileContent = styled.div`
  margin-top: 26px;
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* big rounded white rows */
const MobileRow = css`
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 1px 0 rgba(0,0,0,0.06);
`;

const MobileButton = styled.button`
  ${MobileRow}
  border: 0;
  cursor: pointer;
  text-align: left;
  color: #111;
  font-weight: 650;
  font-size: 15px;

  &:active {
    transform: scale(0.995);
  }
`;

const MobileLinkRow = styled(Link)`
  ${MobileRow}
  text-decoration: none;
  color: #111;
  font-weight: 650;
  font-size: 15px;
`;

/* accordion area under a row */
const MobileSub = styled.div`
  background: transparent;
  padding: 0 6px 4px 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileSubLink = styled(Link)`
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 12px;
  padding: 14px 14px;
  text-decoration: none;
  color: rgba(0,0,0,0.8);
  font-weight: 600;
  font-size: 14px;
`;

/* chevron at right (down/up like screenshot) */
const Chevron = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  border-right: 2px solid rgba(0,0,0,0.7);
  border-bottom: 2px solid rgba(0,0,0,0.7);
  transform: ${({ $open }) => ($open ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 200ms ${ease};
`;

const MobilePanelWrap = styled.div`
  width: min(740px, calc(100% - 36px));
  margin: 0 auto;
`;

const productsDropdown = {
  items: [
    {
      title: "Expense Management",
      desc: "One platform for expense management and company cards",
      to: "/product/expenses",
    },
    {
      title: "Employee Benefits",
      desc: "Tax-optimised benefits to boost your employer brand",
      to: "/product/benefits",
    },
    {
      title: "Invoicing & Approvals",
      desc: "Control spending with smart approval workflows",
      to: "/product/approvals",
    },
    {
      title: "Reporting",
      desc: "Realtime reporting for accounting and finance",
      to: "/product/reporting",
    },
  ],
  featured: {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    title: "How a team cut expense admin by 60%",
    href: "#",
    cta: "View case study",
  },
};
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
const isAnyDropdownOpen = Boolean(activeDropdown);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const lastYRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const threshold = 20;
    const expandDelay = 180;

    const applyState = (next) => {
      setScrolled((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastYRef.current;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (goingDown) {
        if (y > threshold) applyState(true);
      } else {
        timeoutRef.current = setTimeout(() => {
          if (window.scrollY <= threshold) applyState(false);
        }, expandDelay);
      }

      lastYRef.current = y;
    };

    lastYRef.current = window.scrollY;
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navLinks = [
    { name: "Products", dropdown: true },
    { name: "Integrations", dropdown: false },
    { name: "Customers", to: "/customers" },
    { name: "Pricing", to: "/pricing" },
    { name: "Resources", dropdown: false },
  ];
  const closeAll = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };
useEffect(() => {
  if (!mobileOpen) return;
  const onKey = (e) => e.key === "Escape" && closeAll();
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [mobileOpen]);

  return (
    <NavbarComponent $scrolled={scrolled}>
      {/* ✅ Full-screen blur overlay */}
      <Overlay $open={isAnyDropdownOpen} onClick={() => setActiveDropdown(null)} />
      <Nav>
        <Logo>
          <Url>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 81 18"
              fill="none"
              height="100%"
              overflow="visible"
              class="navbar8_logo"
            >
              <path
                d="M7.5675 15.8191C3.4475 15.8191 0.1075 12.4991 0.1075 8.39906C0.1075 4.29906 3.4475 0.959062 7.5675 0.959062C11.6675 0.959062 14.9875 4.29906 14.9875 8.39906C14.9875 12.4991 11.6675 15.8191 7.5675 15.8191ZM27.5055 15.8191C23.4455 15.8191 20.8255 12.6991 20.8255 8.39906C20.8255 4.07906 23.4655 0.959062 27.5255 0.959062C31.1055 0.959062 33.3255 3.23906 33.6655 6.09906H31.3655C31.1055 4.69906 30.2255 2.85906 27.4855 2.85906C24.3255 2.85906 23.1255 5.53906 23.1255 8.37906C23.1255 11.2391 24.3255 13.9191 27.4855 13.9191C30.2455 13.9191 31.2255 12.0791 31.3655 10.3391H33.6655C33.3455 13.5191 31.1055 15.8191 27.5055 15.8191ZM37.407 3.51906H35.187V1.39906H37.407V3.51906ZM37.267 15.5391H35.307V5.33906H37.267V15.5391ZM44.2072 5.09906C44.5672 5.09906 44.8472 5.11906 45.1472 5.15906V7.03906C44.9072 6.99906 44.7272 6.97906 44.4872 6.97906C42.7072 6.97906 41.4272 8.31906 41.4272 10.2591V15.5391H39.4672V5.33906H41.4272V7.27906H41.4672C42.0072 5.99906 42.8272 5.09906 44.2072 5.09906ZM50.4706 15.8391C47.4306 15.8391 45.4506 13.6391 45.4506 10.4391C45.4506 7.23906 47.4306 5.03906 50.4506 5.03906C53.0706 5.03906 54.8106 6.73906 55.0506 9.03906H53.0306C52.9306 7.97906 52.3306 6.65906 50.4706 6.65906C48.2906 6.65906 47.4906 8.51906 47.4906 10.4391C47.4906 12.3591 48.2906 14.1991 50.4706 14.1991C52.3506 14.1991 52.9306 12.9191 53.0306 11.7591H55.0506C54.9106 14.0991 53.0906 15.8391 50.4706 15.8391ZM63.3356 11.5991V5.33906H65.2956V15.5391H63.3356V14.2591H63.2956C62.7556 15.0391 61.6956 15.8191 59.9356 15.8191C58.0556 15.8191 56.5356 14.7391 56.5356 12.3991V5.33906H58.4956V11.8591C58.4956 13.2391 59.0956 14.1591 60.5756 14.1591C62.2556 14.1591 63.3356 13.1391 63.3356 11.5991ZM69.4545 15.5391H67.4945V1.23906H69.4545V15.5391ZM74.4747 15.8191C72.4347 15.8191 71.1347 14.6391 71.1347 12.8991C71.1347 10.6191 72.8547 9.93906 75.3947 9.45906C76.9947 9.15906 77.9747 8.95906 77.9747 7.95906C77.9747 7.21906 77.5347 6.59906 76.0347 6.59906C74.2547 6.59906 73.7147 7.15906 73.6147 8.51906H71.6147C71.7147 6.55906 72.9947 5.01906 76.1147 5.01906C78.2147 5.01906 79.8947 5.89906 79.8947 8.53906V13.2191C79.8947 13.9591 79.9947 14.3391 80.3747 14.3391C80.4347 14.3391 80.4947 14.3391 80.6147 14.3191V15.5191C80.2747 15.5991 79.9347 15.6391 79.6147 15.6391C78.6347 15.6391 78.1147 15.2591 77.9947 14.0991H77.9547C77.2947 15.1591 76.1347 15.8191 74.4747 15.8191ZM74.9147 14.2391C76.6747 14.2391 77.9747 13.3391 77.9747 11.5591V10.0991C77.6547 10.3991 76.7747 10.6191 75.7347 10.8391C73.9347 11.1991 73.1747 11.6991 73.1747 12.7591C73.1747 13.7191 73.6947 14.2391 74.9147 14.2391Z"
                fill="currentColor"
                viewBox="0 -1 100 102"
                width="100%"
                height="100%"
                overflow="visible"
              ></path>
            </svg>
          </Url>
        </Logo>


        <Navigation>
          <ListLeft $scrolled={scrolled}>
            {navLinks.map((link) => {
              const open = activeDropdown === link.name;

              if (link.dropdown) {
                const dd = productsDropdown;

                return (
                  <Item
                    key={link.name}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                  >
                    <Trigger type="button" aria-expanded={open}>
                      {link.name}
                      <Caret $open={open} />
                    </Trigger>

                    <MegaWrap>
                      <MegaPanel $open={open} onMouseLeave={() => setActiveDropdown(null)}>
                        <MegaLeft>
                          {dd.items.map((it) => (
                            <MegaCard key={it.title} to={it.to} onClick={() => setActiveDropdown(null)}>
                              <MegaTitleRow>
                                {it.title}
                                <Arrow>→</Arrow>
                              </MegaTitleRow>
                              <MegaDesc>{it.desc}</MegaDesc>
                            </MegaCard>
                          ))}
                        </MegaLeft>

                        <MegaRight>
                          <RightImage src={dd.featured.img} alt="" />
                          <RightTitle>{dd.featured.title}</RightTitle>
                          <RightLink href={dd.featured.href}>
                            {dd.featured.cta} <span>→</span>
                          </RightLink>
                        </MegaRight>
                      </MegaPanel>
                    </MegaWrap>
                  </Item>
                );
              }

              return (
                <Item key={link.name}>
                  <Link
                    to={link.to}
                    style={{
                      padding: "10px 14px",
                      color: "#222",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                    onMouseEnter={() => setActiveDropdown(null)}
                  >
                    {link.name}
                  </Link>
                </Item>
              );
            })}
          </ListLeft>

          <ListRight>
            <Container $scrolled={scrolled}>
              <a href="" style={{ color: "#222", textDecoration: "none", fontWeight: 600 }}>
                login
              </a>
              <CtaLink to="/demo">Book a demo</CtaLink>
            </Container>
          </ListRight>
        </Navigation>

       {/* Mobile button (right side) */}
<MobileActions>
<MenuBtn
  onClick={() => {
    setMobileOpen((v) => {
      const next = !v;
      if (!next) setMobileProductsOpen(false); // collapse accordion when closing
      return next;
    });
    setActiveDropdown(null);
  }}
>
  {!mobileOpen ? <Menu /> : <X />}
</MenuBtn>

</MobileActions>

{/* Fullscreen Mobile Sheet */}
<MobileSheet $open={mobileOpen} onClick={closeAll}>
  <MobileSheetInner>
    <MobilePanelWrap onClick={(e) => e.stopPropagation()}>
      <MobileContent>
        <MobileList>
          {/* Products accordion */}
          <div>
            <MobileButton onClick={() => setMobileProductsOpen((v) => !v)}>
              <span>Products</span>
              <Chevron $open={mobileProductsOpen} />
            </MobileButton>

            {mobileProductsOpen && (
              <MobileSub>
                {productsDropdown.items.map((it) => (
                  <MobileSubLink key={it.title} to={it.to} onClick={closeAll}>
                    {it.title}
                  </MobileSubLink>
                ))}
              </MobileSub>
            )}
          </div>

          <MobileLinkRow to="/integrations" onClick={closeAll}>
            <span>Integrations</span>
          </MobileLinkRow>

          <MobileLinkRow to="/customers" onClick={closeAll}>
            <span>Customers</span>
          </MobileLinkRow>

          <MobileLinkRow to="/pricing" onClick={closeAll}>
            <span>Pricing</span>
          </MobileLinkRow>

          <MobileLinkRow to="/resources" onClick={closeAll}>
            <span>Resources</span>
          </MobileLinkRow>
        </MobileList>
      </MobileContent>
    </MobilePanelWrap>
  </MobileSheetInner>
</MobileSheet>


      </Nav>
    </NavbarComponent>
  );
}