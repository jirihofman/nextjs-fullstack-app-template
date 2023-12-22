import { useLocale } from 'next-intl';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const otherLocale = locale === 'en' ? 'cs' : 'en';
    const { Link, usePathname } = createSharedPathnamesNavigation({ locale });
    const pathname = usePathname();

    return (
        <Link href={pathname} locale={otherLocale}>
            <button size='sm' className='me-2 ms-2'>
                {locale === 'cs' ? '🇬🇧' : '🇨🇿'}
            </button>
        </Link>
    );
}
