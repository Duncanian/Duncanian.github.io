import ProjectCard from './ProjectCard'

const projects = [
  {
    image: '/balance.png',
    title: 'Balance Checker',
    website: 'https://sleepy-bhabha-a38246.netlify.app/'
  },
  // {
  //   image: '/bible.png',
  //   title: 'Bible In a Year',
  //   website: 'https://bible-in-a-year.vercel.app/',
  // },
  // {
  //   image: '/opensea.png',
  //   title: 'Opensea Clone',
  //   website: 'https://opensea-clone-iota.vercel.app/',
  // },
  // {
  //   image: '/uniswap.png',
  //   title: 'Uniswap Clone',
  //   website: 'https://uniswap-clone-roan.vercel.app/',
  // },
  // {
  //   image: '/instagram.png',
  //   title: 'Instagram Clone',
  //   website: 'https://instagram-clone-pi-ten.vercel.app/',
  // },
  // {
  //   image: '/medium.png',
  //   title: 'Medium Clone',
  //   website: 'https://medium-clone-sigma-indol.vercel.app/',
  // },
  // {
  //   image: '/hulu.png',
  //   title: 'Hulu Clone',
  //   website: 'https://hulu-clone-swart-gamma.vercel.app/',
  // },
  // {
  //   image: '/zoom.png',
  //   title: 'Zoom Clone',
  //   website: 'https://zoom-meeting-clone.herokuapp.com/',
  // },
  // {
  //   image: '/disney.png',
  //   title: 'Disney+ Clone',
  //   website: 'https://disney-clone-3f461.web.app/',
  // },
]

function Projects() {
  return (
    <section className="flex-col items-center justify-center border-b border-amber-400 bg-slate-900 p-4">
      <div className="p-4 text-center text-xl font-bold">Projects</div>
      <div className="flex flex-wrap items-start justify-between space-y-8 p-4">
        {projects &&
          projects.map((project, idx) => (
            <ProjectCard key={idx} idx={idx} {...project} />
          ))}
      </div>
    </section>
  )
}

export default Projects
