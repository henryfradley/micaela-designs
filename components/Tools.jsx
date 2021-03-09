import Image from 'next/image';


const Tools = () => {
  return (
    <div>
      <div class="myTools">
        <h1>MY TOOLS</h1>
      </div>
      <div class="toolImages">
        <div class="adobe">
          <Image
            src="/Adobe.png"
            width="944"
            height="201"
          />
        </div>
        <div class="coffee">
          <Image
            src="/Coffee.png"
            width="248"
            height="382"
          />
        </div>
        <div class="office">
          <Image
            src="/Microsoft.png"
            width="892"
            height="279"
           />

        </div>






      </div>



    </div>
  );
};


export default Tools;