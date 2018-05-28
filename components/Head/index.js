import Head from 'next/head'

export default ({title = 'This is the default title' }) => (
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/static/react-md.amber-teal.min.css' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      <link rel='stylesheet' href='/static/styles/tailwind.css' />
      <link rel='stylesheet' href='/static/styles.css' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

)
