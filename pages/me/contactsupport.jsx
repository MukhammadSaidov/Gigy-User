import { Input } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../../app/components/LayOut/Layout.jsx'
import { Box } from '@chakra-ui/layout';
import { Search2Icon } from '@chakra-ui/icons';
import ContactSupport from '../../app/containers/Knowledge/content/ContactSupport.jsx';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Support</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout searchInput={
        <Box margin="30px 0" width="389px" height="40px" padding="7px 20px" borderRadius="4px" display="flex" alignItems="center" background="#F5F4F6" >
          <Search2Icon color="#603E94" />
          <Input paddingLeft="15px" variant="unstyled" placeholder="Search Academy courses and classes..." />
        </Box>
      }> {/* Layout Inputs */}
        <ContactSupport />
      </Layout>
    </div>
  )
}
 