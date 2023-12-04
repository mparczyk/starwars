import { useState } from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

import { localStorageLanguageKey } from "../../i18n/lang";
import { StyledText } from "./styles";

export const LanguageSwitcherDeutsch = ({
  handleOnClick,
}: {
  handleOnClick: (lng: string) => void;
}): JSX.Element => {
  const { i18n } = useTranslation();
  return (
    <StyledText
      strong={i18n.resolvedLanguage === "de"}
      onClick={() => handleOnClick("de")}
    >
      DE
    </StyledText>
  );
};
