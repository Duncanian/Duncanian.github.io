import OrgCard from './OrgCard'

const experiences = [
  {
    image: '/microsoft.jpg',
    title: 'Software Engineer',
    subTitle: 'Microsoft - Full-time',
    date: 'July 2021 - Present',
    description: 'Nairobi, Kenya',
  },
  {
    image: '/sovtech.jpg',
    title: 'Software Engineer',
    subTitle: 'SovTech - Contract',
    date: 'Nov 2020 - Jun 2021',
    description: 'London, United Kingdom',
  },
  {
    image: '/bizi.jpg',
    title: 'Frontend Engineer',
    subTitle: 'Bizi - Full-time',
    date: 'June 2020 - Aug 2020',
    description: 'Evanston, Illinois, United States',
  },
  {
    image: '/no-image.png',
    title: 'Software Engineer',
    subTitle: 'Modtechy - Part-time',
    date: 'Nov 2019 - Mar 2020',
    description: 'Nairobi, Kenya',
  },
  {
    image: '/andela.jpg',
    title: 'Software Engineer',
    subTitle: 'Andela - Contract',
    date: 'Jul 2018 - Oct 2019',
    description: 'Nairobi, Kenya',
  },
  {
    image: '/no-image.png',
    title: 'Software Developer',
    subTitle: 'Acculynk Systems Ltd - Fulltime',
    date: 'Apr 2017 - Dec 2017',
    description: 'Nairobi, Kenya',
  },
]

function Experience() {
  return (
    <section className="flex-col items-center justify-center border-b border-amber-400">
      <div className="p-4 text-center text-xl font-bold">Experience</div>
      <div className="flex flex-col items-start justify-center">
        {experiences &&
          experiences.map((experience, idx) => (
            <OrgCard key={idx} {...experience} />
          ))}
      </div>
    </section>
  )
}

export default Experience
