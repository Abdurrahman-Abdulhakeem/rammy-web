import { useEffect, useRef, useState } from "react";
import { NavLinks } from "./Navbar";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const Hamburger = ({ targetSection, children }) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const lastScrollY = useRef(0);

  const [burgerAnimationClass, setBurgerAnimationClass] = useState("");

  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    if (!isExpanded) {
      setBurgerAnimationClass("animate-expandCircle");
      setTimeout(() => setShowContent(true), 500);
    } else {
      setBurgerAnimationClass("animate-contractCircle");
      setShowContent(false);
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY >
          targetSection.current?.offsetTop + targetSection.current?.offsetHeight
      ) {
        if (!showBurgerMenu) {
          setAnimationClass("animate-bounceIn");
          setShowBurgerMenu(true);
        }
      } else if (
        currentScrollY < lastScrollY.current &&
        currentScrollY < targetSection.current?.offsetTop
      ) {
        if (showBurgerMenu) {
          setAnimationClass("animate-slowGoOut");
          setBurgerAnimationClass("hidden");
          setIsExpanded(false);
          setTimeout(() => setShowBurgerMenu(false), 600); // Match the exit animation duration
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBurgerMenu]);

  return (
    <>
      <div
        className={`z-50 fixed right-0 top-0 bg-slate-400 ${burgerAnimationClass}`}
      >
        {showContent && (
          <div
            className={`fade-in relative justify-center h-full mx-20 md:mx-auto max-w-screen-sm flex flex-col`}
          >
            <span>
              <Link
                href={"/"}
                className="font-bold text-3xl text-black hover:text-slate-700"
              >
                HOME
              </Link>
              {NavLinks.map((nav) => (
                <div>
                  <Link
                    href={nav.path}
                    key={nav.path}
                    className="font-bold text-3xl  text-black hover:text-slate-700"
                  >
                    {" "}
                    {nav.title}{" "}
                  </Link>
                </div>
              ))}

              <div className="mt-7 text-black  font-bold sm:max-w-48 text-right">
                <p>
                  <a className="hover:text-slate-700" href="">
                    LINKEDIN
                  </a>
                </p>
                <p>
                  <a className="hover:text-slate-700" href="">
                    GITHUB
                  </a>
                </p>
                <p>
                  <a
                    className="flex items-center justify-end self-end group"
                    href=""
                  >
                    {" "}
                    <span className="first:group-hover:text-slate-700">
                      FACEBOOK PAGE
                    </span>{" "}
                    <span>
                      {" "}
                      <FaFacebook />
                    </span>{" "}
                  </a>
                </p>
              </div>
            </span>
          </div>
        )}
      </div>

      {showBurgerMenu && (
        <>
          <div
            onClick={handleClick}
            className={`z-50  fixed top-6 h-14 w-14 rounded-full right-4 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 ${animationClass} ${
              isExpanded ? "bg-black" : "bg-slate-400"
            }`}
          >
            <div
              className={`w-6 h-0.5 transition duration-200 bg-white mb-1 ${
                isExpanded && "w-4 -skew-y-[35deg] -ml-2 mb-0.5"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 transition duration-200 bg-white mb-1 ${
                isExpanded && "w-7 mt-0.5 "
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 transition duration-200 bg-white ${
                isExpanded && "w-4 skew-y-[35deg] -ml-2 mt-0.5"
              }`}
            ></div>
          </div>
        </>
      )}

      {children}
    </>
  );
};

export default Hamburger;
