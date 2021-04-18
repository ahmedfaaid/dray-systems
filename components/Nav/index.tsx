import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href='/'>
        <a>Logo</a>
      </Link>
    </nav>
  );
}
