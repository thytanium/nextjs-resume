import Head from 'next/head'
import ExperienceItem from '../components/Resume/ExperienceItem'
import Bit from '../components/Resume/Bit'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro González - Full Stack Developer</title>
      </Head>
      <div className="border-t-4 border-indigo-700">
        <div className="bg-gray-200 px-4 pt-4 pb-20">
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <div className="xl:w-1/3 p-4 flex flex-col space-y-4">
              <ExperienceItem title="About Me">
                <div className="flex items-center justify-around p-4">
                  <img src="/images/me.jpg" alt="Me" className="w-32 h-32 rounded-full" />
                  <div className="flex flex-col justify-between">
                    <Bit label="email">
                      <a href="mailto:thytanium@gmail.com" className="text-indigo-700">thytanium@gmail.com</a>
                    </Bit>
                    <Bit label="linkedin">
                      <a href="https://linkedin.com/in/thytanium" target="_blank" className="text-indigo-700">Link</a>
                    </Bit>
                    <Bit label="twitter">
                      <a href="https://twitter.com/aleaugustog" target="_blank" className="text-indigo-700">@aleaugustog</a>
                    </Bit>
                  </div>
                </div>
                <p className="my-2 text-indigo-700">Why Tailwind UI</p>
                <p className="my-2">I think of myself as a Swiss Army knife of a developer because I'm passionate about the whole lifecyle of software, and that has driven me to learn technologies that apply to different layers of the stack, and it has created a good value for me that I can unconditionally offer to others.</p>
                <p className="my-2">I work in projects that inspire and challenge me. I'm certain that Tailwind UI and I share the same tech values, like compulsively caring for the little details.</p>
                <p className="my-2"></p>
                <p className="mt-8 mb-2 text-indigo-700">Story Time</p>
                <p className="my-2">Being an enthusiast of computers as a kid, I started hacking websites together when I was a teenager.</p>
                <p className="my-2">I have a Bachelor's Degree in Computer Science, and I have worked professionally in web-related projects <strong>for the past 9 years</strong>.</p>
                <p className="my-2">I started as a Full Stack mostly focused on PHP back-ends using the framework CodeIgniter before I dived myself into <strong>Laravel</strong>.</p>
                <p className="my-2">Before I knew it, I was involed in great part of the process: <strong>crafting UIs with React, containerizing apps with Docker, managing infrastructe in AWS</strong>.</p>
                <p className="my-2">In recent years, I've been filling front-end positions for the first time in my life. Now, I'm learning everyday about <strong>NodeJS</strong>, <strong>Vue</strong> and <strong>JAMstack</strong>.</p>
              </ExperienceItem>
            </div>
            <div className="xl:w-1/3 p-4 flex flex-col space-y-8">
              <ExperienceItem
                title="Lokavant"
                link="https://www.lokavant.com"
                type="project"
                companyName="Lokavant"
                date="2020-Present"
                tags={[
                  { name: 'react', color: 'purple' },
                  { name: 'typescript', color: 'blue' },
                  { name: 'tailwind', color: 'teal' },
                ]}
              >
                <p className="my-2">A real-time monitoring app for clinical research organizations.</p>
                <p className="my-2">First experience with Typescript.</p>
              </ExperienceItem>
              <ExperienceItem
                title="Dendri"
                link="http://www.dendri.com"
                type="project"
                companyName="Materialize Labs"
                date="2019-Present"
                tags={[
                  { name: 'react', color: 'purple' },
                  { name: 'php', color: 'blue' },
                  { name: 'laravel', color: 'red' },
                  { name: 'mysql', color: 'indigo' },
                  { name: 'graphql', color: 'pink' },
                  { name: 'elasticsearch', color: 'green' },
                  { name: 'bootstrap', color: 'blue' },
                  { name: 'kubernetes', color: 'indigo' },
                ]}
              >
                <p className="my-2">A project management software for law firms.</p>
                <p className="my-2">I designed and developed a SaaS application from scratch, with common PM functionalities like Kanban boards, tasks assignment, etc.</p>
                <p className="my-2">I used Terraform IaC for provisioning IaaS resources and automated CI/CD with GitLab.</p>
                <p className="my-2 text-gray-600">PD: I have no association with the current landing page.</p>
              </ExperienceItem>
              <ExperienceItem
                title="Task Sheriff"
                link="https://www.tasksheriff.com"
                type="project"
                companyName="Task Sheriff"
                date="2016-Present"
                // img="/images/tasksheriff.png"
                tags={[
                  { name: 'react', color: 'purple' },
                  { name: 'php', color: 'blue' },
                  { name: 'nodejs', color: 'teal' },
                  { name: 'laravel', color: 'red' },
                  { name: 'mysql', color: 'indigo' },
                  { name: 'elasticsearch', color: 'green' },
                  { name: 'aws', color: 'yellow' },
                  { name: 'tailwind', color: 'teal' },
                ]}
              >
                <p className="my-2">An AI-oriented fintech.</p>
                <p className="my-2">I designed and developed a whole ecosystem from scratch.</p>
                <p className="my-2">We first focused on a monolithic solution, but then moved to an API and separate apps approach.</p>
                <p className="my-2">One of my most versatile experiences. Work here ranged from a UI table to show records, to communicate with OCR and AI services to process images, to design and maintain a whole CI/CD chain.</p>
              </ExperienceItem>
              <ExperienceItem
                title="Socrates"
                type="project"
                companyName="Wintech"
                date="2011-2013"
                // img="/images/socrates-wide.png"
                tags={[
                  { name: 'php', color: 'blue' },
                  { name: 'codeigniter', color: 'red' },
                  { name: 'postgresql', color: 'indigo' },
                  { name: 'jquery', color: 'orange' },
                ]}
              >
                <p className="my-2">An academic management system.</p>
                <p className="my-2">I was responsible for the development of the Enrollment module, where students were allowed to enroll for the new semester and select their subjects.</p>
                <p className="my-2">First project I was involved that had a high user concurrency, where I learned to tune a web server.</p>
                <p className="my-2">I developed an algorithm to efficiently assign class schedules to students based on dynamic input of classrooms, teachers availability and periods.</p>
              </ExperienceItem>
            </div>
            <div className="xl:w-1/3 p-4 flex flex-col space-y-8">
              <ExperienceItem
                title="HDSC"
                type="project"
                companyName="IQVIA"
                date="2020"
                tags={[
                  { name: 'react', color: 'purple' },
                  { name: 'nodejs', color: 'teal' },
                ]}
              >
                <p className="my-2">A dashboard app for data science projects related to health industry.</p>
                <p className="my-2">I developed new features and refactored some modules to improve the project's maintainability, and I was later entrusted back-end tasks with NodeJS.</p>
                <p className="my-2">I developed a NodeJS script to migrate live data from Oracle database to new MySQL implementation.</p>
              </ExperienceItem>
              <ExperienceItem
                title="Claro Video"
                link="https://www.clarovideo.com"
                type="project"
                companyName="América Móvil"
                date="2018-2019"
                tags={[
                  { name: 'php', color: 'blue' },
                  { name: 'slim', color: 'red' },
                  { name: 'phalcon', color: 'red' },
                  { name: 'nodejs', color: 'teal' },
                  { name: 'python', color: 'blue' },
                  { name: 'oracle', color: 'indigo' },
                  { name: 'mongodb', color: 'teal' },
                  { name: 'cassandra', color: 'blue' },
                ]}
              >
                <p className="my-2">#1 video-on-demand platform from Latin America.</p>
                <p className="my-2">I started fixing bugs and doing maintenance, to later develop new features.</p>
                <p className="my-2">One of the most exciting things I got to develop was the "Watch Next Episode" feature for better user experience.</p>
                <p className="my-2">100% back-end development project.</p>
              </ExperienceItem>
              <ExperienceItem
                title="Parley.com.ve"
                link="https://www.parley.com.ve"
                type="project"
                companyName="PCV Sin Límites"
                date="2013-2016"
                // img="/images/parley.png"
                tags={[
                  { name: 'php', color: 'blue' },
                  { name: 'laravel', color: 'red' },
                  { name: 'mysql', color: 'indigo' },
                  { name: 'jquery', color: 'orange' },
                  { name: 'bootstrap', color: 'blue' },
                ]}
              >
                <p className="my-2">A betting software.</p>
                <p className="my-2">I was responsible for the development of the new product website from scratch with custom CMS.</p>
                <p className="my-2">I configured and made optimizations for high-traffic website with on-premise servers.</p>
                <p className="my-2">I led a project to develop a new major version of all management systems using better design patterns and coding practices, while focused on better UX.</p>
              </ExperienceItem>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
