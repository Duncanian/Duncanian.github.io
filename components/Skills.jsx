const arrayOne = [
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS',
  'Hardhat',
  'Web3.js',
  'Solidity',
]

const arrayTwo = [
  'NodeJS',
  'ExpressJS',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
]

function Skills() {
  return (
    <section className="w-full flex-col items-center justify-center border-b border-amber-400 bg-slate-900">
      <div className="p-4 text-center text-xl font-bold">Skills</div>
      <div className="wrap flex items-start justify-around p-4">
        <div className="p-4">
          {arrayOne && arrayOne.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
        <div className="p-4">
          {arrayTwo && arrayTwo.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Skills
