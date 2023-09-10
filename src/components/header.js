import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
export default function Header() {
    return (
      <main>
  <div className=" mt-3 ml-3">
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>

          <Link href="./"><Tab>Home</Tab></Link>
          <Link href="./project"><Tab>Projects</Tab></Link>
          <Link href="./about"><Tab>About</Tab></Link>
          <Link href="./contact"><Tab>Contact</Tab></Link>

        </TabList>
      </Tabs>
      </div>
      </main>
    )
  }
  