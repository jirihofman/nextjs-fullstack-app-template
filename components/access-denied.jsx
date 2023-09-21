import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AccessDenied() {

    const t = useTranslations('Index');

    return (
        <div style={{ borderLeft: '2px solid red', padding: '10px 30px' }}>
            <h1>{t('accessDenied1')}</h1>
            <p>
                <Link href="/api/auth/signin" legacyBehavior>{t('accessDenied2')}</Link>
            </p>
        </div>
    );
}
