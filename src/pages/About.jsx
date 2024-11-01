import { AboutCard } from "./AboutCard";

function About() {
  return (
    <>
      <div className="px-[70px] bg-sky-950 pt-16 pb-8">
        <div className="text-center">
          <p className="text-3xl font-bold">
            Loved by Millions of people, Globally
          </p>
          <p className="text-[22px] font-extralight text-gray-200">
            Here’s how CubicleS is revolutionizing the way our users learn.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto items-start mt-10 ">
          <div className="grid gap-4 items-start">
            <AboutCard
              quote="Just completed @Hiteshdotcom 's excellent chai aur JavaScript series, and I couldn’t be more impressed! The explanations were clear and engaging, making complex concepts easy to understand for a beginner like me. Thanks for making learning accessible and enjoyable! #javascript"
              name="Bauaa"
            />
            <AboutCard
              quote="i appreciate the work he puts in every tutorial . i was trying to learn js for last 2 months and failed. then learnt js from him in 20 days with ease."
              name="Rudra"
            />
            <AboutCard
              quote="Never thought we can write methods directly into our schema, So much efforts have gone into this course, So many goodies one can take out from this course. Mad props to Sire Hitesh Chaudhary"
              name="Richi"
            />
          </div>
          <div className="grid gap-4 ">
            <AboutCard
              quote="I hope hitesh sees this comment. thanks hitesh, this knowledge is very hard to get but you are teaching it in free of cost. as fresher we struggle to understant the flow of application but can not able to understant specially when we work in MNCs."
              name="Bauaa"
            />
            <AboutCard
              quote="These videos are Really Top-notch and better than any paid course. Fully production Level. Sir you are really putting so much effort. This is great work. Philanthropy for betterment Hindi speaking Software Developers. Thank you so much."
              name="Rudra"
            />
            <AboutCard
              quote="3 saal phale apko ek news channel mein dekha tha then pichhle saal pata chala ke mera bada bhai bhe apko follow kerta h kyu ke ushne bhaut recommend kiya ek teacher h yt pr must follow ker and aab 3 months ho chuke h hn ji swagat h apka chai or code mein  thankyou so much sir confidence build kerne ke liye hamara"
              name="Richi"
            />
          </div>
          <div className="grid gap-4 ">
            <AboutCard
              quote="This series is exceptionally informative, expertly guided, with all concepts explained thoroughly and taught in the most accessible manner. I have never encountered a mentor as humble and experienced as you. Your practical approach in clarifying every concept sets you apart from traditional, textbook-oriented methods.️️️ Keep Calm and continue to impart knowledge"
              name="Bauaa"
            />
            <AboutCard
              quote="His voice in hindi (especially) is so soothing, I know all the concepts taught in this playlist so far still I’d watch each and every video, thank you so much hitesh sir for putting out such huge value on youtube!️"
              name="Rudra"
            />
            <AboutCard
              quote="Sir , I love you as student Your are a wow teacher and I am here after watching your playlist in fast forward I am freshman in college I was very confused due such large amount of info on YouTube But at last you r the one I trust So this is a thank you note for you"
              name="Richi"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export { About };
