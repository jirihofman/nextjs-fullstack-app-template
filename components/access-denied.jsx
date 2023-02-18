import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function AccessDenied() {

    const { t } = useTranslation();

    return (
        <div style={{ borderLeft: '2px solid red', padding: '10px 30px' }}>
            <h1>{t('common:accessDenied1')}</h1>
            <p>
                <Link href="/api/auth/signin" legacyBehavior>{t('common:accessDenied2')}</Link>
            </p>
        </div>
    );
}
