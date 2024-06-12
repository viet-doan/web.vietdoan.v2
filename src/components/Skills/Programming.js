function Programming() {
  // const frontend = "https://skillicons.dev/icons?i=html,css,js,react";
  // const backend = "https://skillicons.dev/icons?i=py,c,java";
  // const database = "https://skillicons.dev/icons?i=mongodb,mysql";
  // const tools = "https://skillicons.dev/icons?i=ai,matlab,idea,vscode,git,github,figma";
  const programs1 = "https://skillicons.dev/icons?i=py,c,java,html,css,js,react,mysql"
  const programs2 = "https://skillicons.dev/icons?i=mongodb,matlab,idea,vscode,git,github,figma,ai"
  const alt1 = "Python, C, Java, HTML, CSS, JS, React, MySQL";
  const alt2 = "MongoDB, Matlab, IntelliJ IDEA, VSCode, Git, Github, Figma, Adobe Illustrator";

  const minimal1 = "https://skillicons.dev/icons?i=py,c,java,html,css,js";
  const minimal2 = "https://skillicons.dev/icons?i=react,mongodb,mysql,matlab,ai";
  const minimal3 = "https://skillicons.dev/icons?i=idea,vscode,git,github,figma";
  const alt3 = "Python, C, Java, HTML, CSS, JS";
  const alt4 = "React, MongoDB, MySQL, Matlab, Adobe Illsutrator";
  const alt5 = "IntelliJ IDEA, VSCode, Git, Github, Figma, Adobe Illustrator";

  return (
    <div className='column'>
      <div className='skills'>
        <img src={programs1} alt={alt1} />
        <img src={programs2} alt={alt2} />
      </div>
      <div className='skills-minimal'>
        <img src={minimal1} alt={alt3} /><br></br>
        <img src={minimal2} alt={alt4} /><br></br>
        <img src={minimal3} alt={alt5} />
      </div>      
    </div>

  );
}

export default Programming;