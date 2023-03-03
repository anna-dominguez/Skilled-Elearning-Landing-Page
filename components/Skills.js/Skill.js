import Image from 'next/image'

const Skill = ({ skill }) => {
  const { title, image, content } = skill
  return (
    <div className="grid relative min-md:min-h-[322px] max-md:min-h-[259px] shadow-[0_25px_50px_rgba(6,22,141,0.0442381)] bg-[#FFF] rounded-[15px] pt-[64px] px-[32px] max-md:pt-[56px]">
      <Image
        className="absolute -top-7 left-[32px]"
        src={image}
        width={56}
        height={56}
      />
      <div className="text-headingXS md:text-headingS font-extrabold mb-[24px] max-md:mb-[16px]">
        {title}
      </div>
      <div className="text-grey text-bodyS md:text-bodyM">{content}</div>
      <button className="justify-self-start mb-[40px] max-md:mb-[32px] button hover:opacity-50 text-darkpink text-bodyM font-bold mt-[24px]">
        Get Started
      </button>
    </div>
  )
}

export default Skill
