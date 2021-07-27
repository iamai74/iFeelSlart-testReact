import React from 'react';
import { useTranslation } from 'react-i18next';
import {EPG} from "../../containers/EPG";

export default function Home(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
            <h1>{t('VOD List')}</h1>
            <EPG/>
            <h1>{t('EPG List')}</h1>
            <EPG/>
        </div>
    );
}
