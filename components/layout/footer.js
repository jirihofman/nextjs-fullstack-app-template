import { useTranslations } from 'next-intl';
import pjson from '../../package.json';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
    
    const t = useTranslations('Index');

    return (
        <Navbar className='w-100 justify-content-between'>
            {/* See https://nextjs.org/blog/next-9-4#new-environment-variables-support for NODE_ENV hack */}
            <span className="text-muted" style={{ fontSize: 'small' }}>{pjson.name} ({t('version')}: {[process.env.NEXT_PUBLIC_NODE_ENV || process.env.NODE_ENV, pjson.version].join('-')})</span>
            <span className="float-end" style={{ fontSize: 'small' }}>
                {t('footer.developedWithLove')}
            </span>
        </Navbar>
    );
}
