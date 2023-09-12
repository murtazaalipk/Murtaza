export default function About() {
  return (
    <main className=" mt-6 ">
      <div>
        <h1 className="text-center text-4xl font-mono">What I Do</h1>
        <p className="ml-36 mr-36 m-10  text-center font-mono text-gray-600">
          I'm a passionate frontend developer with expertise in HTML, CSS,
          and JavaScript. Currently, I'm immersed in the world of
          Next.js, crafting modern and responsive web experiences. My journey in
          web development has been driven by a deep curiosity and a commitment
          to delivering elegant, user-centric solutions. Whether it's building
          interactive user interfaces or optimizing performance, I thrive on
          turning creative ideas into seamless digital realities. I'm dedicated
          to staying at the forefront of technology trends and pushing the
          boundaries of what's possible in web development. Let's connect and
          create something remarkable together
        </p>
      </div>
      <div className="flex justify-center gap-20 mt-20">
        <img className="mb-20 h-96 border-solid border-4 rounded-full border-gray-600" src="../my.png" />
        <div>
              <h1 className=" text-gray-600 font-sans font-bold text-3xl mt-14 " >Syed Murtaza Ali</h1>
              <h1 className=" text-gray-600 font-sans font-bold text-3xl mt-8" >Frontend developer</h1>
              <h1 className=" text-gray-600 font-sans font-bold text-3xl mt-8" >Enrolled in BS Software Engineering at Smiu</h1>
              <h1 className=" text-gray-600 font-sans font-bold text-3xl mt-8" >Enrolled in Mern Stack at Smit</h1>
        </div>
      </div>
    </main>
  );
}
