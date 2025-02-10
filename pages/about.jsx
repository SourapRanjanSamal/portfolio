const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p className="">
        As a computer science engineering student, I am passionate about
        developing innovative software solutions that can make a positive impact
        on people's lives. I have a strong foundation in programming languages
        such as C, Python and some knowledge about Java as well as experience
        with web development technologies like HTML, CSS, and JavaScript. My
        goal is to leverage my technical skills and creativity to solve complex
        problems and contribute to the field of software engineering.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
