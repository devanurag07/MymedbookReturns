import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  PRIMARY_COLOR,
  SIDEBAR_SECONDARY_COLOR,
} from "../../../constants/colors";

import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",

    "& .sub-links": {
      display: "none",
    },

    // Normal Link Selected
    "& .selected": {
      "& .headlink-title": {
        color: PRIMARY_COLOR,
      },
      "& .parent-link": {
        background: "white",
        padding: "0.6em 1em",
        borderRadius: "10px",

        "& .icon": {
          marginRight: "0.8em",

          "& svg": {
            color: PRIMARY_COLOR,
          },
        },
      },
      // Sub-Link Selected

      "& .sublink-selected *": {
        color: PRIMARY_COLOR,
      },
    },

    // Multiple: Link Selected
    "& .expand-icon": {
      transition: "all 0.5s ease",
      color: PRIMARY_COLOR,
    },

    "& .expanded": {
      "& .sub-links": {
        display: "block",
      },
      "& .expand-icon": {
        transform: "rotate(90deg)",
      },
    },
  },

  sidebarLink: {
    transition: "all 5s ease",

    // Normal Link
    "& .parent-link": {
      padding: "0.6em 1em",
      borderRadius: "10px",
      marginBottom: "10px",
      backgroud: SIDEBAR_SECONDARY_COLOR,

      "& .icon": {
        marginRight: "0.8em",
        "& svg": {
          color: SIDEBAR_SECONDARY_COLOR,
        },
      },
    },

    // Normal Link:hover

    "&:hover": {
      "& .parent-link": {
        background: "white",
        padding: "0.6em 1em",
        borderRadius: "10px",

        "& .icon": {
          marginRight: "0.8em",

          "& svg": {
            color: PRIMARY_COLOR,
          },
        },
      },
    },
  },

  subLink: {
    padding: "0.2em 0em 0em 3em",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const [selectedLink, setSelectedLink] = useState("");
  const [subLinkSelected, setSubLinkSelected] = useState("");
  const [expandedLink, setExpandedLink] = useState("");

  const linkClickHandler = (linkName) => {
    return () => {
      setSubLinkSelected("");
      if (expandedLink == linkName) {
        setExpandedLink("");
      } else {
        setExpandedLink(linkName);
      }
      setSelectedLink(linkName);
    };
  };

  const getLinkStyleCls = (linkName) => {
    // if (linkName == selectedLink) {
    //   let style="s";
    //   if (linkName == expandedLink) {
    //     style_cls += " expanded";
    //   }
    //   return style_cls;
    // }
    // return "";
    if (linkName == selectedLink) {
      let style_cls = " selected";
      if (linkName == expandedLink) {
        style_cls += " expanded";
      }
      return style_cls;
    }

    return "";
  };

  const dispatch = useDispatch();

  const links = [
    {
      name: "Dashboard",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-monitor"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      type: "single",
    },
    {
      name: "Appointments",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      type: "single",
    },
    {
      name: "Patients",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-users"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      type: "single",
    },
    {
      name: "Doctors",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-activity"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      type: "single",
    },
    {
      name: "Authentication",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-activity"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      type: "multiple",
      sub_links: [
        {
          title: "Login",
          url: "/login",
        },
      ],
    },
  ];

  const getSubLinks = (link, setSelectedLink) => {
    const handleClick = (subLinkTitle) => {
      return () => {
        setSelectedLink(link.name);
        setSubLinkSelected(subLinkTitle);
      };
    };

    const isSubLinkSelected = (subLinkTitle) => {
      if (subLinkTitle == subLinkSelected) {
        return " sublink-selected";
      }
      return "";
    };

    return (
      <div className={classes.subLinksContainer + " sub-links"}>
        {link.sub_links.map((link) => {
          return (
            <div
              className={
                classes.subLink + " flex" + isSubLinkSelected(link.title)
              }
              onClick={handleClick(link.title)}
            >
              <i class="icon-Commit">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              <Typography
                variant="subtitle2"
                color={SIDEBAR_SECONDARY_COLOR}
                style={{ marginLeft: "1em" }}
              >
                {link.title}
              </Typography>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      {links.map((link) => {
        return (
          <div>
            <div className={classes.sidebarLink + getLinkStyleCls(link.name)}>
              <div
                className="parent-link flex-space-between"
                onClick={linkClickHandler(link.name)}
              >
                <div className="left flex ">
                  <div className="icon">{link.svg}</div>
                  <Typography
                    variant="subtitle2"
                    color={SIDEBAR_SECONDARY_COLOR}
                    className="vertical-center headlink-title"
                  >
                    {link.name}
                  </Typography>
                </div>

                {link.type == "multiple" && (
                  <div className="right vertical-center ">
                    <i class="fa-solid fa-angle-right expand-icon"></i>
                  </div>
                )}
              </div>

              {link.type == "multiple" && getSubLinks(link, setSelectedLink)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
