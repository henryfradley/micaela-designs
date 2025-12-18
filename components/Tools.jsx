
import { motion } from 'framer-motion';
import Image from 'next/image';


const Tools = () => {
  return (
    <div>

      <div class="myTools">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        MY TOOLS
      </motion.h1>
      </div>

      <div class="toolImages">
        <div class="adobe">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Image
            src="/Adobe.png"
            width="944"
            height="201"
            priority={true}
          />
        </motion.div>
        </div>


        <div class="coffee">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Image
            src="/Coffee.png"
            width="248"
            height="382"
            priority={true}
          />
        </motion.div>
        </div>


        <div class="office">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Image
            src="/Microsoft.png"
            width="892"
            height="279"
            priority={true}
           />
        </motion.div>
        </div>







      </div>



    </div>
  );
};


export default Tools;