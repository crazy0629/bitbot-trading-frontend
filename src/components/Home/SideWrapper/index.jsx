import React from "react";
import { useLocation } from "react-router-dom";
// @import styles
import { BotList, BotItem, SideWraper } from "./side.style";
import { SiProbot } from "react-icons/si";
import { TbManualGearbox, TbMoon } from "react-icons/tb";
import { RiSwapBoxLine } from "react-icons/ri";
import { BsWindowSidebar } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
// @import resource

const SideComponent = () => {
  const location = useLocation();
  const botListData = [
    {
      icon: <SiProbot />,
      text: "Bot",
    },
    {
      icon: <TbManualGearbox />,
      text: "Manual",
    },
    {
      icon: <RiSwapBoxLine />,
      text: "Swap",
    },
  ];
  const modeListData = [<BsWindowSidebar />, <AiOutlineMessage />];
  return (
    location.pathname != "/login" &&
    location.pathname != "/register" && (
      <SideWraper>
        <BotList>
          {botListData.map((e, index) => (
            <BotItem key={`${index}q`}>
              {e.icon}
              {e.text}
            </BotItem>
          ))}
        </BotList>
        <BotList>
          {modeListData.map((e, index) => (
            <BotItem key={`${index}w`}>{e}</BotItem>
          ))}
        </BotList>
      </SideWraper>
    )
  );
};

export default SideComponent;
