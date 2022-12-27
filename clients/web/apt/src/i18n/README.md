# usage

<!-- //    =============hooks===================== -->

<!-- import dependency -->

import ./i18n

import { useTranslation } from 'react-i18next';

<!-- initiate useTranslation -->

const { t } = useTranslation()

<!-- acess translated text -->

<p>t("object")</p>
