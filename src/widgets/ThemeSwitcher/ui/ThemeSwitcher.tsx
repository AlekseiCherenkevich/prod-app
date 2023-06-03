import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from 'widgets/ThemeSwitcher/ui/ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarktIcon from 'shared/assets/icons/theme-dark.svg'



interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightIcon/> : <DarktIcon/> }
    </button>
  );
};
