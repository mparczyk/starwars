import { Outlet, useMatches } from "react-router-dom";

import { menu } from "./menuItems";
import {
  StyledContent,
  StyledHeader,
  StyledLayout,
  StyledMenu,
  StyledFooter,
} from "./styles";

import { LanguageSwitcher } from "../../UI/LanguageSwitcher/LanguageSwitcher";
import { AccountCollapse } from "../Account";
import { Language } from "../../i18n/lang";

export const StartSite = (): JSX.Element => {
  const matches = useMatches();
  Object.entries(Language).forEach(([key, value]) => console.log(key, value));

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledMenu
          mode="horizontal"
          defaultSelectedKeys={[matches.at(-1)?.id ?? ""]}
          items={menu}
        />
        <LanguageSwitcher />
        <AccountCollapse />
      </StyledHeader>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <StyledFooter>Star Wars App ©2023 Created by Marek</StyledFooter>
    </StyledLayout>
  );
};
