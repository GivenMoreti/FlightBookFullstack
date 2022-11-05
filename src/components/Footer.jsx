import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  //up button
  function scrollUp() {
    const scrollUp = document.querySelector("#scroll-up");
    scrollUp.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
    console.log("scrolled up")
  }
  return (
    <div>
      <div className="footer">
        <p>Made with ❤️ by Givenchie Copyright reserved {year}</p>
        <input
        style={{float:"right",marginRight:20,fontSize:15,marginBottom:0}}
          type="submit"
          id="scroll-up"
          onClick={scrollUp}
          className="btn btn-secondary btn-lg bg-dark"
          value="Top"
        />
      </div>
      
    </div>
  );
}
export default Footer;
