import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Heading>Sephirot</Heading>
    </div>
  );
}
