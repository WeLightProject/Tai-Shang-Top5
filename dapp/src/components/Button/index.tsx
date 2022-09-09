export interface Props {
  colorStyle: 'white' | 'green',
  buttonText: string,
  wide?: boolean,
  font?: string,
  fontSize?: 'lg',
}

export default function index({ colorStyle, buttonText, wide, fontSize, font = 'Inter' }: Props) {
  return <span className={`px-6 py-2 rounded cursor-pointer font-bold
      ${wide && 'px-0 w-52 inline-block text-center'}
      ${colorStyle === 'white' && 'border border-solid border-white text-white'}
      ${colorStyle === 'green' && 'bg-gradient-to-r from-xc2-a to-xc2-b text-black'}
      ${!fontSize && 'text-[20px]'}
      ${fontSize === 'lg' && 'text-[24px]'}
      ${`font-${font}`}`}>
    {buttonText}
  </span>
}
