import OrgCard from './OrgCard'

const volunteering = [
  {
    image: '/andela.jpg',
    title: 'Bootcamp Learning Facilitator',
    subTitle: 'Andela',
    date: 'Jan 2019 - Feb 2019',
    description: 'Science and Technology',
  },
  {
    image: '/stjohn.jpg',
    title: 'First Aid Volunteer',
    subTitle: 'St John Ambulance',
    date: 'Feb 2015 - Sep 2017',
    description: 'Health',
  },
]

function Volunteer() {
  return (
    <section className="flex-col items-center justify-center border-b border-amber-400">
      <div className="p-4 text-center text-xl font-bold">
        Volunteering &amp; Hobbies
      </div>
      <div className="flex flex-col items-start justify-center">
        {volunteering &&
          volunteering.map((volunteer, idx) => (
            <OrgCard key={idx} {...volunteer} />
          ))}
      </div>
    </section>
  )
}

export default Volunteer
