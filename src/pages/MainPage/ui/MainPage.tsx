import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      {t('Главная страница')}
      description
    </div>
  );
};

export default MainPage;
