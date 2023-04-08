import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import ErrorIcon from '@mui/icons-material/Error'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Test Cases</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <a
              href='https://github.com/ank1traj/testcase-generator'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Wanna Contribute &hearts;
              <code className={styles.code}>write and send it on GitHub</code>
            </a>
          </p>
          <div className={styles.author}>
            <a
              href='https://www.linkedin.com/in/ank1traj/'
              target='_blank'
              rel='noopener noreferrer'
            >
              By Ankit Raj
            </a>
            <div className={styles.glow} />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href='/generator/integerGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Integer <HourglassEmptyIcon style={{ color: 'blue' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Generate random integers</p>
          </Link>

          <Link
            href='/generator/stringGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              String <CheckCircleIcon style={{ color: 'green' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random string of characters.
            </p>
          </Link>

          <Link
            href='/generator/arrayGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Array <CheckCircleIcon style={{ color: 'green' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random array of integer & float values.
            </p>
          </Link>

          <Link
            href='/generator/binaryTreeGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Binary Tree <ErrorIcon style={{ color: 'red' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random binary tree of integer values.
            </p>
          </Link>

          <Link
            href='/generator/linkedListGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Linked List <ErrorIcon style={{ color: 'red' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random linked list of integer values.
            </p>
          </Link>

          <Link
            href='/generator/graphGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Graph <CheckCircleIcon style={{ color: 'green' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random graph of integer/char values.
            </p>
          </Link>
          <Link
            href='/generator/matrixGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Matrix <HourglassEmptyIcon style={{ color: 'Blue' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random Matrix of integer/char values.
            </p>
          </Link>
          <Link
            href='/generator/palindromeGenerator'
            className={styles.card}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Palindrome <CheckCircleIcon style={{ color: 'green' }} />{' '}
              <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Generate random Palindrome of integer/char values.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
