import Link from "next/link"


export default function Contact() {
    return (
      <main className=" ">
          <div className="flex flex-col lg:flex-row justify-between pr-10 pl-10">
          <img className="h-[32rem]" src="../contact.jpg" />
            <div>
              <h1 className="font-mono text-2xl font-bold mt-10 text-center" >I'm Here For you</h1>
              <div className="flex flex-col gap-8" >
                <div><p className="text-gray-600 font-mono mt-10" >Stay connected with me! I value your engagement <br/>and would love to hear from you. Whether you have <br/>a question, feedback, or just want to say hello,<br/> you can reach me through multiple channels</p></div>
                <div className="flex gap-10 items-center" > <img className="h-10" src="../phone.png" /><Link href={'tel:+923343615281'} > <p className="text-yellow-500 font-mono font-bold text-xl" >+923343615281</p></Link> </div>
                <div className="flex gap-10 items-center"> <img className="h-10" src="../mail.png" /> <Link href={'mailto:syedmurtazaaliofficial@gmail.com'}><p className="text-yellow-500 font-mono font-bold text-xl">syedmurtazaaliofficial@gmail.com</p></Link></div>
                <div className="flex gap-10 items-center"> <img className="h-10" src="../linkedin.png" /><Link href={'https://www.linkedin.com/in/murtazaalipk/'} ><p className="text-yellow-500 text-xl font-mono mt-2 font-bold">murtazaalipk</p></Link></div>
              </div>
            </div>
          </div>
      </main>
    )
  }