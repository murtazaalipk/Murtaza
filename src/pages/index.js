import { Inter } from "next/font/google";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" m-6">
      <div className="flex justify-start gap-20">
        <div className="flex flex-col gap-10">
          <h1 className=" text-7xl font-bold font-mono">Hi,</h1>
          <h1 className=" text-7xl font-bold font-mono">
            I'm Syed Murtaza Ali
          </h1>
          <h3 className=" text-4xl font-mono">frontend Developer</h3>
        </div>
        <div>
          <img
            className=" border-8 border-[#c6f6d5] border-solid h-96 rounded-full"
            src="../mypic.jpg"
          />
        </div>
      </div>
      <div className=" -mt-20">

      <Link href={'./project'} > <Button  colorScheme='green' variant='solid'>
    See my Projects
  </Button></Link>
      </div>
    </main>
  );
}
