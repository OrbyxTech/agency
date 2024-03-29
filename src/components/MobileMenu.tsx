import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLangButton from "./ChangeLangButton";
import { menuItems } from "../utils/http";
import { menuItemOptions } from "../utils/http/menuItems";
// import {
//     Accordion,
//     AccordionButton,
//     AccordionIcon,
//     AccordionItem,
//     AccordionPanel,
//     Box
// } from "@chakra-ui/react"
import { ApplicationRoutes } from "../routes";
import LoginStateButton from "./shared/LoginStateButton";
import { useAuth } from "../context/AuthContext";

const getLang = (lng) => {
  const languages = ["en", "fa"];
  return languages.find((v) => v === lng) || "fa";
};

function MobileMenu() {
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation();
  const [items, setItems] = useState<menuItemOptions>();
  // const navigate = useNavigate()

  useEffect(() => {
    menuItems({ lng: getLang(i18n.language) }).then((data) => setItems(data));
  }, [i18n.language]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-white/10 grid place-items-center active:scale-95 transition-transform duration-200"
      >
        <AiOutlineMenu className="w-5 h-5 fill-slate-100" />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full pointer-events-none z-50
                ${isOpen ? "!pointer-events-auto" : ""}
                `}
      >
        <div
          id="mobile-menu-back"
          onClick={() => setIsOpen(false)}
          className={`absolute top-0 left-0 z-10 w-full h-full bg-black/40 pointer-events-none opacity-0
                    transition-opacity duration-300
                    ${isOpen ? "!opacity-100 !pointer-events-auto" : ""}`}
        ></div>

        <div
          className={`w-64 h-full bg-gray-900 absolute top-0 right-0 translate-x-full z-20
                    gap-y-3 pt-6 grid grid-rows-[max-content_1fr_max-content]
                    transition-transform duration-300 ${
                      isOpen ? "!translate-x-0" : ""
                    }`}
        >
          <Link
            to="/ecommerce-webapp_vite_react"
            className="text-2xl font-[iranyekan500] text-slate-50 block mx-auto"
          >
            {t("mobile-menu.title")}
          </Link>

          {/* <div dir={i18n.dir(i18n.language)} className="flex flex-col gap-y-2 px-3 mt-5">
                        {
                            items?.items?.map(item => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="text-base text-slate-100 font-[iranyekan500] w-full p-3 rounded-lg
                                    hover:bg-white/5 transition-colors duration-300"
                                >
                                    {item.text}
                                </Link>
                            ))
                        }
                    </div> */}

          <div
            onClick={() => document.getElementById("mobile-menu-back").click()}
            className="flex flex-col gap-y-3 px-2"
          >
            <Link
              to={ApplicationRoutes.pages.home}
              className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {t("header.home")}
            </Link>

            <Link
              to={ApplicationRoutes.pages.company["about-us"]}
              className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {t("about-us.title")}
            </Link>

            {/* <HashLink
              to={getBaseUrl() + "#our-services-section"}
              className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {t("home.services.title")}
            </HashLink> */}

            <Link
              to={ApplicationRoutes.pages.work.project}
              className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {t("header.work.sub-links.project")}
            </Link>

            <Link
              to={ApplicationRoutes.pages.blog.blog}
              className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {t("header.blog.text")}
            </Link>

            <Link
              to={ApplicationRoutes.pages.contact}
              className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
            >
              {t("header.contact")}
            </Link>

            {user !== null && (
              <Link
                to={"/order-project"}
                className="p-2.5 text-white text-sm font-[iranyekan400] tracking-wide
                            hover:bg-white/5 rounded-lg transition-colors duration-300"
              >
                {t("header.order-project")}
              </Link>
            )}

            <LoginStateButton className="p-2.5 text-white text-sm font-[iranyekan400] rtl:text-right ltr:text-left tracking-wide hover:bg-white/5 rounded-lg transition-colors duration-300" />
          </div>

          {/* <Accordion
                        allowMultiple
                        display="flex"
                        flexDirection="column"
                        rowGap="5px"
                        mx="4px"
                        overflowY="auto"
                    >

                        {
                            items?.items?.map(item => (
                                <AccordionItem
                                    key={item.id}
                                    border="none"
                                    color="whiteAlpha.800"
                                >
                                    <AccordionButton
                                        onClick={() => item?.items?.length === 0 ? navigate(item.link) : null}
                                        display="flex"
                                        justifyContent="space-between"
                                        transition="all"
                                        transitionDuration="300ms"
                                        rounded="lg"
                                        _hover={{
                                            bgColor: "whiteAlpha.100"
                                        }}
                                        _expanded={{
                                            bgColor: item?.items?.length > 0 ? "whiteAlpha.100" : ""
                                        }}
                                    >
                                        {item.text}
                                        {
                                            item?.items?.length > 0
                                            ?
                                                <AccordionIcon />
                                            :
                                                false
                                        }
                                    </AccordionButton>
                                    <AccordionPanel padding={item?.items?.length > 0 ? "6px" : 0}>
                                        {
                                            item?.items?.map(item => (
                                                <Box
                                                    onClick={() => navigate(item.link)}
                                                    key={item.id}
                                                    borderLeft="1px"
                                                    borderColor="whiteAlpha.200"
                                                    px="4px"
                                                >
                                                    <p className="p-2 text-base font-[iranyekan300] px-3 rounded-lg hover:bg-white/5 transition-colors duration-300
                                                    cursor-pointer text-white/90">{item.text}</p>
                                                </Box>
                                            ))
                                        }
                                    </AccordionPanel>
                                </AccordionItem>
                            ))
                        }


                    </Accordion> */}

          <div
            className="mt-auto flex items-center gap-x-2 justify-center mb-6 mx-auto w-max rounded-xl
                    border border-slate-700"
          >
            <ChangeLangButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
