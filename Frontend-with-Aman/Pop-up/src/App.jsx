import CasherBalance from "./components/CasherBalance";
import PopUp from "./components/PopUp";
import { useState } from "react";

function App() {
  // const [show, setShow] = useState(false);

  return (
    <>
      <div className=" w-full  h-[100px]">
        <div className="flex justify-center items-center">
        </div>

        <h1 className=" text-black z-0">
          lorem100the main written part of a book, newspaper, etc. (not the
          pictures, notes, index, etc.) किसी पुस्‍तक, अख़बार का मुख्‍य लिखित भाग
          (जिसमें चित्र, टिप्‍पणियाँ, अनुक्रमणिका आदि शामिल नहीं); मूल पाठ 2.
          the written form of a speech, interview, etc. किसी भाषण, साक्षात्‍कार
          आदि का लिखित रूप The newspaper printed the complete text of the
          interview.The newspaper printed the complete text of the interview. a
          set text [one that has to be studied for an examination] verb to send
          somebody a written message using a mobile phone मोबाइल फ़ोन या चल भाष
          पर लिखित संदेश भेजना
        </h1>
      </div>
      {/* <div className="bg-black w-full h-screen">
      <CasherBalance />
      </div> */}
      <PopUp/>
    </>
  );
}

export default App;
