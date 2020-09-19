import Link from 'next/link'


const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
     
      <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/cats">
        <a style={linkStyle}>Cats</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
     
    </div>
  )
}
