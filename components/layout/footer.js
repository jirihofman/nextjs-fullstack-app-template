'use client';

// TODO: rework transaltions
import useTranslation from 'next-translate/useTranslation';
import pjson from '../../package.json';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='navbar navbar-light bg-light'>
            {/* See https://nextjs.org/blog/next-9-4#new-environment-variables-support for NODE_ENV hack */}
            <span className="text-muted" style={{ fontSize: 'small' }}>{pjson.name} ({t('common:version')}: {[process.env.NEXT_PUBLIC_NODE_ENV || process.env.NODE_ENV, pjson.version].join('-')})</span>
            {t('common:footer.developedWithLove')}
        </footer>
    );
}
