import Head from 'next/head'
import Image from 'next/image'
import JobList from './components/joblist'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <>
      <JobList />
    </>
  );
}
