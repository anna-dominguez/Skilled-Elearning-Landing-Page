import Skill from './Skill'

const skills = [
  {
    title: 'Animation',
    image: '/images/icon-animation.svg',
    content:
      'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
  },
  {
    title: 'Design',
    image: '/images/icon-design.svg',
    content:
      'Create beautiful, usable interfaces to help shape the future of how the web looks.',
  },
  {
    title: 'Photography',
    image: '/images/icon-photography.svg',
    content:
      'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
  },
  {
    title: 'Crypto',
    image: '/images/icon-crypto.svg',
    content:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
  },
  {
    title: 'Business',
    image: '/images/icon-business.svg',
    content:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
  },
]

const Skills = () => (
  <div className="px-4 sm:px-[10%] bg-gradient-to-b from-[#F2F2F2] to-[#F0F1FF] grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-[80px] max-md:gap-y-[40px] sm:pt-6 pb-[140px] ">
    <div className="rounded-2xl bg-gradient-to-b from-orange to-red md:text-headingM text-headingS font-extrabold text-[#FFF] pt-6 md:pt-16 md:px-8 px-7 max-md:pb-8 ">
      Check out our most popular courses!
    </div>
    {skills.map((skill) => (
      <Skill key={skill.title} skill={skill} />
    ))}
  </div>
)

export default Skills
