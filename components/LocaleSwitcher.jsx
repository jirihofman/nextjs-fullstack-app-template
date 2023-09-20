import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const otherLocale = locale === 'en' ? 'cs' : 'en';
    const pathname = usePathname();

    return (
        <Link href={pathname} locale={otherLocale}>
            <button size='sm' className='me-2 ms-2'>
                {locale === 'cs' ? '🇬🇧' : '🇨🇿'}
            </button>
        </Link>
    );
}
