import { Plate } from '@shared/ui/plate'

export const App = () => {
  return (
    <div className="flex h-dvh w-dvw justify-center py-20">
      <div className="max-width-[1200px] mx-auto grid grid-cols-3 place-content-start gap-10">
        <Plate className="col-span-2 flex justify-between p-5">
          <div>
            <h1 className="mb-2 text-3xl font-bold">About</h1>
            <p className="max-w-96 text-xl">
              Hello My name is Denis, I am a beginner{' '}
              <span className="font-medium">front-end developer</span> and I
              live in Russia. Happy to help you with your questions or
              programming tasks.
            </p>
          </div>
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden border border-gray-100 p-2">
            <img src="images/avatar.jpg" alt="avatar" />
          </div>
        </Plate>
        <Plate className="flex h-full w-full items-center justify-center bg-black p-5">
          <a href="https://github.com/DenisEgorov200">
            <img src="icons/github-mark-white.svg" alt="github" />
          </a>
        </Plate>
        <Plate className="flex h-full min-h-48 w-full items-center justify-center bg-[#316FEA] p-5">
          <a href="https://t.me/@feaxh">
            <img src="icons/telegram.svg" alt="telegram" />
          </a>
        </Plate>
        <Plate className="col-span-2 h-full max-h-48 w-full rounded-md border border-gray-100 p-5">
          <h2 className="mb-2 text-lg font-medium">Projects</h2>
          <ul className="flex h-[80%] flex-col gap-2 overflow-scroll py-2">
            <li className="flex items-center gap-2 border border-gray-100 p-5">
              <h3 className="font-medium">KODE</h3>
              <img src="icons/kode-logo.svg" alt="kode-logo" />
              <a
                href="https://github.com/DenisEgorov200/kode-trainee-react"
                className="ml-auto flex items-center justify-center gap-2 rounded-md bg-black px-5 py-2 text-white"
              >
                <img
                  src="icons/github-mark-white.svg"
                  alt="github"
                  className="h-5 w-5"
                />
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2 border border-gray-100 p-5">
              <h3 className="font-medium">Sneakers 👟</h3>
              <a
                href="https://github.com/DenisEgorov200/adidas-sneakers"
                className="ml-auto flex items-center justify-center gap-2 rounded-md bg-black px-5 py-2 text-white"
              >
                <img
                  src="icons/github-mark-white.svg"
                  alt="github"
                  className="h-5 w-5"
                />
                GitHub
              </a>
            </li>
          </ul>
        </Plate>
      </div>
    </div>
  )
}
